import React ,{useState , useEffect} from 'react'
import axios from 'axios';


const EditUsers = () => {

    const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user");
      setUsers(response.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };


    const editUsers = async () => {
        try {
          const response = await axios.put("http://localhost:3000/user");
          setUsers(response.data);
        } catch (error) {
          console.error("Error al obtener los usuarios:", error);
        }
      };
  return (
    <div>EditUsers</div>
  )
}

export default EditUsers