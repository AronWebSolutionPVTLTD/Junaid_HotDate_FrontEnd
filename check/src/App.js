import { Route, Routes } from "react-router-dom";
import "./App.css";
import New from "./New";

function App() {
  return (
    <>
      <Routes>
        <Route path="/new" element={<New />} />
      </Routes>
    </>
  );
}

export default App;
