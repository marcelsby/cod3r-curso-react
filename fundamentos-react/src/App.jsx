import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

const App = () => (
    <div id="app">
        <h1>Fundamentos React (Arrow _)</h1>
        <Fragmento />
        <ComParametro aluno="Pedro Silva" nota={8.5} />
        <Primeiro />
    </div>
);

export default App;
