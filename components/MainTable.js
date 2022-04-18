import React from "react"
import { Table } from "react-bootstrap"

const MainTable = ({importedData}) => {

    console.log("TABLA RUNNING")

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Hospital</th>
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
  export default React.memo(MainTable)