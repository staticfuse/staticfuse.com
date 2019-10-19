import React from 'react'
import Layout from '@staticfuse/gatsby-theme-publisher/src/components/Layout'
import SEO from '@staticfuse/gatsby-theme-publisher/src/components/SEO'
import { Box, Text, Heading } from '@chakra-ui/core'

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
        Static Fuse is a collaboration between Scott Bolinger and Justin Hall. Justin is a full stack developer at SendGrid, and Scott is the co-founder of <a href="https://apppresser.com" target="_blank" rel="noopener noreferrer">AppPresser</a>.
        </Text>

        <Text color="gray.500" borderTop="1px solid #eee" py={4}>
            Our goal is to help freelancers and agencies put another tool in their toolbox to help their clients. We firmly believe JAMstack is a big part of the future of the web, and more WordPress sites need to be using this amazing technology.
        </Text>
      </Box>



    </Layout>
  )
}

export default About
