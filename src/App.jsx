import Form from "./Form.jsx";
import Input from "./Input.jsx";
import Select from "./Select.jsx";
import { unitData, optionsData } from "./Data.jsx";

export default function App() {
  return (
    <Form>
      <Input>Nome:</Input>
      <Input>Quantidade:</Input>
      <Select data={unitData}>Unidade:</Select>
      <Select data={optionsData}>Estado:</Select>
      <Button>Enviar</Button>
    </Form>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
