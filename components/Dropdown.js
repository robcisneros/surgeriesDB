import { Form } from "react-bootstrap";

const Dropdown = (props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Busca el hospital</Form.Label>
      <Form.Select defaultValue={"DEFAULT"} onChange={(e) => props.onChange(e)}>
        <option value="DEFAULT" disabled>
          Selecciona un hospital
        </option>
        {props.hospitals.map((item) => {
          return (
            <option key={item.id} value={item.id} name={item.name}>
              {item.name}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default Dropdown;
