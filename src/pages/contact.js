import { useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
  Link,
  useToast,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });
  const [formType, setFormType] = useState("contact");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, formType }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Request received.",
          description:
            formType === "contact"
              ? "Your message has been sent successfully."
              : "I will get back to you within 48 hours!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          company: "",
        });
      } else {
        toast({
          title: "Error",
          description: result.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="20px"
      >
        <Box
          w="100%"
          maxW="600px"
          padding="20px"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
        >
          <VStack spacing={4} align="stretch">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Contact Me
            </Text>
            <Text textAlign="center">
              Feel free to reach out to me using the form below.
            </Text>

            <RadioGroup onChange={setFormType} value={formType}>
              <Stack direction="row" justifyContent="center">
                <Radio value="contact">Contact Form</Radio>
                <Radio value="requestResume">Request Resume</Radio>
              </Stack>
            </RadioGroup>

            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormControl>

                {formType === "requestResume" && (
                  <FormControl id="company" isRequired>
                    <FormLabel>Company</FormLabel>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </FormControl>
                )}

                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>

                {formType === "contact" && (
                  <>
                    <FormControl id="subject">
                      <FormLabel>Subject</FormLabel>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl id="message" isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </>
                )}

                <Button
                  type="submit"
                  bg="purple.600"
                  color="white"
                  width="full"
                  isLoading={loading}
                  _hover={{ bg: "purple.700" }}
                >
                  {formType === "contact" ? "Submit" : "Request Resume"}
                </Button>
              </VStack>
            </form>

            <Box textAlign="center" marginTop="4">
              <Box marginTop="4">
                <Text fontSize="lg">You can connect with me:</Text>
                <Link
                  href="https://www.linkedin.com/in/canan-cansu-caner"
                  isExternal
                >
                  LinkedIn
                </Link>{" "}
                |{" "}
                <Link href="https://github.com/cincu" isExternal>
                  GitHub
                </Link>{" "}
              </Box>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}
