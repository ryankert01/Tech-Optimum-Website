import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
export default function Socials() {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Flex justifyContent={"center"}>
          <Box w={"1545px"} h={"1px"} bgColor={"#222E75"}></Box>
        </Flex>
        <Flex justifyContent={"center"}>
          <Flex
            className="social-section"
            //  justifyContent={"center"}
            justifyContent={"space-around"}
            my={"3rem"}
            w={"500px"}
          >
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-tiktok smooth-hover"
            >
              TIKTOK
            </Text>
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-twitter smooth-hover"
            >
              TWITTER
            </Text>
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-instagram smooth-hover"
            >
              INSTAGRAM
            </Text>
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-linkedin smooth-hover"
            >
              LINKEDIN
            </Text>
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-discord smooth-hover"
            >
              DISCORD
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
