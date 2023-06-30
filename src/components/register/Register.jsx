import {useContext, useState} from 'react'
import { UsuariosContext } from '../../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col , Form , Row , Button} from 'react-bootstrap';


 const Register = () => {

  const {addUser} = useContext(UsuariosContext)

  const [usuarios, setUsuarios] = useState({
    nombre: "",
    apellido: "",
    email : "",
    contraseña : "",
    img : "",
    id : "",
    tipo : "usuario",
  });

    const handleChange = (e) => {
        setUsuarios({
            ...usuarios, //recupera los datos
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      addUser(usuarios);
    }

    setUsuarios({
      nombre: "",
      apellido: "",
      email : "",
      contraseña : "",
      img : "",
      id : "",
      tipo : "usuario",
    })
   
  return (
    <>
     <Form fluid onSubmit={handleSubmit} className="m-5 w-25">
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
    <Form.Label column sm="3">
      Nombre
    </Form.Label>
    <Col sm="10">
      <Form.Control
        type="text"
        placeholder="Nombre"
        name="nombre"
        value={usuarios.nombre}
        onChange={handleChange}
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextSubname">
    <Form.Label column sm="3">
      Apellido
    </Form.Label>
    <Col sm="10">
      <Form.Control
        type="text"
        placeholder="Apellido"
        name = "apellido"
        value={usuarios.apellido}
        onChange={handleChange}
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextImg">
    <Form.Label column sm="6">
      Foto de Perfil
    </Form.Label>
    <Col sm="10">
      <Form.Control
        type="text"
        placeholder="Url"
        name = "img"
        value={usuarios.img}
        onChange={handleChange}
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="3">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control
        type="email"
        placeholder="Email"
        name = "email"
        value={usuarios.email}
        onChange={handleChange}
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="3">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control
        type="password"
        placeholder="Password"
        name="password"
        value={usuarios.password}
        onChange={handleChange}
      />
    </Col>
  </Form.Group>
  <Button variant="outline-primary" type="submit">
    Crear
  </Button>
</Form>
    </>
  )
}
export default Register;
