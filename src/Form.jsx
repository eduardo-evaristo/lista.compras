/*I'm using component composition here*/
export default function Form({ children }) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Insira as informações do produto:</h1>
      {children}
    </form>
  );
}
