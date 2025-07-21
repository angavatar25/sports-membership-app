import classNames from "classnames";
import { EnumButton } from "../../enum/EnumButton";

interface TButton {
  text: string | "Text Button";
  isFullWidth?: boolean;
  isWithIcon?: boolean;
  type: 'primary' | 'secondary' | 'dark';
  icon?: any;
}

const Button = (props: TButton) => {
  return (
    <button
      className={classNames({
        "px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-all duration-300 text-sm": true,
        "bg-blue-darkmode text-white": props.type === EnumButton.DARK,
        "bg-red-primary text-white": props.type === EnumButton.PRIMARY,
        "bg-white text-blue-darkmode": props.type === EnumButton.SECONDARY,
      })}
    >
      {props.text}
      {props.isWithIcon && (
        <div>
          {props.icon}
        </div>
      )}
    </button>
  )
}

export default Button