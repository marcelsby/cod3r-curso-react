import './Card.css';

const Card = (props) => {
    const componentBgColor = props.color || '#5ac7e6';

    const cardStyle = {
        backgroundColor: componentBgColor,
        borderColor: componentBgColor,
    };

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    );
};

export default Card;
