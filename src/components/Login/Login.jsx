import {useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSumbit = (e) =>{
        e.preventDefault();
        try {
            const response = axios.get("http://localhost:3000/user")
            const users = response.data;


            const user = users.find((user) => user.email === email && user.password === password );

            if(user){
                console.log("Usuario Logeado")
            }else {
                console.log("Usario y contraseña Incorrecta");
            }

            console.log(user , "user");
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <>
    <form onSubmit={handleSumbit}>
        <label htmlFor="text" className='form-label' >
            Email
        </label>
        <input 
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='password' className='form-label'>
            Password
        </label>
        <input 
        type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </form>
    </>
  )
}
