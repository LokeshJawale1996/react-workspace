import "./App.css";
import Nested1 from "./components/nestedComponents/Nested1";
import MobileList from "./components/mobileShop/MobileList";
import MobileListWithJs from "./components/mobileShop/MobileListWithJs";
import MobileListPropsExample from "./components/props/MobileListPropsExample";
import MobileListPropsDestructing from "./components/props/MobileListPropsDestructing";
import Namelist from "./components/MapToPrintList/Namelist";
import AnimalAndBirdsList from "./components/MapToPrintList/AnimalAndBirdsList";
import MobileListToUnderstandKeyPropAndSpreadOperator from "./components/KeyPropSpreadOperator/MobileListToUnderstandKeyPropAndSpreadOperator";
import BookList from "./components/EventBasics/BookList";
import MobileListFinal from "./components/understandImportAndExport/MobilelistFinal";
import Greeting from "./components/jsx/Greeting";

function App() {
  return (
    <div className="App">
      {/* 1) Nested Components */}
      <Greeting />
      <Nested1 />
      <MobileList />
      <MobileListWithJs />
      <MobileListPropsExample />
      <MobileListPropsDestructing />
      <Namelist />
      <AnimalAndBirdsList />
      <MobileListToUnderstandKeyPropAndSpreadOperator />
      <BookList />
      <MobileListFinal />
    </div>
  );
}

export default App;
