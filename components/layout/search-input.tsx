import { Input, InputGroup, InputLeftElement, SystemStyleObject } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type SearchInputProps = {
  sx?: SystemStyleObject;
};

const SearchInput = ({ sx }: SearchInputProps) => {
  return (
    <InputGroup sx={sx}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        type="search"
        placeholder="Search ..."
        aria-label="search"
        maxW="xs"
        boxShadow="sm"
        borderRadius="lg"
        bgColor="white"
        fontSize="sm"
        transitionProperty="all"
        transitionDuration="normal"
        transitionTimingFunction="ease"
        _focus={{ maxW: "md" }}
      />
    </InputGroup>
  );
};

export default SearchInput;
