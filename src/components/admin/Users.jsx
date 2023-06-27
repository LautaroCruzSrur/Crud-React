import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

export const Users = () => {
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

  const deleteUser = async (userId) => {
    try {
      await fetch(`http://localhost:3000/user/${userId}`, {
        method: "DELETE",
      });
      getUsers(); // Obtener la lista actualizada después de eliminar un usuario
      console.log(`Usuario con ID ${userId} eliminado correctamente.`);
    } catch (error) {
      console.error(`Error al eliminar el usuario con ID ${userId}:`, error);
    }
  };

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <div className="m-1 d-flex flex-row" >
        {users.map((user) => (
          <>
          <Card  className="m-1 ms-4" style={{ width: "16rem" }}>
            <Card.Img variant="top" src={user.img} style={{ width: "16rem" , height: "10rem" }} />
            <Card.Body>
              <Card.Title>{user.nombre +' '+ user.apellido}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="m-1">Ver Perfil</Button>
              <Button onClick={() => deleteUser(user.id)}>Eliminar perfil</Button>
            </Card.Body>
          </Card>
          </>
        ))}
        </div>
    </div>
  );
};
