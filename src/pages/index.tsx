import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {

  const clientes = [ 
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 23, '2'),
    new Cliente('João', 38, '3'),
    new Cliente('Paulo', 27, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
      console.log(cliente.nome)
  }


  function clienteExcluido(cliente: Cliente) {
      console.log(`Excluir... ${cliente.nome}`)
  }


  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-400 to-yellow-300
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
        <Botao className={`mb-4`}>Novo Cliente.</Botao>
        </div>
        <Tabela clientes={clientes}
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        />
        <Formulario cliente={clientes[0]}></Formulario>
      </Layout>
    </div>
  )
}
