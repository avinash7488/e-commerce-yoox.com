//import logo from './logo.svg';
import './App.css';
import AllRoute from './Routes/AllRoutes';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
      {/* <Home/> */}
     <Footer/>
    </div>
  );
}

export default App;
