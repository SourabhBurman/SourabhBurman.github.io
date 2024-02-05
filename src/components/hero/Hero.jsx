import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import avatar from "../../assets/souravPort.png";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer.","UI/UX Designer."],
    loop: 0,
  });

  return (
    <Container maxW="4xl" id="home">
      <Flex style={{height: "calc(100vh - 80px)"}} justifyContent="center" alignItems="center">
        <Box w="100%">
          <ChakraBox
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.7 }}
          >
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              templateAreas={{
                base: `"avatar avatar" "name name"`,
                md: `"name name name avatar"`,
              }}
              gap={{ base: 20, md: 4 }}
              marginBottom="50px"
            >
              <GridItem marginX={{ base: "0", md: "0" }} area={"name"}>
                <Text fontSize={{ base: "21px", sm: "2xl" }} fontWeight="600">
                  Hello, my name is
                </Text>
                <Text fontSize={{ base: "30px", sm: "50px" }} fontWeight="600">
                  Sourabh Burman
                </Text>

                <Text fontSize={{ base: "21px", sm: "2xl" }} fontWeight="600">
                  I'm a <span style={{ color: "#007FFF" }}>{text}</span>
                  <Cursor cursorColor="#007FFF" />
                </Text>

                <Box>
                  <Button
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    href="/sourabh-burman-resume.pdf"
                    download
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1LnStYSCNnx_nvvi_cZMpCHpA4bnfhjUJ/view?usp=sharing",
                        "_blank"
                      );
                    }}
                    size="lg"
                    marginTop="20px"
                    bg="textPrimary"
                    _hover={{
                      color: "textPrimary",
                      bg: "bgPrimary",
                      border: "1px solid #007FFF",
                    }}
                  >
                    Resume
                  </Button>
                </Box>
              </GridItem>
              <GridItem area={"avatar"}>
                <ChakraBox
                  h="270px"
                  w="270px"
                  marginX="auto"
                  position="relative"
                  rounded="full"
                  cursor="pointer"
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ boxShadow: "0 0 10px #007FFF" }}
                >
                  <Image
                    src={avatar}
                    rounded="full"
                    objectFit="contain"
                  ></Image>
                </ChakraBox>
              </GridItem>
            </Grid>
          </ChakraBox>
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero;
