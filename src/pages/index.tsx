import Layout from "../components/Layout";


export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-400 to-yellow-300
    `}>
      <Layout titulo="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}
