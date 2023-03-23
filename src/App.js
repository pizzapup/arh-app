import "./App.css";
// import "./components/Animations/CSS3Animations.css";
import FormHome from "./components/FormComp/FormHome";
import { Outlet, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout";
import PupGallery from "./components/PupGallery/PupGallery";

const Home = lazy(() => import("./Routes/Home"));

function App() {
  return (
    // <main>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route
        index
        element={
          <Suspense fallback={<>...</>}>
            <PupGallery />
          </Suspense>
        }
      />
      <Route
        path="home"
        element={
          <Suspense fallback={<>...</>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={<p> yikes - there's nothing at this url. try again ? </p>}
      />
    </Routes>
    // </main>
  );
}

export default App;
