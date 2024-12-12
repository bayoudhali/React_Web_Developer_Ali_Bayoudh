import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/buttons/button";
import { Input } from "./components/inputs/defaultInput";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "./components/tables/table";
import ProductList from "./pages/productList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ProductList />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
