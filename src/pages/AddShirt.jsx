import React from "react"

import {Box, Text, Input, Button, Center, Link } from "@chakra-ui/react"

import { useState } from "react"




export const AddShirt= ()=>{


    const [shirtData, setShirtData] = useState({
        frente:"",
        costa:"",
        tipo:"",
        cor:""
    })

    const handleChange =(e)=>{
        setShirtData({...shirtData, [e.target.name]:e.target.value})
    }

    const handleSubmit = async() => {
        try{
            const response = await fetch(`https://custom-back-zxiu.onrender.com/add`, {
                method: "POST",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify(shirtData)
            })

            const data = await response.json()
            alert('Imagem cadastrada com sucesso.')
        }catch(error){
            console.log("Seguinte erro ao enviar a imagem:",error)
        }
    }




 

    return(
        <>
        
        <Box bg='orange' color='white'>
            <Center><Text color='black' fontFamily='monospace' fontSize='2em'>Camisa</Text></Center>
            <Input name="frente" placeholder="Link da Frente" onChange={handleChange}></Input>
            <Input name="costa" placeholder="Link da costa" onChange={handleChange}></Input>
            <Input name="tipo" placeholder="Tipo" onChange={handleChange}></Input>
            <Input name="cor" placeholder="Cor" onChange={handleChange}></Input>

            <Center>
                <Button onClick={handleSubmit} bg='green.700' color='white'>Enviar</Button>
            </Center>


        </Box>

        </>
    )
}