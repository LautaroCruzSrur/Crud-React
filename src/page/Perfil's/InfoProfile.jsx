import {useContext} from 'react'
import { UsuariosContext } from '../../context/UserContext'

export const InfoProfile = () => {
    const {viewProfileId , response} = useContext(UsuariosContext);
    console.log(viewProfileId);

  return (
    <div>InfoProfile</div>
  )
}
