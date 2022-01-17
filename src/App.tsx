import MainRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
