import './App.css';
import Condicional from './components/Condicional.js';
import Evento from './components/Evento.js'
import Form from './components/Form.js'

function App() {
  return (
    <div className="App">
      <Evento />
      <Form />
      <Condicional />
    </div>
  );
}

export default App
