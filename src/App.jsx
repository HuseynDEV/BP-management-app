import Router from './router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const notify = () => toast("Wow so easy!");

  return (
    < div >
        <Router />
      <ToastContainer />

    </div>
  )
}

export default App
