import Cliente from "../core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-4 text-left ">Código</th>
        <th className="p-4 text-left ">Nome</th>
        <th className="p-4 text-left ">Idade</th>
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id}
        className={`
        ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
        `}>
          <td className="p-4 text-left ">{cliente.id}</td>
          <td className="p-4 text-left ">{cliente.nome}</td>
          <td className="p-4 text-left ">{cliente.idade}</td>
        </tr>
      );
    });
  }
  return (
    <table className="w-full overflow-hidden rounded-xl">
      <thead className={`
      text-gray-100
      bg-gradient-to-r from-purple-500 to-purple-800
      `}>{renderizarCabecalho()}</thead>
      <tbody>
          {renderizarDados()}
      </tbody>
    </table>
  );
}
