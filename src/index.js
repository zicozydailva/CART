import reactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from "./context";

reactDom.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById("root"))