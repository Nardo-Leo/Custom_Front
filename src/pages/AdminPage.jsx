import { Box, Center, Stack } from "@chakra-ui/react"


import { FormCamisa } from "../components/FormCamisa"
import { FormEstampas } from "../components/FormEstampas"




export const AdminPage = () => {




    return (
        <Box  h='120vh' >


            <Center  >
    
                <Stack gap='50px' flexDirection={{md:'row', base:'column'}} 
                marginTop={{md:'100px', base:'50px'}}>
                    <FormCamisa />
                    <FormEstampas />
                </Stack>
                

            </Center>
        </Box>
    )
}