{/**/ } "use client"

import React, { useState, useEffect } from "react";
import { camisas, artes } from "../dados"; 




import { Box, Grid, GridItem, Center, Stack, Image, Button, Text, createListCollection, Flex } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { sendToWhatsApp, sendMessageToWhatsApp } from "../envioImage";



import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"




export const Home = () => {
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [selectedArt, setSelectedArt] = useState(null);




  // Funções para atualizar os estados
  const escolherCamisa = (shirt) => {
    setSelectedShirt(shirt);
  };

  const escolherArte = (art) => {
    setSelectedArt(art);
  };
  /*
    const handleLogoClick = (logo) => {
      setSelectedLogo(logo);
    };
  */


  const handleSendToWhatsApp = () => {
    if (!selectedShirt || !selectedArt) {
      alert("Por favor, selecione uma camisa e uma arte antes de enviar.");
      return;
    }

    sendToWhatsApp(selectedShirt, selectedArt); // Passando selectedArt também
  };


  //Para filtros


  const shirts = createListCollection({
    items: [
      { label: "Todas", value: "todas" },
      { label: "Manga Longa", value: "mangaLonga" },
      { label: "Manga Curta", value: "mangaCurta" },
      { label: "Regata", value: "regata" },
    ],
  })


  const colors = createListCollection({
    items: [
      { label: "Todas", value: "todas" },
      { label: "Branca", value: "branca" },
      { label: "Preta", value: "preta" },
      { label: "Azul", value: "azul" },
    ],
  })



  const [arrayCamisas, setArrayCamisas] = useState(camisas)




  const longa = camisas.filter(function (e) {
    return e.tipo === "mangaLonga"
  })

  const curta = camisas.filter(function (e) {
    return e.tipo === "mangaCurta"
  })

  const regata = camisas.filter(function (e) {
    return e.tipo === "regata"
  })

  const preta = camisas.filter(function (e) {
    return e.cor === 'preta'
  })

  const branca = camisas.filter(function (e) {
    return e.cor === 'branca'
  })
  const azul = camisas.filter(function (e) {
    return e.cor === 'azul'
  })

  const corPreta = () => {
    setArrayCamisas(preta)
  }

  const corBranca = () => {
    setArrayCamisas(branca)
  }

  const corAzul = () => {
    setArrayCamisas(azul)
  }

  const Todas = () => {
    setArrayCamisas(camisas)


  }

  const mangaLonga = () => {
    setArrayCamisas(longa)


  }

  const mangaCurta = () => {
    setArrayCamisas(curta)

  }

  const semManga = () => {
    setArrayCamisas(regata)
  }


  const [option, setOption] = useState('shirts')

  const seletedModel = (model, callback) => {
    setOption(model)
    callback()
  }


  const seletedColor = (color, callback) => {
    setOption(color)
    callback()
  }






  return (
    <>

      <Box w={{ md: '90vw', base: '100vw' }} display='flex' justifyContent='end' alignItems='end' gap='3'
        margin={{ md: '10px 20px 50px 10px', base: '0px 0px 15px 0px' }}>


        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="ghost" w={{ md: '15vw', base: '30vw' }} fontSize={{ md: '1em', base: '0.7em' }}
              bg='black' color='white'
            >
              Selecione o modelo
            </Button>
          </MenuTrigger>
          <MenuContent>


            <MenuItem value="shirts" onClick={() => seletedModel("shirts", Todas)}
              bg={option === "shirts" ? "black" : "white"}
              color={option === "shirts" ? "white" : "black"}
            >Todas</MenuItem>


            <MenuItem value="mangaCurta" onClick={() => seletedModel("mangaCurta", mangaCurta)}
              bg={option === "mangaCurta" ? "black" : "white"}
              color={option === "mangaCurta" ? "white" : "black"}
            >Manga Curta</MenuItem>


            <MenuItem value="mangaLonga" onClick={() => seletedModel("mangaLonga", mangaLonga)}
              bg={option === "mangaLonga" ? "black" : "white"}
              color={option === "mangaLonga" ? "white" : "black"}
            >Manga Longa</MenuItem>


            <MenuItem value="regata" onClick={() => seletedModel("regata", semManga)}
              bg={option === "regata" ? "black" : "white"}
              color={option === "regata" ? "white" : "black"}
            >Regata</MenuItem>
          </MenuContent>
        </MenuRoot>


        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="surface" w={{ md: '15vw', base: '30vw' }} fontSize={{ md: '1em', base: '0.7em' }}
              bg='black' color='white'
            >
              Selecione a cor
            </Button>
          </MenuTrigger>
          <MenuContent>


            <MenuItem value="colors" onClick={() => seletedColor("colors", Todas)}
              bg={option === "colors" ? "black" : "white"}
              color={option === "colors" ? "white" : "black"}
            >Todas</MenuItem>


            <MenuItem value="pretas" onClick={() => seletedColor("pretas", corPreta)}
              bg={option === "pretas" ? "black" : "white"}
              color={option === "pretas" ? "white" : "black"}
            >Pretas</MenuItem>


            <MenuItem value="bracas" onClick={() => seletedColor("bracas", corBranca)}
              bg={option === "bracas" ? "black" : "white"}
              color={option === "bracas" ? "white" : "black"}
            >Brancas</MenuItem>


            <MenuItem value="azul" onClick={() => seletedColor("azul", corAzul)}
              bg={option === "azul" ? "black" : "white"}
              color={option === "azul" ? "white" : "black"}
            >Azuis</MenuItem>
          </MenuContent>
        </MenuRoot>


        { /*
       <SelectRoot collection={shirts} size="sm" width="320px">
          <SelectLabel>Selecione o tipo
            <SelectTrigger border='2px solid grey ' borderRadius='5px'>
              <SelectValueText placeholder='Camisa' />
              <SelectContent >
                {shirts.items.map((shirt) => (
                  <SelectItem item={shirt} key={shirt.value} >
                    {shirt.label}</SelectItem>))}
              </SelectContent>
            </SelectTrigger>
          </SelectLabel>
        </SelectRoot>


        <SelectRoot collection={colors} size="sm" width="320px" >
          <SelectLabel>Selecione a cor
            <SelectTrigger border='2px solid grey ' borderRadius='5px'>
              <SelectValueText placeholder='Cor' />
              <SelectContent>
                {colors.items.map((cor) => (
                  <SelectItem item={cor} key={cor.value}>
                    {cor.label}</SelectItem>))}
              </SelectContent>
            </SelectTrigger>
          </SelectLabel>
        </SelectRoot>
*/}

       {/*
        <Button bg='black' color='white' marginRight={{ base: '10px' }}  >Filtrar</Button>
       
       */} 



      </Box>



      <Center padding='0px'>

        <Stack direction={{ md: 'row', base: 'column' }} gap='30px'>
          {/* Grid de Camisas */}

          <Grid
            templateColumns={{ md: "repeat(4, 1fr)", base: 'repeat(2, 1fr)' }}
            gap="2"
            overflowY="scroll"
            bg="white"
            h={{ md: "75vh", base: '30vh' }}
            w={{ md: "40vw", base: '90vw' }}
            padding="10px"
            border='3px solid black'
          >

            {arrayCamisas.map((camisa) => (
              <GridItem
                bg='white'
                h='15vh'
                w='15vh'
                key={camisa.id}
                onClick={() => escolherCamisa(camisa)}
                cursor="pointer"
                border={selectedShirt === camisa ? "2px solid blue" : "none"}
              >
                <Image border='1px dashed black' src={camisa.frente} alt={`Camisa ${camisa.id}`} />
              </GridItem>
            ))}
          </Grid>

          {/* Grid de Estampas */}
          <Grid
            templateColumns={{ md: "repeat(4, 1fr)", base: 'repeat(3, 1fr)' }}
            gap="1"
            overflowY="scroll"
            bg="white"
            h={{ md: "75vh", base: '30vh' }}
            w={{ md: "40vw", base: '90vw' }}
            padding="10px"
            border='3px solid black'
          >

            {artes.map((art) => (
              <GridItem
                bg="white"
                h='100px'
                w='100px'
                key={art.id}
                onClick={() => escolherArte(art)}
                cursor="pointer"
                border={selectedArt === art ? "2px solid blue" : "none"}
              >
                <Image border='1px dashed black' h='100%' w='100%' src={art.estampa} alt={`Estampa ${art.id}`} />
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </Center>

      <Center marginTop='100px'>
        <Text fontSize={{ md: '2em', base: '1.2em' }} fontWeight='500' fontFamily='bold'
          color='black'
        >Confira como ficou sua combinação</Text>
      </Center>

      {/* Visualização da Camisa Selecionada */}


      <Center w={{ md: "100vw", base: '100vw' }} h={{ md: "60vh", base: '100vh' }}
        id="preview-area" bg='#F5C16C' marginTop="50px"
        position="relative" display='flex' flexDirection={{ md: 'row', base: 'column' }}
      >


        {/*

         <Box  w={{md:"50vw", base:'80vw'}} h={{md:"60vh", base:'100vh'}}
          display='flex' position="relative"  justifyContent="space-between">

          </Box>
        
        
        
        */}



        {selectedShirt && (
          <>

            <Box display='flex'>
              <Image

                objectFit='contain'
                position="relative"
                zIndex="1"
                w={{ md: '25vw', base: '90vw' }}
                h={{ md: '45vh', base: '50vh' }}
                src={selectedShirt.frente}
                alt="Camisa Selecionada"
              />

              {selectedArt && (

                <Image
                  objectFit='contain'
                  position="absolute"
                  top={{ md: '27%', base: "15%" }}
                  left={{ md: '39%', base: "59%" }}
                  zIndex="2"
                  h={{ md: '7vh', base: '7vh' }}
                  w={{ md: '5vw', base: '10vw' }}
                  src={selectedArt.logo}
                  alt="Arte Selecionada"
                />
              )}

            </Box>

            <Box display='flex'
              justifyContent='center' alignItems='center'>

              <Image
                objectFit='contain'
                position="relative"
                zIndex="1"
                w={{ md: '25vw', base: '90vw' }}
                h={{ md: '45vh', base: '45vh' }}
                src={selectedShirt.costa}
                alt="Camisa Selecionada"
              />

              {selectedArt && (

                <Image
                  objectFit='contain'
                  position="absolute"
                  zIndex="2"
                  h={{ md: '35vh', base: '50vh' }}
                  w={{ md: '13vw', base: '35vw' }}
                  src={selectedArt.estampa}
                  alt="Arte Selecionada"
                />
              )}

            </Box>








          </>



        )}
        {/* selectedArt && (
          <>
            <Image
              objectFit='contain'
              position="absolute"
              top={{ md: '27%', base: "15%" }}
              left={{ md: '39%', base: "59%" }}
              zIndex="2"
              h={{ md: '7vh', base: '7vh' }}
              w={{ md: '5vw', base: '10vw' }}
              src={selectedArt.logo}
              alt="Arte Selecionada"
            />

            {
             
             //Estampa parte de tras da camisa definindo o position 
             
             <Image display='none'
                objectFit='contain'
                  position="absolute"
                  top={{md:"15%", base:'45%'}}
                  left={{md:"56%", base:'33%'}}
                  zIndex="2"
                  h={{md:'35vh',base:'50vh'}}
                  w={{md:'13vw',base:'35vw'}}
                  src={selectedArt.estampa}
                  alt="Arte Selecionada"
                />
              }


          </>
        ) */}

      </Center>



      <Center>
        <Button bg='green' margin='50px 0px'
          onClick={handleSendToWhatsApp}>Downdload</Button>
      </Center>

      <Box>
        <Button position='fixed' right='20px' bottom='20px' marginRight='25px'
          borderRadius='30px' w='50px' h='50px' variant="solid" bg='green'
          onClick={() => sendMessageToWhatsApp('5585996518936', selectedShirt, selectedArt)}

        >
          <Text fontSize='0.5em' wordBreak='normal' border='none'>
            WhatsApp
          </Text>
        </Button>
      </Box>



    </>
  );
};