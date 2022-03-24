import './styles.css'
import 'react-toastify/dist/ReactToastify.css'

import Routes from "./routes";
import Header from './components/header';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='app'>
       <Header/>
       <Routes/>
       <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
