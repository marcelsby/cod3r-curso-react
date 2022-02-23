import If, { Else } from './If';

export default function UsuarioInfo(props) {
    const usuario = props.usuario || {};

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem-vindo(a), <strong>{usuario.nome}</strong>!
                <Else>Seja bem-vindo(a), faça o login para prosseguir.</Else>
            </If>
        </div>
    );
}
