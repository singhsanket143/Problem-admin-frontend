import { ToastContainer } from 'react-toastify'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import CreateProblem from './Pages/CreateProblem'

function App() {

  return (
    <div>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <CreateProblem />
      
    </div>
  )
}

export default App
