//our-domain.com/hospital

import React from "react";
import MainTable from "../../components/MainTable";
import Card from "../../components/UI/Card/Card";
import classes from "./hospital.module.css";

function HospitalPage(props) {
  
  let content = <p>Found no data.</p>;

  if (props.allHospitals.length > 0) {
    content = <MainTable importedData={props.allHospitals} />;
  }

  return (
    <Card className={classes.home}>
      <h1>Selecciona un hospital</h1>
      {content}
    </Card>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const response = await fetch("https://backend-surgeries.herokuapp.com/api/hospitales");
  const data = await response.json();

  let allHospitals = [];
  allHospitals = data.map((dataItem) => {
    return {
      id: dataItem.id,
      name: dataItem.hospitalname,
    };
  });

  return {
    props: {
      allHospitals,
    },
    revalidate: 1,
  };
}

export default HospitalPage;
