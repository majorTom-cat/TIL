import logo from "./logo.svg";
import "./App.css";

import DetailHeader from "./pages/detail/header/DetailHeader";
import DetailContent from "./pages/detail/body/DetailContent";
import DetailContentExplain from "./pages/detail/body/DetailContentExplain";

const App = () => {
  return (
    <>
      <DetailHeader />

      <DetailContent />

      <DetailContentExplain />
    </>
  );
};

export default App;
