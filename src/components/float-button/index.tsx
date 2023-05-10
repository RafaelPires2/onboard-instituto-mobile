import { ReactNode } from "react";
import { TextFloatButton, WrapperFloatButton } from "./styles";

interface FloatButtonProps {
    children?: ReactNode;
    onPress?: () => void;
    disabled?: boolean;
  }

export function FloatButton({onPress, children}:FloatButtonProps){
    return(
        <WrapperFloatButton onPress={onPress}>
        <TextFloatButton>{children}</TextFloatButton>
      </WrapperFloatButton>
    )
}