import ReactDOM from 'react-dom';

const text = 'Olá React!';

ReactDOM.render(
    <div>
        <strong>
            {text}
        </strong>
    </div>,
    document.getElementById('root')
);