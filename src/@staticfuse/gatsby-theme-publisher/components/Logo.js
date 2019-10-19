import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Box } from "@chakra-ui/core";

const Logo = ({ data }) => {
  const imageData = useStaticQuery(graphql`
    {
      file(
        absolutePath: { regex: "/^((?!node_modules).)*$/" }
        name: { eq: "site-logo" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box
      position={["absolute", "absolute", "static"]}
      left="0"
      right="0"
      m={["auto", "auto", "0"]}
      w="200px"
      maxW="100%"
      h="50px"
    >
        <Img
          fluid={imageData.file.childImageSharp.fluid}
          alt="Site Logo"
          className="site-logo"
          itemProp="logo"
          style={{
            height: "auto",
            marginTop: "5px"
          }}
        />
    </Box>
  );
};

export default Logo;
