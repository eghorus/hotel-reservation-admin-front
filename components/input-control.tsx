import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useBoolean,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

type InputControlProps = {
  type: string;
  fieldProps: {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  error?: string;
  isTouched?: boolean;
};

const InputControl = ({ type, fieldProps, error, isTouched }: InputControlProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useBoolean(false);

  return (
    <FormControl
      isInvalid={isTouched && error ? true : false}
      sx={{
        position: "relative",
        my: "6",
        "&:focus-within label, & input:not(:placeholder-shown) ~ label": {
          transform: "scale(0.85) translateY(-24px)",
        },
      }}
    >
      <InputGroup>
        <Input
          id={fieldProps.name}
          type={isPasswordVisible ? "text" : type}
          placeholder=" "
          {...fieldProps}
          sx={{ bgColor: "white" }}
        />
        {type === "password" && (
          <InputRightElement>
            <IconButton
              aria-label="show password"
              size="sm"
              variant="ghost"
              icon={isPasswordVisible ? <ViewOffIcon /> : <ViewIcon />}
              onClick={setIsPasswordVisible.toggle}
            />
          </InputRightElement>
        )}
        <FormLabel
          htmlFor={fieldProps.name}
          sx={{
            position: "absolute",
            top: "1",
            left: "3",
            zIndex: "2",
            borderRadius: "md",
            p: "1",
            bgColor: "white",
            textTransform: "capitalize",
            pointerEvents: "none",
            transformOrigin: "left top",
          }}
        >
          {fieldProps.name}
        </FormLabel>
      </InputGroup>
      <FormErrorMessage>{error}.</FormErrorMessage>
    </FormControl>
  );
};

export default InputControl;
