import { useContext } from "react";
import { Button, Card  } from "react-bootstrap";
import { UsuariosContext} from "../../context/UserContext";

const CardUsers = () => {

  const { usuarios , deleteUsers ,viewProfileId } = useContext(UsuariosContext);

const handleDelete = (id) =>{
  console.log(id);
  deleteUsers(id);
}
const viewPerfil = (id) =>{
  console.log(id)
  window.location.href="/informacionDePerfil"
  viewProfileId(id)

}

  return (
    <>
      <div className="m-1 d-flex flex-row"  >
      {usuarios === undefined
          ? "No hay productos en la tienda"
          : usuarios.map((user,index) => (
          <div key={index}>
          <Card className="m-1 ms-4" style={{ width: "16rem" }}>
            <Card.Img variant="top" src={user.img} style={{ width: "16rem" , height: "10rem" }} />
            <Card.Body>
              <Card.Title>{user.nombre +' '+ user.apellido}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Button variant="primary" onClick={() => viewPerfil(user.id)} className="m-1">Ver Perfil</Button>
               <Button variant="primary" onClick={() => handleDelete(user.id)}>Eliminar perfil</Button>
            </Card.Body>
          </Card>
          </div>
        ))}
        </div>
    </>
  );
};

export default CardUsers
