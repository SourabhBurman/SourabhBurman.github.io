import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const AboutDetail = () => {
  return (
    <ChakraBox
      display="flex"
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      transition={{ duration: 0.7 }}
      h="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="100%">
        <Text marginBottom="10px" fontSize="sm">
          Hello! My name is Sourabh Burman,
          <br/>
          <br/>
          Welcome to my digital space! I'm a passionate and aspiring Full Stack Web Developer with a solid foundation in the MERN stack – a tech enthusiast ready to turn ideas into interactive and dynamic web experiences.
       
        </Text>
        <Text fontSize="sm">
         I'm eager to contribute to groundbreaking solutions, I'm on a constant quest to expand my knowledge and skills. Join me on this exciting journey as we navigate the ever-evolving landscape of web development together.
         
        </Text>
        <Flex py="5px" fontSize="sm" marginTop={3}>
          <Flex justifyContent="left" alignItems="center" w="25%">
            <AiFillPhone />
            <Text marginLeft="10px">Phone</Text>
          </Flex>
          <Text>+91 9812285122</Text>
        </Flex>
        <Flex py="5px" fontSize="sm">
          <Flex justifyContent="left" alignItems="center" w="25%">
            <AiOutlineMail />
            <Text marginLeft="10px">Email</Text>
          </Flex>
          <Text>souravburman55@gmail.com</Text>
        </Flex>
        <Button
          as={motion.a}
          href="/sourabh-burman-resume.pdf"
          download
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1DIdiEWkLmHga3asnU33JeKbtLY6iWmD-/view?usp=sharing",
              "_blank"
            );
          }}
          variant="none"
          bg="#fff"
          size="md"
          color="bgPrimary"
          marginTop={10}
          whileHover={{ scale: 1.1 }}
        >
          Download Resume
        </Button>
      </Box>
    </ChakraBox>
  );
};

export default AboutDetail;
