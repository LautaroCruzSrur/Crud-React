import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import  Routes  from './routes/Routes';
import { Register } from './components/register/Register';


function App() {

  return (
    <>
      <Header />
      <Routes />
    </>
  )
}

export default App
