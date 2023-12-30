import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Menu from '@/components/menu/menu.jsx'
import Midias from '@/components/midias/midias'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Eractrus de judá desenvolvedor web frontend backend formado" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>

          <div className={styles.containerEsquerdo}>
            <section className={styles.containerTitulo}>
              <h1>Hi, my name Eractrus de Judá</h1>
              <h2>AND I'M A WEB DEVELOPER</h2>
            </section>
            <Midias />
          </div>

          <div className={styles.containerDireito}>
            <img src="https://avatars.githubusercontent.com/u/102633258?v=4" alt="imagem de perfil" />
          </div>
  
        <Menu></Menu>
      </main>
    </>
  )
}
