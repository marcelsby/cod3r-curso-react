export default (props) => {
    return (
        <div>
            <span>{props.texto} </span>
            <span>
                <strong>{props.idade} </strong>
            </span>
            <span>{props.nerd ? 'verdadeiro!' : 'falso!'}</span>
        </div>
    );
};
