import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => setLoading(false), 1800); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     {loading ? <Preloader /> :  <Home />}
     
    </>
  );
}

export default App;
