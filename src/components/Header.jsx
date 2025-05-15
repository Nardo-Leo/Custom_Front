import { Box, Text, Button } from "@chakra-ui/react"

import {  Link } from "react-router-dom";






export const Header = () => {
    return (



        <Box display='flex' alignItems='center' justifyContent='space-between' 
        bg='black' h={{md:'10vh', base:'5vh'}} w='100vw'  
        padding={{md:'30px 50px 30px 50px', base:'5px 10px'}}
        >
            <Text
            fontSize={{md:'2em', base:'0.9em'}} fontWeight='600'
                color='whitesmoke' >
                Camisas Personalizadas</Text>

            <Link to='/login' >
            <Button bg='white' h={{md:'50px', base:'20px'}} >
                <Text color='black' >Login</Text>
            </Button>
            </Link>
            
        </Box>




    )
}