import * as React from "react";
import Stack from "@mui/material/Stack";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import "../screen/mediaquires/media.css";

const CustomButtonRoot = styled("span")`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  padding: 12px 20px 12px 20px;
  border-radius: 45px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
    0 0 0 0 rgba(255, 105, 135, 0.3);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.nocolor} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function UnstyledButtonsSpan() {
  return (
    <Stack spacing={2} direction="row" className="create">
      <CustomButton>Create</CustomButton>
    </Stack>
  );
}
