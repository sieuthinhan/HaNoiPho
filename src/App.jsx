import { useState } from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function App() {
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);

  return (
    <div className="container">

      <Sidebar
        selected={selected}
        setSelected={setSelected}

        selected1={selected1}
      />

      <Main
        selected={selected}

        selected1={selected1}
        setSelected1={setSelected1}
      />

    </div>
  )
}

export default App
