import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

interface InputControlProps {
  type: string;
  fieldProps: {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  error?: string;
  isTouched?: boolean;
}

const InputControl = ({ type, fieldProps, error, isTouched }: InputControlProps) => {
  return (
    <FormControl
      position="relative"
      isInvalid={isTouched && error ? true : false}
      sx={{
        position: "relative",
        my: "6",
        "&:focus-within label, & > input:not(:placeholder-shown) + label": {
          transform: "scale(0.85) translateY(-24px)",
        },
      }}
    >
      <Input id={fieldProps.name} type={type} placeholder=" " {...fieldProps} sx={{ bgColor: "white" }} />
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
      <FormErrorMessage>{error}.</FormErrorMessage>
    </FormControl>
  );
};

export default InputControl;
