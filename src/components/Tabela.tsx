import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado  
  
  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-4 text-left ">Código</th>
        <th className="p-4 text-left ">Nome</th>
        <th className="p-4 text-left ">Idade</th>
        {exibirAcoes ? <th className="p-4">Acões</th> : false}
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
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex items-center justify-center">
        {props.clienteSelecionado ? (
        <button onClick={() => props.clienteSelecionado?.(cliente) } className={`
        flex justify-center items-center
        text-green-700 rounded-full p-2 m-1
        hover:bg-purple-50
        `}>
          {IconeEdicao}
        </button>   
        ): false}
        {/*  */}
        {props.clienteExcluido ? (
        <button onClick={() => props.clienteExcluido?.(cliente) } className={`
        flex justify-center items-center
        text-red-700 rounded-full p-2 m-1
        hover:bg-purple-50
        `}>
          {IconeLixo}
        </button>  
        ) : false}
        
      </td>
    )
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
