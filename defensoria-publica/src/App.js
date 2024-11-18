import Carrousel from './Components/Carrousel';
import Copy from './Components/Copy';
import NavBar from './Components/NavBar';
import Socials from './Pages/Socials';
import './Style/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carrousel />
      <Copy />
      <Socials />
    </div>
  );
}

export default App;
