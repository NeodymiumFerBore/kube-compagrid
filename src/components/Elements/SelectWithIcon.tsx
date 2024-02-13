import React, { ComponentProps } from "react";
import Select, { ControlProps, components } from "react-select";

interface ISelectorWithIcon extends ComponentProps<typeof Select> {
  iconSrc: string;
  iconWidth: string;
  iconHeight: string;
}

export default class SelectorWithIcon extends React.Component<ISelectorWithIcon> {
  sidePadding = "6px";
  gapSpacing = "3px";
  Control: any;
  constructor(props: ISelectorWithIcon) {
    super(props);
    this.Control = ({ children, ...props }: ControlProps) => (
      <components.Control {...props}>
        <img
          src={this.props.iconSrc}
          width={this.props.iconWidth}
          height={this.props.iconHeight}
        />
        {children}
      </components.Control>
    );
  }

  public static defaultProps = {
    iconSrc: "https://www.svgrepo.com/show/374167/vite.svg",
    iconWidth: "20px",
    iconHeight: "auto",
  };

  render() {
    return (
      <Select
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          Control: this.Control,
        }}
        styles={{
          control: (base) => ({
            ...base,
            display: "flex",
            gap: this.gapSpacing,
            paddingLeft: this.sidePadding,
          }),
          valueContainer: (base) => ({
            ...base,
            paddingLeft: 0,
            paddingRight: this.sidePadding,
          }),
          menu: (base) => ({
            ...base,
            width: "max-content",
            minWidth: "100%",
          }),
        }}
        {...this.props}
      />
    );
  }
}
