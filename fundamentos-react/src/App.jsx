import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

const App = () => (
    <div id="app">
        <h1>Fundamentos React (Arrow _)</h1>
        <Aleatorio min={0} max={10} />
        <Fragmento />
        <ComParametro aluno="Pedro Silva" nota={8.5} />
        <Primeiro />
    </div>
);

export default App;
