import "./core/i18n";

import { useEffect } from "react";

import { RouterProvider } from "react-router-dom";

import { useAppContext } from "./contexts/app/app-context";
import router from "./router";

function App() {
  const { theme } = useAppContext();
  useEffect(() => {
    const head = document.head;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/css/${theme}.css`;
    head.appendChild(link);
    return () => {
      head.removeChild(link);
    };
  }, [theme]);
  return <RouterProvider router={router} />;
}

export default App;
