import React from 'react'
import { Box, Divider, Text, Flex, Heading, Link, Image, Button } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
function Footer() {
    return (
        <>
            <Box bg="black">
                <Divider w="80%" mx="auto" py={5} color="orange.400" />
                <Text color="white" py={3} textAlign="center" fontFamily="monospace" w="80%" mx="auto">
                    At CombaFit, we are driven by three main principles quality, transparency and value to the clients. CombatFit aims to <br/> provide 
                    premiun quality clothing, gear and accessories which are truly unique and at a price which is unbeatable.
                </Text>
                <Flex fontSize="2rem" justifyContent="center" py={3} color="orange">
                    <Box px={2}>
                        <FaFacebook />
                    </Box>
                    <Box px={2}>
                        <FaInstagram />
                    </Box>
                    <Box px={2}>
                        <FaTwitter />
                    </Box>
                </Flex>
                <Divider w="80%" mx="auto" py={5} />
                <Flex color="white" justifyContent="space-around" w="80%" mx="auto" flexDir={{base:"column", md:"column", lg:"row"}}>
                    <Box display="block" mb={2}>
                        <Heading color="orange">
                            Products
                        </Heading>
                        <Link>Clothing</Link>
                        <br />
                        <Link>T-Shirt</Link>
                        <br />
                        <Link>Shirt</Link>
                        <br />
                        <Link>SweatShirt</Link>
                        <br />
                        <Link>Trousers</Link>
                        <br />
                        <Link>Shorts</Link>
                    </Box>
                    <Box mb={2}>
                        <Heading display="none">PRODUCTS</Heading>
                        <br />
                        <br />
                        <Link>Souvenirs</Link>
                        <br />
                        <Link>Coffee Mugs</Link>
                        <br />
                        <Link>Beer Mugs</Link>
                        <br />
                        <Link>Whiskey Glasses</Link>
                        <br />
                        <Link>Poster</Link>
                        <br />
                        <Link>Key Rings</Link>
                    </Box>
                    <Box mb={2}>
                        <Heading color="orange">SERVICES</Heading>
                        <Link>Products Customization</Link>
                        <br />
                        <Link>Digital Design Aid</Link>
                        <br />
                        <Link>Procurement services</Link>
                    </Box>
                    <Box mb={2}>
                        <Heading color="orange">
                            STORIES
                        </Heading>
                        <Link>Discover</Link>
                        <br />
                        <Link>Contribute</Link>
                    </Box>
                </Flex>
                <Flex color="white" justifyContent="center" py={5}>
                    <Text fontSize="1.5rem" w="80%" mx="auto" textAlign="center">
                        ©️ COPYRIGHT 2022 | COMBAT FIT | All Rights Reserved
                    </Text>
                </Flex>
                <Flex color="white" justifyContent="center" py={4}>
                    <Text fontSize="1rem" w="80%" mx="auto" textAlign="center">
                        Combat Fit - The Pros' Equipment: As The Premiun supplier of professional miliatry and police Equipment, all combitFit products are made of the very best quality and with the best functional, The comprehensive development work is always based on the user' specific needs and requirement. For Prototypes to series productions, All products are manufactured in our company's own production facilities.
                    </Text>
                </Flex>
                <Flex color="white" border="1px solid #666" justifyContent="space-around" py={5} >
                    <Text  fontSize={{base:".5rem", md:"1rem", lg:"1.5rem"}}>
                        Need Support? <br />
                        Get In Touch...
                    </Text>
                    <Image w={{base:"10%", md:"18%", lg:"18%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6z4rlCVxjpH5mkuYaWk0--8Frgqr-0iVp5A&usqp=CAU" />
                    <Button bg="orange.400" rounded="none" color="black" fontSize={{base:".5rem", md:"1rem", lg:"1.5rem"}}>
                        EMAIL US
                    </Button>
                </Flex>
            </Box>
        </>
    )
}

export default Footer