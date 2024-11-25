import Carrousel from './Components/Carrousel';
import NavBar from './Components/NavBar';
import Socials from './Pages/Socials';
import Programas from './Components/Programas'
import './Style/App.css';
import { common } from '@mui/material/colors';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carrousel />
      <Programas />
      <Socials />
      
    </div>
  );
}

export default App;
