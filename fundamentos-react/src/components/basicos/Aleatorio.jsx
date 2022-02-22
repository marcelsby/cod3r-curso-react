// Função que retorna um número aleatório inteiro localizado entre os valores dos parâmetros "min" e "max".
// É um gerador inclusivo, então os valores de "min" e "max" também são possíveis valores a serem sorteados.
const getNumAleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
};

export default function Aleatorio(props) {
    const { min, max } = props;
    const numAleatorio = getNumAleatorio(min, max);

    return (
        <>
            <h2>Sorteador de números</h2>
            <p>
                <strong>Valor Mínimo: </strong>
                {min}
            </p>
            <p>
                <strong>Valor Máximo: </strong>
                {max}
            </p>
            <p>
                <strong>Valor Sorteado: </strong>
                {numAleatorio}
            </p>
        </>
    );
}
