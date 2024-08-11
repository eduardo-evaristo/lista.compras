import Form from "./Form.jsx";
import Input from "./Input.jsx";
import Select from "./Select.jsx";
import { unitData, optionsData } from "./Data.jsx";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Form>
        <Input>Nome:</Input>
        <Input>Quantidade:</Input>
        <Select data={unitData}>Unidade:</Select>
        <Select data={optionsData}>Estado:</Select>
        <Button>Enviar</Button>
      </Form>
    </>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Hello</h1>
      <Navbar>
        <NavbarItem>Teste 1</NavbarItem>
        <NavbarItem>Teste 2</NavbarItem>
        <NavbarItem>Teste 3</NavbarItem>
      </Navbar>
    </header>
  );
}

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <ul className="navbar__list">{children}</ul>
    </nav>
  );
}

function NavbarItem({ children }) {
  return (
    <li className="navbar__list__item">
      <button className="navbar__list__item__button">{children}</button>
    </li>
  );
}

function HeroSection() {
  return (
    <div className="hero__section">
      <div className="hero__section__container">
        <div className="hero__section__container__text">
          <h1 className="hero__section__container__text__title">
            Tenha mais controle sob suas compras!
          </h1>
        </div>
        <button className="hero__section__container__button">Começar</button>
      </div>
      <img src="assets/heropic.jpg" alt="" className="hero__section__image" />
    </div>
  );
}
