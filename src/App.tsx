import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
