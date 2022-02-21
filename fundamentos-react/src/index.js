import ReactDOM from 'react-dom';

import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

ReactDOM.render(
    <div id="app">
        <Primeiro />
        <ComParametro 
            aluno="Pedro Silva" 
            nota={8.5} />
        <Fragmento />
    </div>,
    document.getElementById('root')
);