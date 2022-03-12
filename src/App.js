import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import CreatePup from "./components/CreatePup/CreatePup";
import FormHome from "./screens/FormScreens/FormHome";
function App() {
  return (
    <div className="App">
      <NavBar />
      <FormHome />

      {/* <CreatePup /> */}
      {/* <PupGallery /> */}
    </div>
  );
}

export default App;
