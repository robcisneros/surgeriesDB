import React from "react"
import { Table } from "react-bootstrap"
import { useRouter } from "next/router"

const MainTable = (props) => {
  const router = useRouter()
    
    console.log("TABLA RUNNING")

    const handleRowClick = (row) => {
      // history.push(`/hospital/${row}`);
      router.push('/hospital/' + row)
      
    } 

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Hospital</th>
          </tr>
        </thead>
        <tbody>
          {props.importedData.map((item, index) => (
            
            <tr key={index} onClick={()=> handleRowClick(item.id)} >
              <td>{item.id} </td>
              <td>{item.name}</td>
            </tr>
            
          ))}
        </tbody>
      </Table>
    )
  }
  export default React.memo(MainTable)