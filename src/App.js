import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import CreateContact from "./components/CreateContact";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
      <div className="App">
        <div className="appHead">Contact Page</div>

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainContent />}></Route>
            <Route exact path="/create" element={<CreateContact />}></Route>
            <Route exact path="/read" element={<Read />}></Route>
            <Route exact path="/update" element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
