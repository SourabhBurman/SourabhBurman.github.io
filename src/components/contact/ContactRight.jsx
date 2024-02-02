import {
  Button,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import {Box} from "@chakra-ui/react"
const ContactRight = () => {
  const toast = useToast();

  const [formData, setFormData] = useState({
    "First Name": "",
    "Last Name": "",
    Phone: "",
    Email: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      formData["First Name"] === "" ||
      formData["Email"] === "" ||
      formData["Message"] === ""
    ) {
      toast({
        position: 'bottom',
        status: "error",
        isClosable: true,
        duration: 1500,
        render: () => (
          <Box color='white' p={3} bg='blue.900'>
             Please fill mandatory details
          </Box>
        ),
      })
      return;
    }

    setLoading(true);
    try {
      axios
        .post(
          "https://getform.io/f/5213a2b5-1285-458d-a8eb-03412b495fac",
          formData
        )
        .then((res) => {
          setLoading(false);
          toast({
            position: 'bottom',
            status: "success",
            isClosable: true,
            duration: 1500,
            render: () => (
              <Box color='white' p={3} bg='blue.900'>
                Your message has been sent
              </Box>
            ),
          })
          setFormData({
            "First Name": "",
            "Last Name": "",
            Phone: "",
            Email: "",
            Message: "",
          });
        })
        .catch((err) => {
          setLoading(false);
          toast({
            position: 'bottom',
            status: "error",
            isClosable: true,
            duration: 1500,
            render: () => (
              <Box color='white' p={3} bg='blue.900'>
                Something went wrong
              </Box>
            ),
          })
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        position: 'bottom',
        status: "error",
        isClosable: true,
        duration: 1500,
        render: () => (
          <Box color='white' p={3} bg='blue.900'>
            Something went wrong
          </Box>
        ),
      })
    }
  };

  return (
    <GridItem w="100%">
      <Text fontSize="2xl" fontWeight="500" marginBottom={5}>
        Get In Touch
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <GridItem w="100%" colSpan={{ base: 2, md: 1 }}>
          <Input
            placeholder="First Name*"
            size="lg"
            name="First Name"
            value={formData["First Name"]}
            onChange={handleChange}
          />
        </GridItem>
        <GridItem w="100%" colSpan={{ base: 2, md: 1 }}>
          <Input
            placeholder="Last Name"
            name="Last Name"
            value={formData["Last Name"]}
            onChange={handleChange}
            size="lg"
          />
        </GridItem>
        <GridItem w="100%" colSpan={{ base: 2, md: 1 }}>
          <Input
            placeholder="Phone"
            name="Phone"
            value={formData["Phone"]}
            onChange={handleChange}
            size="lg"
          />
        </GridItem>
        <GridItem w="100%" colSpan={{ base: 2, md: 1 }}>
          <Input
            placeholder="Email*"
            name="Email"
            value={formData["Email"]}
            onChange={handleChange}
            size="lg"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Textarea
            placeholder="Your Message*"
            name="Message"
            value={formData["Message"]}
            onChange={handleChange}
            h="150px"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            bg="textPrimary"
            _hover={{
              color: "textPrimary",
              bg: "bgPrimary",
              border: "1px solid #007FFF",
            }}
            variant="solid"
            w="100%"
            size="lg"
            isLoading={loading}
            loadingText="Submitting"
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </GridItem>
      </Grid>
    </GridItem>
  );
};

export default ContactRight;
