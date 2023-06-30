import React ,{useState , useEffect ,useContext} from 'react'
import axios from 'axios';
import { UsuariosContext } from '../../context/UserContext';


const EditUsers = () => {

  const { usuarios , getUsers} = useContext(UsuariosContext);

  useEffect(() => {
    getUsers();
  }, [usuarios]);
  

  return (
    <div>EditUsers</div>
  )
}

export default EditUsers