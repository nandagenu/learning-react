import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Fernanda';

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="Maria"/>
      <SayMyName name={name} />
      <Pessoa
      nome="Fernanda"
      idade="28"
      profissao="Desenvolvedora"
      foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
