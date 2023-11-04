import Nav from "./components/nav/Nav.jsx";
import FirstPage from "./components/firstPage/FirstPage.jsx";
import SecondPage from "./components/secondPage/SecondPage.jsx";
import ThirdPage from "./components/thirdPage/ThirdPage.jsx";
import FourthPage from "./components/fourthPage/FourthPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Link } from "react-scroll";

function App() {
  return (
    <div>
      <Nav />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </div>
  );
}

export default App;
