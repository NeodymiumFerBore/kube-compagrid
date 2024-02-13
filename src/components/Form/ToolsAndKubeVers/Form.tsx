import { useEffect, useState } from "react";
import ToolSelector from "./ToolSelector";
import KubeVersionSelector from "./KubeVersionSelector";
import "./form.css";

interface ITool {
  name: string;
}

const availableKubeVersions = ["v1.22", "v1.23", "v1.24"];

export default function ToolsAndKubeVers() {
  const [options, setOptions] = useState([]);

  // https://stackoverflow.com/questions/72301355/how-to-populate-select-options-from-an-api-call-in-react-js-on-page-load
  /* Load available tools */
  useEffect(() => {
    async function fetchData() {
      const results = await fetch("index.json").then((response) =>
        response.json()
      );
      setOptions(
        results.map((tool: ITool) => {
          return { value: tool.name, label: tool.name };
        })
      );
    }

    // Trigger the fetch
    fetchData();
  }, []);

  /* Load available kube versions */
  useEffect(() => {}, []);

  return (
    <div className="data-form">
      <div className="kube-vers-form">
        <KubeVersionSelector
          options={availableKubeVersions.map((vers: string) => {
            return { value: vers, label: vers };
          })}
        />
      </div>
      <div className="tool-form">
        {/* <ToolSelector options={options} defaults={null} /> */}
        <ToolSelector options={options} />
        {/* <ToolSelectorRemote /> */}
      </div>
    </div>
  );
}
