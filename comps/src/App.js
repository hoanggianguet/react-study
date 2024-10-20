import DropDown from "./components/DropDown";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-5 mt-4">
      <Sidebar />
      <ModalPage />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
