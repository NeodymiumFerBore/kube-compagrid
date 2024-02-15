import { createContext, useContext } from "react";

/**
 * https://dev.to/madv/usecontext-with-typescript-23ln
 * https://react.dev/learn/updating-objects-in-state
 */

export type GlobalConfig = {
  selectedKubeVers: string;
  selectedTools: string[];
};

/* Create a type for GlobalConfigContext */
type TGlobalConfigContext = {
  globalConfig: GlobalConfig;
  setGlobalConfig: (c: GlobalConfig) => void;
};

/* Define the actual GlobalConfig Context */
export const GlobalConfigContext = createContext<TGlobalConfigContext>({
  globalConfig: {
    selectedKubeVers: "",
    selectedTools: [],
  },
  setGlobalConfig: () => {},
});

/* Provide helper function to use it */
export const useGlobalConfigContext = () => useContext(GlobalConfigContext);
