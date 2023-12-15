import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import List from './Components/List/List';
import { Numadd, Nmsub, Numdiv, Nummult } from './Components/Calculator/Calculator'


function App() {
  return (
    <div className="App">
      <Home />
      <List />
      <div>
        <ul>
          <li>{Numadd(7,3)}</li>
          <li>{Nmsub(7,3)}</li>
          <li>{Numdiv(7,3)}</li>
          <li>{Nummult(7,3)}</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
