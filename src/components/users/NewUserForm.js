import { useRef, useState } from "react";
import { userSchema } from "../../validations/UserValidation";
import Card from "../ui/Card";
import classes from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const birthdateInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();
  const identityInputRef = useRef();
  const passportnumberInputRef = useRef();
  const [error, setError] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredBirthdate = birthdateInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredIdentity = identityInputRef.current.value;
    const enteredPassportnumber = passportnumberInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredSurname.trim().length === 0 ||
      enteredBirthdate.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0 ||
      enteredPhone.trim().length === 0 ||
      enteredIdentity.trim().length === 0 ||
      enteredPassportnumber.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Cannot insert empty values.",
      });
      return;
    }

    if (enteredName.length < 2 || enteredName.length > 20) {
      setError({
        title: "Invalid Name",
        message:
          "Name should be at least 2 symbols and not more than 20 symbols.",
      });
      return;
    }

    if (enteredSurname.length < 2 || enteredSurname.length > 20) {
      setError({
        title: "Invalid Surname",
        message:
          "Surname should be at least 2 symbols and not more than 20 symbols.",
      });
      return;
    }

    if (enteredPassword.length < 2 || enteredPassword.length > 15) {
      setError({
        title: "Invalid Password",
        message: "Should be at least 6 symbols but not more than 15 symbols",
      });
      return;
    }

    if (enteredPhone.length < 5 || enteredPhone.length > 13) {
      setError({
        title: "Invalid Phone number",
        message: "Should be at least 5 but not more than 13 digits ",
      });
      return;
    }

    if (enteredIdentity !== 'ID' && enteredIdentity !== 'Passport') {
      setError({
        title: "Identity error",
        message: "Only ID or Passport can be chosen ",
      });
      return;
    }

    if (enteredPassportnumber.length < 5 || enteredPassportnumber.length > 9) {
      setError({
        title: "Invalid Passport number",
        message: "Should be at least 5 but not more than 9 digits ",
      });
      return;
    }

    if (new Date(enteredBirthdate) > new Date()) {
      setError({
        title: "Invalid Date of Birth",
        message: "Please insert valid date of birth",
      });
      return;
    }
    const validateEmail = (enteredEmail) => {
      return String(enteredEmail)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if(!validateEmail(enteredEmail) || enteredEmail.length > 50){
      setError({
        title: "Invalid Email format",
        message: "Please check if email format is correct",
      });
      return;
    }

    const userData = {
      name: enteredName,
      surname: enteredSurname,
      birth_date: enteredBirthdate,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
      identity: enteredIdentity,
      passport_number: enteredPassportnumber,
    };

    props.onAddUser(userData);

    // const isValid = await userSchema.isValid(userData);
    // if (isValid) {
    //   props.onAddUser(userData);
    // } else {
    //   alert("Could not create, wrong values inserted");
    // }
  };

  return (
    <Card>
      {error && (
        <div className={classes.error_box}>
          {" "}
          <div className={classes.error_title}>{error.title}</div>
          <div className={classes.error_message}>{error.message}</div>
        </div>
      )}
 
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <div className="w-50">
            <label htmlFor="Name">Name</label>
            <input type="text" required id="Name" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="Surname">Surname</label>
            <input type="text" required id="Surname" ref={surnameInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <label htmlFor="birthdate">Birth Date</label>
            <input
              type="date"
              required
              id="birthdate"
              ref={birthdateInputRef}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required ref={emailInputRef}></input>
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              ref={passwordInputRef}
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              required
              ref={phoneInputRef}
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <div>
            <label htmlFor="identity">Identity</label>
            <select id="identity" ref={identityInputRef} required>
              <option value="ID" defaultValue>ID</option>
              <option value="Passport">Passport</option>
            </select>
          </div>
          <div>
            <label htmlFor="passportnumber">Passport Number</label>
            <input
              id="passportnumber"
              type="number"
              required
              ref={passportnumberInputRef}
            ></input>
          </div>
        </div>
        <div className={classes.actions}>
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default NewUserForm;
