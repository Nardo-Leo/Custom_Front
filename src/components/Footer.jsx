import { Box, Text, Button, Link } from "@chakra-ui/react"
import { List, ListItem } from "@chakra-ui/react"
import { HStack, Stack, VStack } from "@chakra-ui/react"


import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { HiOutlineMailOpen } from "react-icons/hi";


import { SlLocationPin } from "react-icons/sl";
import { FaSquareWhatsapp } from "react-icons/fa6";



export const Footer = () => {
    return (
        <>
            <Box w='100vw' h={{md:'30vh', base:'40vh' }} bg='black' padding={{md:'5vh 40vh', base:'25px 50px'}} 
            display='flex' flexDirection={{md:'row', base:'column'}} justifyContent={'space-between'}>

                <List.Root>
                    <Stack>
                        <Text fontFamily='sans-serif' color='white'>Nossas Redes Sociais</Text>
                        <ListItem>

                            <Button bg='black' h='17px' fontSize='0.8em'  >
                                <TiSocialInstagram />
                                <Text >Instagram</Text>
                            </Button>

                        </ListItem>

                        <ListItem>

                            <Button bg='black' color='white' h='17px' fontSize='0.8em'   >
                                <TiSocialFacebookCircular />
                                <Text>Facebook</Text>
                            </Button>

                        </ListItem>

                        
                        
                    </Stack>
                </List.Root>



                <List.Root marginBottom={{base:'20px'}} >
                    <Stack>
                        <Text color='white' fontFamily='sans-serif'>Entre em contato conosco</Text>
                        <ListItem>

                            <Button bg='black' h='17px' fontSize='0.8em' >
                            <SlLocationPin />
                                <Text>Rua: RuaUmDoisTrês, BairroQuatro</Text>
                            </Button>

                        </ListItem>

                        <ListItem>

                            <Button bg='black' h='17px' fontSize='0.8em'   >
                            <FaSquareWhatsapp />
                                <Text>(85) 997770022</Text>
                            </Button>

                        </ListItem>

                        <ListItem>

                            <Button bg='black' h='17px' fontSize='0.8em'  >
                            <HiOutlineMailOpen />
                                <Text>email@gmmail.com</Text>
                            </Button>

                        </ListItem>
                        
                    </Stack>
                </List.Root>

                


            </Box>
        </>
    )
}