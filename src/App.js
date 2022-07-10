import { useEffect } from "react";
import Layout from "./components/Layout/Layout";

function App() {


  useEffect(() => {
    document.title = 'My Page Title';
  });
  return <Layout />;
}

export default App;
