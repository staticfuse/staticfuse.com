import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box } from "@chakra-ui/core"

const Logo = ({ data }) => {
  const imageData = useStaticQuery(graphql`
    {
      file(absolutePath: {regex: "/^((?!node_modules).)*$/"}, name: {eq: "site-logo"}) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box position={["absolute", "absolute", "static"]} left="0" right="0" m={["auto", "auto","0"]} w="200px" maxW="100%" h="50px">
      <Link
        to="/"
        style={{
          overflow: "hidden",
          height: "100%",
          width: "100%",
          padding: "7px 0",
          display: "block"
        }}
        rel="home"
        itemProp="url"
      >
        <Img
          fluid={imageData.file.childImageSharp.fluid}
          alt="Site Logo"
          className="site-logo"
          itemProp="logo"
          style={{
            height: "auto",
            // width: "100%"
          }}
        />
      </Link>
    </Box>
  )
}

export default Logo
