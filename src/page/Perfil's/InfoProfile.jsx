import {useContext} from 'react'
import { UsuariosContext } from '../../context/UserContext'

export const InfoProfile = () => {
    const {viewProfileId} = useContext(UsuariosContext);

    viewProfileId()


  return (
    <div>InfoProfile</div>
  )
}
