import React from "react"
import { Table } from "react-bootstrap"
import classes from "./SurgeriesTable.module.css"

const SurgeriesTable = ({importedData}) => {

    console.log("TABLA RUNNING")

    return (
        <Table striped bordered hover >
        <thead>
          <tr>
            <th>Código</th>
            <th>Procedimiento</th>
          </tr>
        </thead>
        <tbody>
          {importedData.map((item, index) => (
            <tr key={index} >
              <td>{item.id} </td>
              <td>{item.name}</td>
            </tr>
          ))}
          
        </tbody>
      </Table>
    )
  }
  export default React.memo(SurgeriesTable)