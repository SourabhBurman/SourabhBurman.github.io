import { Box, Flex, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const ContactLeft = () => {
  return (
    <GridItem w="100%">
      <Text fontSize="2xl" fontWeight="500" marginBottom={5}>
        Just Say Hi
      </Text>
      <VStack align="left" spacing={5}>
        <Text fontSize="sm">
          I am open to talk regarding freelancing or full-time opportunities.
          Feel free to contact me using your preferred medium.
        </Text>
        <Flex alignItems="center">
          <Flex
            bg="textPrimary"
            h={10}
            w={10}
            rounded="full"
            justifyContent="center"
            alignItems="center"
          >
            <ImLocation fontSize="lg" />
          </Flex>
          <Text fontSize="sm" marginLeft={5}>
            Karnal, Haryana
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Flex
            bg="textPrimary"
            h={10}
            w={10}
            rounded="full"
            justifyContent="center"
            alignItems="center"
          >
            <BsTelephoneFill fontSize="lg" />
          </Flex>
          <Text fontSize="sm" marginLeft={5}>
            +91 9812285122
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Flex
            bg="textPrimary"
            h={10}
            w={10}
            rounded="full"
            justifyContent="center"
            alignItems="center"
          >
            <AiOutlineMail fontSize="lg" />
          </Flex>
          <Text fontSize="sm" marginLeft={5}>
            souravburman55@gmail.com
          </Text>
        </Flex>

        <HStack spacing={5}>
          <Box
            as="a"
            href="https://www.linkedin.com/in/sourabh-burman/"
            target="_blank"
            _hover={{ opacity: "0.7" }}
          >
            <AiFillLinkedin fontSize="30px" />
          </Box>
          <Box
            as="a"
            href="https://github.com/SourabhBurman"
            target="_blank"
            _hover={{ opacity: "0.7" }}
          >
            <AiFillGithub fontSize="30px" />
          </Box>
          <Box
            as="a"
            href="mailto:souravburman55@gmail.com"
            _hover={{ opacity: "0.7" }}
          >
            <AiOutlineMail fontSize="30px" />
          </Box>
        </HStack>
      </VStack>
    </GridItem>
  );
};

export default ContactLeft;
