import ReactDOM from 'react-dom';
import './index.css';

const tag =  <strong>Olá React!</strong>;

ReactDOM.render(
    <div>
        <strong>
            {tag}
        </strong>
    </div>,
    document.getElementById('root')
);