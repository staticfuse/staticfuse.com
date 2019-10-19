import React from "react";
import useSiteMetadata from "@staticfuse/gatsby-theme-publisher/src/hooks/use-site-metadata";
import { Box, Button, Heading, Text, Stack } from "@chakra-ui/core";
import { Link } from "gatsby";

const Footer = () => {
  const { author, twitter } = useSiteMetadata();

  return (
    <Box as="footer" bg="footerBg" p={8} w="100%" className="site-footer">
      <Box
        display="flex"
        maxW="4xl"
        m="auto"
        overflow="hidden"
        color="muted"
        fontSize="sm"
        justifyContent="space-between"
      >
        <Box w="50%">
          <Heading as="h4" fontSize="xl" color="headings">
            Menu
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))"
            gridColumnGap="20px"
            gridRowGap="5px"
          >
            <Box fontWeight="500" fontSize="base" color="footerText" py={1}>
              <Link to="/blog">Blog</Link>
            </Box>
          </Box>
        </Box>

        <Box w="25%">
          <Heading as="h4" fontSize="xl" color="headings">
            Get in touch
          </Heading>
          <Stack spacing={2} color="footerText">
            <Box>
              <Button
                onClick={() => window.open(`https://twitter.com/${twitter}`)}
                leftIcon="at-sign"
                variant="outline"
                outline="none"
                color="gray.300"
                size="xs"
                fontSize="xs"
                _hover={{
                  bg: "blue.500",
                  color: "white"
                }}
              >
                Twitter
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        borderTop="1px solid rgba(255,255,255,.2)"
        py={4}
        maxW="4xl"
        m="auto"
        mt={4}
        textAlign="center"
      >
        <Text color="footerText" fontSize="sm" opacity=".7">
          © 2019 {author} | Built with{" "}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
