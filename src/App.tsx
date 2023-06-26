import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
