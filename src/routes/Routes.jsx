import {Route , Routes as Ruta} from 'react-router-dom'
import Home from '../page/home/Home';
import About from '../page/about/About';
import { Login } from '../components/Login/Login';
import  Register  from '../components/register/Register';
import { ListUsers } from '../page/admin/ListUsers';
import { InfoProfile } from '../page/Perfil\'s/InfoProfile';


const Routes = () => {

  return (
        <>
        <Ruta>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/users" element={<ListUsers />}/>
            <Route path="/informacionDePerfil" element={<InfoProfile />}/>
        </Ruta>
    </>
  )
}

export default Routes;