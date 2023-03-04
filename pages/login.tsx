import { Box, Button, Center, chakra, Checkbox, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon, LockIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputControl from "../components/input-control";

interface InitialFormValues {
  email: string;
  password: string;
  isRemembering: boolean;
}

export default function Login() {
  const handleSubmit = (values: InitialFormValues) => console.log(values);
  const formik = useFormik({
    initialValues: { email: "", password: "", isRemembering: false },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email field is required"),
      password: Yup.string()
        .max(20, "Password must be 20 characters or less")
        .min(8, "Password must be 8 characters or more")
        .required("Password field is required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <Flex minH="100vh" bgColor="gray.50">
      <Center flexGrow="1" m="auto">
        <Box maxW="sm" boxShadow="md" borderRadius="md" px="6" py="12" bgColor="whiteAlpha.900">
          <Heading mb="2" textAlign="center">
            Admin Login
          </Heading>
          <Text mb="6" color="gray.500" textAlign="center">
            Manage your hotel reservations and view statistics.
          </Text>
          <LockIcon display="block" m="auto" mb="6" color="messenger.500" fontSize="2xl" />
          <chakra.form onSubmit={formik.handleSubmit}>
            <InputControl
              type="email"
              fieldProps={formik.getFieldProps("email")}
              error={formik.errors.email}
              isTouched={formik.touched.email}
            />
            <InputControl
              type="password"
              fieldProps={formik.getFieldProps("password")}
              error={formik.errors.password}
              isTouched={formik.touched.password}
            />
            <Checkbox colorScheme="messenger" mb="6" {...formik.getFieldProps("isRemembering")}>
              Remember my login credentials
            </Checkbox>
            <Button type="submit" variant="solid" colorScheme="messenger" w="full" mt="1" textTransform="uppercase">
              login
            </Button>
          </chakra.form>
        </Box>
      </Center>
      <Box
        display={{ base: "none", md: "flex" }}
        flexGrow="2"
        opacity="0.8"
        justifyContent="center"
        alignItems="flex-end"
        p="5"
        bgImage="/images/bg-login.webp"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Link
          href="https://www.freepik.com/free-vector/modern-city-buildings_4393647.htm#query=hotel&position=1&from_view=search&track=sph"
          isExternal
          color="gray.200"
          fontSize="xs"
        >
          Image by vectorpocket on Freepik <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </Flex>
  );
}
