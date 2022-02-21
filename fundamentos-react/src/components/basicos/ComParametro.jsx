export default function ComParametro(props) {
    const status = props.nota >= 6 ? 'Aprovado' : 'Recuperação';
    const notaComVirgula = props.nota.toString().replace('.', ',');

    return (
        <div>
            <h2>Situação do aluno</h2>
            <p>Nome: {props.aluno}</p>
            <p>Nota: {notaComVirgula}</p>
            <p>Situação: {status}</p>
        </div>
    );
}
