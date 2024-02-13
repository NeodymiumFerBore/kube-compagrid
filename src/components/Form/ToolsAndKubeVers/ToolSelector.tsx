import { ComponentProps } from "react";
import Select from "react-select";
import { useGlobalConfigContext } from "../../../contexts/GlobalConfig";
import { opt, strToOpt } from "../../../types";

interface IToolSelector {
  options: ComponentProps<typeof Select>["options"];
  defaults?: ComponentProps<typeof Select>["defaultValue"];
}

export default function ToolSelector({ options }: IToolSelector) {
  const { globalConfig, setGlobalConfig } = useGlobalConfigContext();

  return (
    <>
      <Select
        //defaultValue={[options[2], options[3]]}
        defaultValue={globalConfig.selectedTools?.map((e) => strToOpt(e))}
        isMulti
        placeholder="Select tools..."
        name="tools"
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        options={options}
        className="tool-selection"
        classNamePrefix="tool-selection"
        inputId="tools"
        onChange={(selection) =>
          setGlobalConfig({
            ...globalConfig,
            selectedTools: selection.map((e) => {
              return (e as opt).value;
            }),
          })
        }
        closeMenuOnSelect={false}
        // controlShouldRenderValue={false}
        styles={{
          option: (base, { /*data, isDisabled,*/ isSelected, isFocused }) => {
            return {
              ...base,
              backgroundColor:
                isFocused || isSelected ? "aquamarine" : "transparent",
              borderRadius: "360px",
              margin: "5px",
              maxWidth: "96%", // compensate weird overflow when changing margin
            };
          },
          container: (base) => ({
            ...base,
            minWidth: "240px",
            maxWidth: "800px",
          }),
        }}
      />
    </>
  );
}
