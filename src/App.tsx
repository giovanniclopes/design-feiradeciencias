import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import Header from "./components/Header";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header />
          <Router />
        </BrowserRouter>
    </div>
  );
}

export default App;
