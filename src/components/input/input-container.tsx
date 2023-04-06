import { ReactNode } from "react";

export interface IInputContainerProps {
   /**
    * The icon to be displayed.
    */
   icon?: ReactNode;
   /**
    * The input element.
    */
   children: ReactNode;
}

export const InputContainer: React.FC<IInputContainerProps> = ({ icon, children }) => {
   return (
      <div>
         {children}
         {icon}
      </div>
   );
};
