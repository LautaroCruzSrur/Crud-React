import {useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Register = () => {
    const [dataUser, setDataUser] = useState({
        nombre: "",
        apellido : "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setDataUser({
            ...dataUser, //recupera los datos
            [e.target.name]: e.target.value
        });
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        try {
            const response = axios.post("http://localhost:3000/user", dataUser)
            console.log(response)
        }catch (error){
            console.log(error)
        }
    }
  return (
    <>
    <form onSubmit={handleSumbit}> 
        <label htmlFor='nombre' className='form-latest'>
            Nombre
        </label>
        <input type='text' name='nombre' value={dataUser.nombre} onChange={handleChange}/>
        <label htmlFor='apellido' className='form-latest'>
            Apellido
        </label>
        <input type='text' name='apellido' value={dataUser.apellido} onChange={handleChange}/>
        <label htmlFor='email' className='form-latest'>
            Email
        </label>
        <input type='email' name='email' value={dataUser.email} onChange={handleChange}/>
        <label htmlFor='password' className='form-latest'>
            Contraseña
        </label>
        <input type='password' name='password' value={dataUser.password} onChange={handleChange}/>
        <button/>
    </form>
    </>
  )
}
