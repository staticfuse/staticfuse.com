import React from "react";
import Layout from "@staticfuse/gatsby-theme-publisher/src/components/Layout";
import SEO from "@staticfuse/gatsby-theme-publisher/src/components/SEO";
import { Box, Text, Heading, Button, Image } from "@chakra-ui/core";
import { useStaticQuery, graphql, navigate } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import LogosImage from "../../../../images/wp-gatsby-logos.png";
import PublisherHero from "../../../../images/publisher-hero.jpg";
import BlogOptin from "@staticfuse/gatsby-theme-publisher/src/components/BlogOptin";

const Home = ({ location }) => {
  const bgImage = useStaticQuery(graphql`
    {
      file(name: { eq: "hero-bg-90s" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="Home" />

      <Box bg="gray.800" borderBottom="1px solid #F5EF09">
        <BackgroundImage
          fluid={bgImage.file.childImageSharp.fluid}
          style={{ padding: "2rem 1rem", backgroundPosition: "top" }}
        >
          <Box
            m="auto"
            display={["block", "block", "flex"]}
            maxW="4xl"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              w={["100%", "60%", "45%"]}
              float={["none", "none", "right"]}
              p={2}
              m="auto"
              order={["1", "1", "2"]}
            >
              <Image
                src={LogosImage}
                display="block"
                alt="WordPress and Gatsby Logos"
                opacity=".8"
              />
            </Box>

            <Box w={["100%", "100%", "55%"]} color="#fff" mb={[6, 6, "0"]}>
              <Heading
                as="h1"
                fontWeight="800"
                fontSize="2.5rem"
                color="primary"
                lineHeight="1.1"
                textTransform="uppercase"
                fontStyle="italic"
                textShadow="-2px 2px rgba(255, 255, 0, 0.54)"
              >
                Headless WordPress With Gatsby
              </Heading>
              <Text color="#444" fontSize="md" mb={8} fontWeight="500">
                Themes, plugins, and workflow tips to make headless WordPress easy for freelancers and agencies.
              </Text>
              {/* <Button
                onClick={ () => navigate('/blog/how-to-build-headless-wordpress-sites-with-gatsby/')}
                bg="pink"
                rightIcon="arrow-forward"
                w={["100%", "auto"]}
                mb={[2, "0"]}
                rounded="full"
              >
                Start Here
              </Button> */}
            </Box>
          </Box>
        </BackgroundImage>
      </Box>

      <Box bg="gray.50" mb={6} p={4}>
        <Box maxW="4xl" m="auto">
          <BlogOptin description="Get our full guide on building headless WordPress sites with Gatsby. Enter your email below." />
        </Box>
      </Box>

      <Box maxW="4xl" m="auto" px={2}>
        <Box
          display={["block", "flex"]}
          justifyContent="space-between"
          alignItems="center"
          pt={4}
        >
          <Box width={["100%", "48%"]} mb={2}>
            <Image
              src={PublisherHero}
              alt="Screenshot of the publisher theme"
              display="block"
            />
          </Box>
          <Box width={["100%", "48%"]}>
            <Heading lineHeight="1.2" color="headings" fontSize="2xl">
              Gatsby Publisher Theme
            </Heading>
            <Text color="gray.500">
              The Publisher theme is a customizable framework that helps you
              create a static site from your WordPress data. It does all the heavy lifting so you can focus on designing and customizing your site. Learn how to use it in our tutorial.
            </Text>
            <Button onClick={ () => navigate('/blog/how-to-build-headless-wordpress-sites-with-gatsby/')} rounded="full" variant="outline" variantColor="blue" rightIcon="arrow-forward">
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className="row-wrapper" py={4} px={2}>
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
                Publisher
                Theme
              </Heading>
              <Text color="gray.500">
                The Gatsby Publisher theme serves as the base for headless
                WordPress development. It is opinionated and customizable.
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
                Gatsby
                Toolkit Plugin
              </Heading>
              <Text color="gray.500">
                The Gatsby Toolkit plugin for WordPress handles automated
                deployment for your site. More features are coming soon.
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
                Open Source
              </Heading>
              <Text color="gray.500">
                Our tools are open source, our goal is to educate and help
                modernize WordPress websites.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box bg="gray.100" py={6}>
        <Box maxW="4xl" m="auto" px={2}>
          <Box>
            <Heading as="h2" lineHeight="1.2" color="headings" fontSize="2xl">
              Why Static Fuse?
            </Heading>
            <Text color="gray.500">
              When we started building sites with Gatsby we loved it. As we got
              further along, we found it difficult to put all the pieces that we
              wanted together. We would grab a starter WordPress theme and some
              plugins, but it felt like a patchwork quilt, not a solid base that
              we’d use again.
            </Text>
            <Text color="gray.500">
              We wanted to create a line of themes and plugins that are
              opinionated, reliable, and reusable. Working with headless
              WordPress, there are other concerns like deployment and
              integrations. These are all problems we’d like to solve, in a way
              that can be reliable for freelancers and agencies.
            </Text>
            <Button onClick={ () => navigate('/blog/what-is-static-fuse/')} rounded="full" variant="outline" variantColor="blue" rightIcon="arrow-forward">
              A short podcast about Static Fuse
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
