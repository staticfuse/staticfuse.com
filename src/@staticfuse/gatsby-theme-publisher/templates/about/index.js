import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { Box, Text, Heading, Icon } from '@chakra-ui/core'

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
        Static Fuse is a collaboration between Scott Bolinger and Justin Hall. Justin is a full stack developer at SendGrid, and Scott is the co-founder of <a href="https://apppresser.com" target="_blank">AppPresser</a>.
        </Text>
      </Box>

    </Layout>
  )
}

export default About
