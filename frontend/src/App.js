import "./App.css";
import Table from "./components/Table";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Table />
    </div>
  );
};

export default App;
