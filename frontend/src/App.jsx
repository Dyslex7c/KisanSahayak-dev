import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import SignUp from "./pages/auth/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Upload from "./pages/upload/Upload";
import Capture from "./pages/upload/Capture";
//import fetchWeatherInfo from "./utils/getLocationAndWeatherData";
import Dashboard from "./pages/dashboard/Dashboard";
import MarketPlace from "./pages/marketplace/Marketplace"
import useGetPredictions from "./hooks/useGetPredictions";
import { useEffect } from "react";
import MarketplaceSell from "./pages/marketplace/MarketplaceSell";
import MarketplaceBuy from "./pages/marketplace/MarketplaceBuy";

function App() {
  const { authUser } = useAuthContext();
  console.log(authUser);
  const {loading , getPredictions} = useGetPredictions();
  useEffect(() => {
    getPredictions();
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={authUser ? <Navigate to={"/home"} /> : <Landing />} />
          <Route path="/login" element={authUser ? <Navigate to={"/home"} /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to={"/home"} /> : <SignUp />} />
          <Route path="/home" element={authUser ? <Home /> : <Navigate to={"/"} />} />
          <Route path="/capture" element={authUser ? <Capture /> : <Navigate to={"/"} />} />
          <Route path="/upload" element={authUser ? <Upload /> : <Navigate to={"/"} />} />
          <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to={"/"} />} />
          <Route path="/capture" element={authUser ? <Capture /> : <Navigate to={"/login"} />} />
          <Route path="/upload" element={authUser ? <Upload /> : <Navigate to={"/login"} />} />
          {/* <Route path="/marketplace" element={authUser ? <MarketPlace /> : <Navigate to={"/login"} />} /> */}
          <Route path="/marketplace" element={<MarketPlace/>} />
          <Route path="/marketplace/sell" element={<MarketplaceSell/>} />
          <Route path="/marketplace/buy" element={<MarketplaceBuy/>} />
          <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to={"/login"} />} />
        </Routes>

        <Toaster />
      </div>
    </>
  )
}

export default App;