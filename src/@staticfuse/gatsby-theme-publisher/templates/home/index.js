import React from "react";
import Layout from "@staticfuse/gatsby-theme-publisher/src/components/Layout";
import SEO from "@staticfuse/gatsby-theme-publisher/src/components/SEO";
import { Box, Text, Heading, Button, Icon, Image } from "@chakra-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import LogosImage from "../../../../images/wp-gatsby-logos.png"

const Home = ({ location }) => {
  const doSomething = e => {
    console.log(e);
    alert("Button clicked");
  };

  const bgImage = useStaticQuery(graphql`
    {
      file(name: { eq: "90s-bg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="Home" />

      <Box bg="gray.800" borderBottom="1px solid #F5EF09" mb={4}>
        <BackgroundImage
          fluid={bgImage.file.childImageSharp.fluid}
          style={{ padding: "2rem 1rem", backgroundPosition: "top right" }}
        >
          <Box
            m="auto"
            display={["block","block", "flex"]}
            maxW="6xl"
            justifyContent="space-between"
            alignItems="center"
          >

            <Box w={["100%", "60%", "45%"]} float={["none", "none", "right"]} p={2} m="auto" order={["1","1","2"]}>
                <Image src={LogosImage} display="block" alt="WordPress and Gatsby Logos" opacity=".8" />
            </Box>
            
            <Box w={["100%", "100%", "55%"]} color="#fff" mb={[6,6,"0"]}>
                
              <Heading
                as="h1"
                fontWeight="600"
                fontSize={["3.5rem","4rem"]}
                color="primary"
                lineHeight="1.1"
              >
                WordPress + Gatsby
              </Heading>
              <Text color="#444" fontSize="md" mb={8} fontWeight="500">
                Resources and information on Headless WordPress with Gatsby.
              </Text>
              <Button
                onClick={doSomething}
                bg="pink"
                rightIcon="arrow-forward"
                w={["100%", "auto"]}
                mb={[2, "0"]}
                rounded="full"
              >
                Get Started
              </Button>
            </Box>

          </Box>
        </BackgroundImage>
      </Box>

      <Box maxW="4xl" m="auto" px={2}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gridColumnGap="4%"
          gridRowGap="4%"
          my="4rem"
        >
          <Box>
            <Heading lineHeight="1.2" color="blue.500" fontSize="2xl">
              Here's something interesting...
            </Heading>
            <Text color="gray.500">
              Cap’n Crunch’s full name is Horatio Magellan Crunch. Sometimes I
              think about his journey to fame as I pour myself a bowl of his
              crunchtastic cereal. I mean, it must be hard being that famous.
              Cartoon celebrities have feelings too.
            </Text>
            <Button rounded="full" variant="outline" variantColor="blue">
              Crunch
            </Button>
          </Box>
          <Box
            as="iframe"
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/GuvAMcsoreI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Box>
        </Box>
      </Box>

      <Box className="row-wrapper" bg="#e4f5fe" py={8} px={2}>
        <Box maxW="4xl" m="auto">
          <Box
            display={["block", "grid"]}
            gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
            gridColumnGap="4%"
            my={8}
          >
            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                <Icon name="star" size="15px" color="blue.500" /> Thing One
              </Heading>
              <Text color="gray.500">
                We are always improving upon our stellar reputation. It isn't
                hard really, because our reputation is pretty bad. Hey, at least
                we're trying!
              </Text>
            </Box>

            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                <Icon name="email" size="15px" color="blue.500" /> Thing Two
              </Heading>
              <Text color="gray.500">
                You can always contact us if you need anything. We don't check
                emails on days ending in "Y" but we'll get back to you as soon
                as possible.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                <Icon name="bell" size="15px" color="blue.500" /> Thing Three
              </Heading>
              <Text color="gray.500">
                This box has a bell icon because I didn't try very hard to make
                this template realistic. You can ring my beeee-e-ell, ring my
                bell.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        mt={4}
        maxW="4xl"
        mx="auto"
        px={2}
      >
        <Box display="flex" my={8}>
          <Icon name="phone" color="gray.300" size="50px" mr={4} />
          <div>
            <Heading
              as="h4"
              size="xs"
              mb={1}
              fontWeight="500"
              color="blue.500"
              textTransform="uppercase"
            >
              Contact Us Today
            </Heading>
            <Text color="gray.500">Or don't. I'm kinda busy anyways.</Text>
          </div>
        </Box>

        <Box display="flex" my={8}>
          <Icon name="arrow-right" color="gray.300" size="50px" mr={4} />
          <div>
            <Heading
              as="h4"
              size="xs"
              mb={1}
              fontWeight="500"
              color="blue.500"
              textTransform="uppercase"
            >
              Get Started
            </Heading>
            <Text color="gray.500">Let's take this to the next level.</Text>
          </div>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
