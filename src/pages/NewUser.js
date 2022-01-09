import { useHistory } from 'react-router-dom';
import React, { useEffect} from 'react'
import NewUserForm from '../components/users/NewUserForm';
import useHttp from '../hooks/use-http';
import { addUser } from '../api/userApi';

const NewUser = () => {
    const { sendRequest, status} = useHttp(addUser);
    const history = useHistory();

    useEffect(() => {
        if(status === 'completed') {
            history.push('/usersWebApp/users')
        }
    }, [status, history])

    const addUserHandler = userData => {
        sendRequest(userData)
    }
    return (
       <NewUserForm onAddUser ={addUserHandler} />
    )
}

export default NewUser
