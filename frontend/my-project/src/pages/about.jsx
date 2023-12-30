import Head from 'next/head'
import styles from '@/styles/About.module.scss'
import Menu from '@/components/menu/menu.jsx'
import Midias from '@/components/midias/midias'
import Tecnologias from '@/components/tecnologias/tecnologias'

export default function Home() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Eractrus de judá desenvolvedor web frontend backend formado" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.container}>
                <section className={styles.containerMain}>

                    <div className={styles.containerEsquerdo}>
                        <header>
                            <img src="https://avatars.githubusercontent.com/u/102633258?v=4" alt="imagem de perfil" />

                            <div className={styles.titulo}>
                                <section className={styles.containerTitulo}>
                                    <spam className={styles.nome}>Eractrus de Judá</spam>
                                    <spam className={styles.cargo}>WEB DEVELOPER</spam>
                                </section>
                                <Midias />
                            </div>
                        </header>
                        <hr />
                        <section className={styles.containerTecnologias}>
                            <Tecnologias />
                        </section>

                    </div>

                    <div className={styles.containerDireito}>
                        <h1>About</h1>
                        <hr />
                        <p>
                            Sou um profissional dedicado, autodidata e entusiasta por resolver problemas através da programação. Minha formação acadêmica e cursos complementares me proporcionaram uma base sólida em desenvolvimento web, enquanto meus projetos pessoais demonstram a aplicação prática desses conhecimentos. <br /><br />
                            Estou ansioso para aplicar minhas habilidades em um ambiente profissional desafiador e contribuir para o sucesso da equipe.

                        </p>
                    </div>
                </section>
                <Menu></Menu>

            </main>
        </>
    )
}
