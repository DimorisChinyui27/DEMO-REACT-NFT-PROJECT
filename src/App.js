import "@stripe/stripe-js";
import { Home } from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Success,Cancel } from "./components";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route index element={<Home />} />
           <Route path="success" element={<Success />} />
           <Route path="cancel" element={<Cancel />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
