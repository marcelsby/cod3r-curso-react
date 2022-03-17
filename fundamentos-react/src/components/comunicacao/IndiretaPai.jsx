import IndiretaFilho from './IndiretaFilho';

export default (props) => {
    let nome = '?';
    let idade = 0;
    let nerd = false;

    function fornecerDados(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam;
        idade = idadeParam;
        nerd = nerdParam;
    }

    return (
        <div>
            <span>{nome} </span>
            <span>
                <strong>{idade} </strong>
            </span>
            <span>{nerd ? 'verdadeiro!' : 'falso!'}</span>
            <IndiretaFilho quandoClicar={fornecerDados} />
        </div>
    );
};
