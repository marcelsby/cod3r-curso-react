export default (props) => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={(e) => props.quandoClicar('João', 53, true)}>
                Fornecer Dados
            </button>
        </div>
    );
};
