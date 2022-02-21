import ReactDOM from 'react-dom';

import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro 
            aluno="Pedro Silva" 
            nota={8.5} />
    </div>,
    document.getElementById('root')
);