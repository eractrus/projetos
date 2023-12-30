import Head from 'next/head'
import styles from '@/styles/Projects.module.scss'
import Menu from '@/components/menu/menu'


export default function Home() {
    return (
        <>
            <Head>
                <title>Projetcs</title>
                <meta name="description" content="Projetos desenvolvedido por Eractrus de Judá" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <nav className={styles.menuFilter}>

            </nav>
            <main className={styles.container}>

                <section className={styles.containerProject}>
                    <h1>Projects</h1>

                    <p>Sem projetos no momento, Estou criando novo porjetos para mostrar novos conhecimentos adiquiridos</p>
                </section>

                <Menu />
            </main>
        </>
    )
}
