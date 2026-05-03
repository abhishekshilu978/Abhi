import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
// import Modal from "./Components/Modals/Modal";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      {/* {Login Page} */}
      <Route path="/" element={<Login />}/>
      {/* {Register Page } */}
      <Route path="/" element={<Register/>}>

      </Route>

    </Routes>
     
    </BrowserRouter>
     
      
   
  )
}
export default App;