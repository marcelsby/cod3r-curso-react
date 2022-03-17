import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

const App = () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#10 - Comunicação Indireta" color="#BA274A">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#643173">
                <ParOuImpar numero={8} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{ email: 'fernando@gmail.com' }} />
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#DE541E">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#32533D">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#904E55">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Números Aleatórios" color="#FE4A49">
                <Aleatorio min={0} max={10} />
            </Card>

            <Card titulo="#03 - Fragmentos" color="#2AB7CA">
                <Fragmento />
            </Card>

            <Card
                titulo="#02 - Componente com parâmetro (props)"
                color="#FFA400"
            >
                <ComParametro aluno="Pedro Silva" nota={8.5} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#005B96">
                <Primeiro />
            </Card>
        </div>
    </div>
);

export default App;
