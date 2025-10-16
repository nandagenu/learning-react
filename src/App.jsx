import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const name = 'Fernanda';

  return (
    <div className="App">
      <HelloWorld />
      <Frase />
      <Frase />
      <SayMyName name="Maria"/>
      <SayMyName name={name} />
      <Pessoa
      nome="Fernanda"
      idade="28"
      profissao="Desenvolvedora"
      foto="https://placehold.co/150"
      />
      <List />
    </div>
  );
}

export default App;
