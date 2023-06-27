import {Route , Routes as Ruta} from 'react-router-dom'
import Home from '../page/home/Home';
import About from '../page/about/About';
import { Login } from '../components/Login/Login';
import { Register } from '../components/register/Register';
import { Users } from '../components/admin/Users'


const Routes = () => {

  return (
        <>
        <Ruta>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/users" element={<Users/>}/>

        </Ruta>
    </>
  )
}

export default Routes;