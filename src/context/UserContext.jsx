import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UsuariosContext = createContext() //universo. Todo lo que este aqui adentro va a tener acceso a los usuarios



// eslint-disable-next-line react/prop-types
const UserContext = ({children}) => {
    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user")
            setUsuarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    //peticion de Post

    const addUser = async (usuarios) =>{
        try {
            const response = axios.post("http://localhost:3000/user", usuarios)
            console.log(response)
        }catch (error){
            console.log(error)
        }
    }
    //Put
    // const updateUsers = async (usuario) =>{
    //     try{
    //         await axios.put(`http://localhost:3000/user/{$usuario.id}` ,usuario)

    //     }
    //     await getUsuarios();
    //     catch(error){
    //         console.log(error)
    //     }
    // }
    const deleteUsers = async (id) => {
        console.log(id, "id de context");
        try {
          await axios.delete(`http://localhost:3000/user/${id}`);
          const deleteUsuario = usuarios.filter((usuario) => usuario.id !== id);
          setUsuarios(deleteUsuario);
        } catch (error) {
          console.log(error, "error de productos");
        }
      };

      const viewProfileId= async (id) => {
        try {
             await axios.get(`http://localhost:3000/user/${id}`)
            const profileId = usuarios.filter((usuario => usuario.id !== id))
            setUsuarios(profileId);
        } catch (error) {
            console.log(error)
        }
      }
    
    const logout = () => {
        localStorage.removeItem("user")
        window.location.href = "/login"
    }

    useEffect(() => {
        getUsuarios()
    }, [])

  return (
    <UsuariosContext.Provider value={{usuarios, setUsuarios, logout ,addUser , deleteUsers ,viewProfileId}}>
        {children}
    </UsuariosContext.Provider>
    
  )
}

export default UserContext