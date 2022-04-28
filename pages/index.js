import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import HomeComponent from "../components/Home/HomeComponent";

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Procedimientos de mínima invasión</title>
        <meta
          name="description"
          content="Consulta procedimientos hospitalarios."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Consulta los procedimientos en tu hospital:</h1>
        <HomeComponent hospitals={props.allHospitals} />
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
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const response = await fetch("https://backend-surgeries.herokuapp.com/api/hospitales");
  const data = await response.json();

  return {
    props: {
      allHospitals: data.map((dataItem) => ({
        id: dataItem.id,
        name: dataItem.hospitalname,
      })),
    },
    revalidate: 1,
  };
}
