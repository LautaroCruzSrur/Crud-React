import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import  Routes  from './routes/Routes';
import UserContext from "./context/UserContext"


function App() {

  return (
    <>
    <UserContext>
      <Header />
      <Routes />
      </UserContext>

    </>
  )
}

export default App
