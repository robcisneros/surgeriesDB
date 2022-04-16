import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Procedimientos de mínima invasión</title>
        <meta name="description" content="Consulta procedimientos hospitalarios." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1>Hospitales!!</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://robcisneros.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maded by Roberto Cisneros
        </a>
      </footer>
    </div>
  )
}
