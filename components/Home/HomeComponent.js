import React, { useState, useContext} from "react";
import Dropdown from "../Dropdown";
import Card from "../UI/Card/Card";
import classes from "./HomeComponent.module.css";
import { useRouter } from "next/router";
import SearchButton from "../UI/Button/SearchButton";

const HomeComponent = ({ hospitals }) => {
  const router = useRouter();

  const [selectedHospital, setSelectedHospital] = useState();
  const [onSelected, setOnSelected] = useState(true);

  const onChangeHandler = (e) => {
    setSelectedHospital(e.target.value);
    setOnSelected(false);
    let index = e.target.selectedIndex;
    let nameValue = e.target[index].text;
    console.log(nameValue);
  };

  const onClickHandler = () => {
    router.push("/hospital/" + selectedHospital);
  };

  return (
    <Card className={classes.home}>
      <Dropdown onChange={onChangeHandler} hospitals={hospitals} />
      <SearchButton onClick={onClickHandler} disabled={onSelected}>
        Search
      </SearchButton>
    </Card>
  );
};

export default HomeComponent;
