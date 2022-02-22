import { cloneElement } from 'react';

export default function Familia(props) {
    return (
        <div>
            {props.children.map((child, i) => {
                return cloneElement(child, {
                    key: i,
                    sobrenome: props.sobrenome,
                });
            })}
        </div>
    );
}
