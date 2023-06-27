import {useState} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form ,Col , Row , Button} from 'react-bootstrap'


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
             axios.get("http://localhost:3000/user")
            .then((response) => {
                const users = response.data;
                const user = users.find((user) => user.email === email && user.password === password );
                if(user){
                            console.log("Usuario Logeado")
                        }else {
                            console.log("Usario y contraseña Incorrecta");
                        }
                        console.log(user , "user");
            })
            .catch((error) => {
                console.error("Error al obtener los usuarios:", error);
            });          
    };
    
    
  return (
    <>
    <Form onSubmit={handleSubmit} className="m-5 w-25">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="3">Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Password
        </Form.Label>
        <Col sm="15">
          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Col>
      </Form.Group>
      <Button variant="outline-primary" type="submit">
     Iniciar Sesion
  </Button>
    </Form>
    </>
  )
}
