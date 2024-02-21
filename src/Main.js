import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
// import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/" element={<SharedPage />} /> */}
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
