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
  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-400 to-yellow-300
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes = {clientes}></Tabela>
      </Layout>
    </div>
  )
}
