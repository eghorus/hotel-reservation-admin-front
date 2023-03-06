import Head from "next/head";
import Image from "next/image";
import { Box, Button, Center, chakra, Checkbox, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon, LockIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../components/layout/logo";
import InputControl from "../components/input-control";

type InitialFormValues = {
  email: string;
  password: string;
  isRemembering: boolean;
};

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
    <>
      <Head>
        <title>Concierge - Login</title>
      </Head>

      <Flex minH="100vh" bgColor="gray.100">
        <Box display={{ base: "none", md: "flex" }} flex="1" position="relative">
          <Image src="/images/bg-login.webp" alt="" fill style={{ objectFit: "cover" }} />
          <Text position="absolute" bottom="4" w="full" color="gray.200" fontSize="xs" textAlign="center">
            Photo by{" "}
            <Link
              href="https://unsplash.com/@ventiviews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              isExternal
            >
              Venti Views
            </Link>{" "}
            on{" "}
            <Link
              href="https://unsplash.com/photos/ej52Nm_-RUA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              isExternal
            >
              Unsplash
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Box>
        <Center flex="1" flexDirection="column" py="6">
          <Logo />
          <Box maxW="sm" mt="6" boxShadow="md" borderRadius="md" px="6" py="10" bgColor="whiteAlpha.900">
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
                Remember me
              </Checkbox>
              <Button type="submit" variant="solid" colorScheme="messenger" w="full" mt="1" textTransform="uppercase">
                login
              </Button>
            </chakra.form>
          </Box>
        </Center>
      </Flex>
    </>
  );
}
