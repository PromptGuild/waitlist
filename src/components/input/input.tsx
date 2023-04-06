import { InputHTMLAttributes } from "react";
import { InputContainer } from "./input-container";
import { emailIcon } from "../../icons";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   /**
    * The value of the input component.
    */
   value?: string;
}

export const Input: React.FC<IInputProps> = ({ value }) => {
   return (
      <InputContainer icon={emailIcon}>
         <input className="input" value={value} />
      </InputContainer>
   );
};
