import { Box } from "@chakra-ui/react"
import { Header } from "./Header"



export const Layout = ({children}) =>{
    return(
        <>
        <Box bg='whitesmoke'  w='99vw' >
            <Header />
            {children}
        </Box>
        </>
    )
}