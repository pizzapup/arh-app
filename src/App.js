import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import CreatePup from "./components/CreatePup/CreatePup";
import PupGallery from "./components/PupGallery/PupGallery";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <CreatePup />
      <PupGallery />
    </div>
  );
}

export default App;
