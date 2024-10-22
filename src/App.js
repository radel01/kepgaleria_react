import logo from './logo.svg';
import './App.css';
import Jatekter from './components/JatekTer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
        <div className='foKep'>

        </div>
        <div className='jatekTer'>
          <Jatekter lista={lista}/>
        </div>

      </header>
    </div>
  );
}

export default App;
