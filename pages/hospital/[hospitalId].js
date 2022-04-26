import SurgeriesTable from "../../components/SurgeriesTable";
import Card from "../../components/UI/Card/Card";
import styles from "../../styles/Home.module.css";
import React from "react";

function DetailPage(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Card>
          <h2> {props.exportedData[0].hospitalname} </h2>
          <SurgeriesTable importedData={props.exportedData} />
        </Card>
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
export async function getStaticPaths() {
  const response = await fetch("http://localhost:9000/api/hospitales");
  const data = await response.json();

  const paths = data.map((dataItem) => {
    return {
      params: { hospitalId: dataItem.id.toString() },
    };
  });

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const hospitalId = context.params.hospitalId;
  console.log(hospitalId);
  // fetch data from an API
  const response = await fetch("http://localhost:9000/api/" + hospitalId);
  const surgeriesPerHospital = await response.json();
  
  let exportedData = [];
  exportedData = surgeriesPerHospital.map((dataItem) => {
    return {
      id: dataItem.idprocedimiento,
      name: dataItem.surgeryname,
      hospitalname: dataItem.hospitalname,
    };
  });
  return {
    props: {
      exportedData,
    },
  };
}

export default DetailPage;
