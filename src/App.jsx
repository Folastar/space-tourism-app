// import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";

function App() {
  return (
    <div className=" text-white  min-h-screen  bg-no-repeat bg-center  sm:bg-[image:url(/assets/home/background-home-desktop.jpg)] bg-[image:url(/assets/home/background-home-mobile.jpg)]">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/crew" element={<Crew />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
