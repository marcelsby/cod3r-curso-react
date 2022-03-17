export default (props) => {
    const callback = props.quandoClicar;
    const gerarIdade = () => parseInt(Math.random() * 20) + 50;
    const gerarNerd = () => Math.random() > 0.5;

    return (
        <div>
            <div>Filho</div>
            <button
                onClick={(_) => callback('João', gerarIdade(), gerarNerd())}
            >
                Fornecer Dados
            </button>
        </div>
    );
};
