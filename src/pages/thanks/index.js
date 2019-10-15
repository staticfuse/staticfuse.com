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
          Thanks!
        </Heading>
        <Text fontSize="md" fontWeight="500" color="gray.400">
        We'll get back to you shortly.
        </Text>
      </Box>



    </Layout>
  )
}

export default About
