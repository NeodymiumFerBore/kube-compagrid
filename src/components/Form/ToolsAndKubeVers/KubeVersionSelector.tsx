import { ComponentProps } from "react";
import { useGlobalConfigContext } from "@/contexts/GlobalConfig";

import SelectorWithIcon from "@/components/Elements/SelectWithIcon";
import kubeIcon from "@/assets/kubernetes-icon-color.svg";

interface IToolForm {
  options: ComponentProps<typeof SelectorWithIcon>["options"];
}

interface opt {
  value: string;
  label: string;
}

export default function KubeVersionSelector({ options }: IToolForm) {
  const { globalConfig, setGlobalConfig } = useGlobalConfigContext();

  return (
    <>
      <SelectorWithIcon
        iconSrc={kubeIcon}
        options={options}
        defaultValue={
          options?.find(
            (d) => (d as opt).value === globalConfig.selectedKubeVers
          ) || options?.slice(-1)
        }
        name="kube-version"
        className="kube-version"
        classNamePrefix="kube-version"
        inputId="kube-version"
        onChange={(e) => {
          setGlobalConfig({
            ...globalConfig,
            selectedKubeVers: (e as opt).value,
          });
        }}
      />
    </>
  );
}
