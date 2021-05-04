import "./App.css";
import Row from "./components/Row";
import RowB from "./components/RowB";

function App() {
  return (
    <>
      <div className="gc">
        <RowB />
        <Row />
        <Row />
        <RowB />
        <RowB />
        <Row />
        <Row />
      </div>
    </>
  );
}

export default App;
