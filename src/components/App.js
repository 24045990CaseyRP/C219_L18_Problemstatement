import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Diplomas from "./Diplomas";
import Header from "./Header";
import Diploma from "./Diploma";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home title="Welcome to Republic Polytechnic" />}></Route>
        <Route path="diplomas" element={<Diplomas/>}>
          <Route path=":diplomaId" element={<Diploma/>}>
            <Route path=":moduleId" element={<Session/>}/>
          </Route>
          <Route index element={<h3>Select a Diploma from above</h3>}></Route>
        </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="confirmed" element={<Confirmation/>}/>
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>}></Route>
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
