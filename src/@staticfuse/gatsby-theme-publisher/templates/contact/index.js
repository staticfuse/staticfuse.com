import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import {
  Box,
  Text,
  Heading,
  Stack,
  Input,
  Textarea,
  Button
} from "@chakra-ui/core";

const Contact = ({ location }) => {
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="Contact" />
      <Box maxW="3xl" m="auto" py={4} my={4} px={2}>
        <Heading
          as="h1"
          fontWeight="600"
          fontSize="4rem"
          color="primary"
          lineHeight="1.1"
          mb={4}
        >
          Contact Us
        </Heading>

        <Stack spacing={3}>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button variantColor="blue">Submit</Button>
          </form>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Contact;
