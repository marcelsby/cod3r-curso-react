import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';

const App = () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#904E55">
                <Familia sobrenome="Ferreira" />
            </Card>
            <Card titulo="#04 - Desafio Números Aleatórios" color="#fe4a49">
                <Aleatorio min={0} max={10} />
            </Card>
            <Card titulo="#03 - Fragmentos" color="#2ab7ca">
                <Fragmento />
            </Card>
            <Card
                titulo="#02 - Componente com parâmetro (props)"
                color="#fed166"
            >
                <ComParametro aluno="Pedro Silva" nota={8.5} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#005b96">
                <Primeiro />
            </Card>
        </div>
    </div>
);

export default App;
