import {useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col , Form , Row , Button} from 'react-bootstrap';



export const Register = () => {
    const [dataUser, setDataUser] = useState({
        nombre: "",
        apellido : "",
        email: "",
        password: "",
        img : "",
    });
    const handleChange = (e) => {
        setDataUser({
            ...dataUser, //recupera los datos
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
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
        value={dataUser.nombre}
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
        value={dataUser.apellido}
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
        value={dataUser.img}
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
        value={dataUser.email}
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
        value={dataUser.password}
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
