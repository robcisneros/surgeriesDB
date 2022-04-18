import { Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import MainTable from "../MainTable";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./HomeComponent.module.css";

const HomeComponent = () => {
  const [searchedHospital, setSearchedHospital] = useState([]);

  const [selectedHospital, setSelectedHospital] = useState(null);

  const { isLoading, error, sendRequest: fetchHospitals } = useHttp();

  useEffect(() => {
    const transformData = (dataObj) => {
      const loadedData = [];

      dataObj.map((dataItem) => {
        loadedData.push({ id: dataItem.id, name: dataItem.hospitalname });
      });

      dataObj.forms;

      setSearchedHospital(loadedData);
    };
    fetchHospitals(
      {
        url: "http://localhost:9000/api/hospitales",
      },
      transformData
    );
  }, [fetchHospitals]);

  let content = <p>Found no data.</p>;

  if (searchedHospital.length > 0) {
    content = <MainTable importedData={searchedHospital} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  const onChangeHandler = (e) => {
    setSelectedHospital(e.target.value)
    console.log(selectedHospital)
  }

  const onClickHandler = () => {
    console.log("hi")
  }

  // const DUMMY_DATA = [
  //   { hospitalname: "hgral raza", id: "301" },
  //   { hospitalname: "hesp raza", id: "307" },
  // ];

  return (
    <Card className={classes.home}>
      <Form.Group className="mb-3">
        <Form.Label>Busca el hospital</Form.Label>
        <Form.Select defaultValue={'DEFAULT'} onChange={(e) => onChangeHandler(e)}>
          <option value="DEFAULT" disabled>
            Selecciona un hospital
          </option>
          {searchedHospital.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Button onClick={onClickHandler}>Search</Button>
      <hr></hr>
      {content}
    </Card>
  );
};

export default HomeComponent
