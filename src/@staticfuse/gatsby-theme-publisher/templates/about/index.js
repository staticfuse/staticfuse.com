import React from "react";
import Layout from "@staticfuse/gatsby-theme-publisher/src/components/Layout";
import SEO from "@staticfuse/gatsby-theme-publisher/src/components/SEO";
import { Box, Text, Heading, Image, PseudoBox, Button } from "@chakra-ui/core";
import JustinPic from "../../../../images/justin-bio-pic.png";
import ScottPic from "../../../../images/scott-wclax-profile-big.jpg";

const About = ({ location }) => {
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="About" />

      <Box maxW="3xl" m="auto" py={4} my={4} px={2}>
        <Heading
          as="h1"
          fontWeight="600"
          fontSize="4rem"
          color="primary"
          lineHeight="1.1"
          mb={4}
        >
          About Us
        </Heading>
        <Text fontSize="md" fontWeight="500" color="gray.400">
          Static Fuse is a collaboration between Scott Bolinger and Justin Hall.
          Justin is a senior developer at SendGrid, and Scott is the developer and 
          co-founder of{" "}
          <a
            href="https://apppresser.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            AppPresser
          </a>
          .
        </Text>

        <Text color="gray.500" borderTop="1px solid #eee" py={4}>
          Our goal is to help freelancers and agencies put another tool in their
          toolbox to help their clients. We firmly believe JAMstack is a big
          part of the future of the web, and more WordPress sites need to be
          using this amazing technology.
        </Text>

        <Box className="row-wrapper" px={2} mb={1}>
          <Box
            maxW="3xl"
            m="auto"
            display={["block", "flex"]}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <PseudoBox
              width={["100%", "48%"]}
              rounded="lg"
              overflow="hidden"
              borderWidth="1px"
              position="relative"
              textAlign="center"
            >
              <Box maxH="300px" overflow="hidden">
                <Image
                  src={JustinPic}
                  alt="Justin Hall"
                  display="block"
                  w="100%"
                />
              </Box>
              <Box p={2}>
                <Heading
                  as="h4"
                  my={2}
                  fontSize="lg"
                  fontWeight="400"
                  color="gray.600"
                  lineHeight="1"
                >
                  Justin Hall
                </Heading>
              </Box>
                <Button
                  onClick={() => window.open(`https://twitter.com/justinwhall`)}
                  leftIcon="at-sign"
                  variant="outline"
                  outline="none"
                  color="gray.300"
                  size="xs"
                  fontSize="xs"
                  mb={4}
                  _hover={{
                    bg: "blue.500",
                    color: "white"
                  }}
                >
                  Twitter
                </Button>
            </PseudoBox>

            <PseudoBox
              width={["100%", "48%"]}
              rounded="lg"
              overflow="hidden"
              borderWidth="1px"
              position="relative"
              textAlign="center"
            >
              <Box maxH="300px" overflow="hidden">
                <Image
                  src={ScottPic}
                  alt="Scott Bolinger"
                  display="block"
                  w="100%"
                />
              </Box>
              <Box p={2}>
                <Heading
                  as="h4"
                  my={2}
                  fontSize="lg"
                  fontWeight="400"
                  color="gray.600"
                  lineHeight="1"
                >
                  Scott Bolinger
                </Heading>
              </Box>
                <Button
                  onClick={() =>
                    window.open(`https://twitter.com/scottbolinger`)
                  }
                  leftIcon="at-sign"
                  variant="outline"
                  outline="none"
                  color="gray.300"
                  size="xs"
                  fontSize="xs"
                  mb={4}
                  _hover={{
                    bg: "blue.500",
                    color: "white"
                  }}
                >
                  Twitter
                </Button>
            </PseudoBox>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
