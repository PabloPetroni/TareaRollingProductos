import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from "./routes/AppRouter"
import { Productos } from './components/Productos';

function App() {
  

  return (
    <>
      <AppRouter/>
      <Productos/>
    </>
  )
}

export default App
