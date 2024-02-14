import { useEffect, useState } from "react";
import { ToolsAndKubeVers } from "./components/Form/ToolsAndKubeVers";
import { CompatTable } from "./components/CompatTable";
import "./css/index.css";

import { loadFromLocalStorage } from "./utils/loadFromLocalStorage";

// Contexts
import { GlobalConfig, GlobalConfigContext } from "./contexts/GlobalConfig.ts";

export default function App() {
  const [globalConfig, setGlobalConfig] = useState<GlobalConfig>(
    loadFromLocalStorage<GlobalConfig>("GLOBAL_CONFIG")
  );

  useEffect(() => {
    console.log("Config changed!");
    console.log("Selected version: " + globalConfig.selectedKubeVers);
    console.log("Selected tools:   " + globalConfig.selectedTools);
    localStorage.setItem("GLOBAL_CONFIG", JSON.stringify(globalConfig));
  }, [globalConfig]);

  return (
    <>
      <GlobalConfigContext.Provider value={{ globalConfig, setGlobalConfig }}>
        <ToolsAndKubeVers />
        {/* Table div */}
        <CompatTable />
        {/* <div id="compat-table-wrapper"></div> */}
      </GlobalConfigContext.Provider>
    </>
  );
}
