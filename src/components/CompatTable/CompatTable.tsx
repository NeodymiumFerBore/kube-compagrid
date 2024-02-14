import Table from "@mui/joy/Table";

import { useGlobalConfigContext } from "@/contexts/GlobalConfig";
import { GlobalConfig } from "@/types";

function createRow(tool: string) {
  return (
    <tr key={tool}>
      <td>{tool}</td>
      <td>{tool}</td>
      <td>{tool}</td>
    </tr>
  );
}

function createAllRows(config: GlobalConfig) {
  return config.selectedTools.map((tool) => createRow(tool));
}

export default function CompatTable() {
  const { globalConfig } = useGlobalConfigContext();

  return (
    <Table aria-label="basic table" variant="soft">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Tools</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        {/* {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.minVers}</td>
            <td>{row.maxVers}</td>
          </tr>
        ))} */}
        {createAllRows(globalConfig)}
      </tbody>
    </Table>
  );
}
