import { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function fornecerDados(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);

        console.log(nome, idade, nerd);
    }

    return (
        <div>
            <span>{nome} </span>
            <span>
                <strong>{idade} </strong>
            </span>
            <span>{nerd ? 'é nerd!' : 'não é nerd!'}</span>
            <IndiretaFilho quandoClicar={fornecerDados} />
        </div>
    );
};
