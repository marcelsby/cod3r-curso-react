import produtos from '../../data/produtos';
import './TabelaProdutos.css';

export default function TabelaProdutos() {
    const fmt = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const produtosTr = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.descricao}</td>
                <td>{fmt.format(produto.valor)}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>{produtosTr}</tbody>
        </table>
    );
}
