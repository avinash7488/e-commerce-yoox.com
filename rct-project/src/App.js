//import logo from './logo.svg';
import './App.css';
import AllRoute from './Components/AllRoutes';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
      <Home/>
     <Footer/>
    </div>
  );
}

export default App;
