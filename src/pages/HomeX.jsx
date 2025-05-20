{/**/ } "use client"

import React, { useState, useEffect } from "react";



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
import { data } from "react-router-dom";
import { Footer } from "../components/Footer";




export const HomeX = () => {

    const [selectedTShirt, setSelectedTShirt] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('');




    const [gridCamisas, setGridCamisas] = useState([])
    const [camisas, setCamisas] = useState([]);


    useEffect(() => {
        fetch(`https://custom-back-zxiu.onrender.com/dbcamisas`)
            .then(res => res.json())
            .then(data => setGridCamisas(data))
            .catch(err => console.error('Erro ao buscar camisas:', err));
    }, []);

    useEffect(() => {
        fetch(`https://custom-back-zxiu.onrender.com/dbcamisas`)
            .then(res => res.json())
            .then(data => setCamisas(data))
            .catch(err => console.error('Erro ao buscar camisas:', err));
    }, []);




  


    const [icons, setIcons] = useState([]);

    useEffect(() => {
        fetch(`https://custom-back-zxiu.onrender.com/dbicones`)
            .then(res => res.json())
            .then(data => setIcons(data))
            .catch(err => console.error('Erro ao buscar estampas:', err));
    }, []);



  
    const mudarCamisa = (shirt) => {
        setSelecCamisa(shirt);
        console.log(selecCamisa)


    };


    const escolherCamisa = (shirt) => {
        setSelectedTShirt(shirt);
        console.log(selectedTShirt)


    };

    const escolherArte = (art) => {
        setSelectedIcon(art);
        console.log(selectedIcon)

    };




    const handleSendToWhatsApp = () => {
        if (!selectedTShirt || !selectedIcon) {
            alert("Por favor, selecione uma camisa e uma arte antes de enviar.");
            return;
        }

        sendToWhatsApp(selectedTShirt, selectedIcon); 
    };


   





    const longa = gridCamisas.filter(function (e) {
        return e.modelo === "manga longa" || e.modelo === "Manga Longa"
        || e.modelo === "Manga longa"|| e.modelo === "manga Longa"
    })

    const curta = gridCamisas.filter(function (e) {
        return e.modelo === "manga curta" || e.modelo === "Manga Curta"
        || e.modelo === "Manga curta"  || e.modelo === "manga Curta"  
    })

    const regata = gridCamisas.filter(function (e) {
        return e.modelo === "Regata" || e.modelo === "Regata"
    })



    const Todas = () => {
        setCamisas(gridCamisas)


    }

    const mangaLonga = () => {
        setCamisas(longa)


    }

    const mangaCurta = () => {
        setCamisas(curta)

    }

    const semManga = () => {
        setCamisas(regata)
    }








    const preta = gridCamisas.filter(function (e) {
        return e.cor === 'preta' || e.cor === 'Preta'
    })

    const branca = gridCamisas.filter(function (e) {
        return e.cor === 'branca' || e.cor === 'Branca'
    })
    const azul = gridCamisas.filter(function (e) {
        return e.cor === 'azul' || e.cor === 'Azul'
    })


    const vermelha = gridCamisas.filter(function (e) {
        return e.cor === 'vermelha' || e.cor === 'Vermelha'
    })


    const cinza = gridCamisas.filter(function (e) {
        return e.cor === 'cinza' || e.cor === 'Cinza'
    })

    const amarela = gridCamisas.filter(function (e) {
        return e.cor === 'amarela' || e.cor === 'Amarela'
    })


    const verde = gridCamisas.filter(function (e) {
        return e.cor === 'verde' || e.cor === 'Verde'
    })

    const corPreta = () => {
        setCamisas(preta)
    }

    const corBranca = () => {
        setCamisas(branca)
    }

    const corAzul = () => {
        setCamisas(azul)
    }

    const corVemelha = () => {
        setCamisas(vermelha)
    }

    const corCinza = () => {
        setCamisas(cinza)
    }

    const corAmarela = () => {
        setCamisas(amarela)
    }

    const corVerde = () => {
        setCamisas(verde)
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




            <Box w={{ md: '90vw', base: '99vw' }} display='flex' justifyContent='end' alignItems='end' gap='3'
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

                        <MenuItem value="vermelha" onClick={() => seletedColor("vermelha", corVemelha)}
                            bg={option === "vermelha" ? "black" : "white"}
                            color={option === "vermelha" ? "white" : "black"}
                        >Vermelhas</MenuItem>


                        <MenuItem value="cinza" onClick={() => seletedColor("cinza", corCinza)}
                            bg={option === "cinza" ? "black" : "white"}
                            color={option === "cinza" ? "white" : "black"}
                        >Cinzas</MenuItem>


                        <MenuItem value="amarela" onClick={() => seletedColor("amarela", corAmarela)}
                            bg={option === "amarela" ? "black" : "white"}
                            color={option === "amarela" ? "white" : "black"}
                        >Amarelas</MenuItem>

                        <MenuItem value="verde" onClick={() => seletedColor("verde", corVerde)}
                            bg={option === "verde" ? "black" : "white"}
                            color={option === "verde" ? "white" : "black"}
                        >Verdes</MenuItem>
                    </MenuContent>
                </MenuRoot>


              



            </Box>



            <Center padding='0px'>

                <Stack direction={{ md: 'row', base: 'column' }} gap='20px'>




                
                    <Grid
                        templateColumns={{ md: "repeat(4, 1fr)", base: 'repeat(3, 1fr)' }}
                        gap="5"
                        overflowY="scroll"

                        bg="white"
                        h={{ md: "75vh", base: '30vh' }}
                        w={{ md: "40vw", base: '90vw' }}
                        padding='10px'
                        border="3px solid black"
                    >
                        {camisas.map((tshirt) => (
                            <GridItem
                                bg="white"
                                h={{ md: '100px', base: '70px' }}
                                w={{ md: '100px', base: '70px' }}
                                key={tshirt.id}
                                onClick={() => escolherCamisa(tshirt)}
                                cursor="pointer"
                                border={selectedTShirt?.id === tshirt.id ? "2px solid blue" : "none"}
                            >
                                <Image
                                    border="1px dashed black"
                                    h="100%"
                                    w="100%"
                                    src={`https://custom-back-zxiu.onrender.com/imgsCamisas/${tshirt.caminhoImagemFrente}`}
                                    alt={`Estampa ${tshirt.id}`}
                                />
                            </GridItem>
                        ))}
                    </Grid>

                    <Center>
                        <Stack>
                            
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
                                {icons.map((icon) => (
                                    <GridItem
                                        bg="white"
                                        h={{ md: '100px', base: '70px' }}
                                        w={{ md: '100px', base: '70px' }}
                                        key={icon.id}
                                        onClick={() => escolherArte(icon)}
                                        cursor="pointer"
                                        border={selectedIcon?.id === icon.id ? "2px solid blue" : "none"}
                                    >
                                        <Image
                                            border='1px dashed black'
                                            h='100%'
                                            w='100%'
                                            src={`https://custom-back-zxiu.onrender.com/imgsEstampas/${icon.caminhoImagemEstampa}`}
                                            alt={`Estampa ${icon.id}`}
                                        />
                                    </GridItem>
                                ))}
                            </Grid>
                        </Stack>
                    </Center>

                </Stack>
            </Center>

            <Center marginTop='100px'>
                <Text fontSize={{ md: '2em', base: '1.2em' }} fontWeight='500' fontFamily='bold'
                    color='black'
                >Confira como ficou sua combinação</Text>
            </Center>


            <Center w={{ md: "100vw", base: '100vw' }} h={{ md: "60vh", base: '100vh' }}
                id="preview-area" marginTop="50px"
                position="relative" display='flex' flexDirection={{ md: 'row', base: 'column' }}
            >






                {selectedTShirt && (
                    <>

                        <Box display='flex'>
                            <Image

                                objectFit='contain'
                                position="relative"
                                zIndex="1"
                                w={{ md: '25vw', base: '90vw' }}
                                h={{ md: '45vh', base: '50vh' }}
                                src={`https://custom-back-zxiu.onrender.com/imgsCamisas/${selectedTShirt.caminhoImagemFrente}`}
                                //src={`https://custom-back-zxiu.onrender.com/imgsCamisas/${selectedShirt.caminhoImagemFrente}`}
                                alt="Camisa Selecionada Frente"
                            />

                            {selectedIcon && (

                                <Image
                                    objectFit='contain'
                                    position="absolute"
                                    top={{ md: '27%', base: "15%" }}
                                    left={{ md: '39%', base: "59%" }}
                                    zIndex="2"
                                    h={{ md: '7vh', base: '7vh' }}
                                    w={{ md: '5vw', base: '10vw' }}
                                    src={`https://custom-back-zxiu.onrender.com/imgsIcons/${selectedIcon.caminhoImagemLogo}`}
                                    alt="Arte Selecionada Logo"
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
                                src={`https://custom-back-zxiu.onrender.com/imgsCostas/${selectedTShirt.caminhoImagemCostas}`}
                                alt="Camisa Selecionada Costas"

                            />

                            {selectedIcon && (

                                <Image
                                    objectFit='contain'
                                    position="absolute"
                                    zIndex="2"
                                    h={{ md: '35vh', base: '50vh' }}
                                    w={{ md: '13vw', base: '35vw' }}
                                    src={`https://custom-back-zxiu.onrender.com/imgsEstampas/${selectedIcon.caminhoImagemEstampa}`}
                                    alt="Arte Selecionada Estampa"
                                />
                            )}

                        </Box>


                    </>



                )}


            </Center>


            <Box>
                <Button position='fixed' right='20px' bottom='20px' marginRight='25px'
                    borderRadius='30px' w='50px' h='50px' variant="solid" bg='green'
                    onClick={() => sendMessageToWhatsApp('5585996518936', selectedTShirt, selectedIcon)}

                >
                    <Text fontSize='0.8em' wordBreak='normal' border='none'>
                        Enviar
                    </Text>
                </Button>
            </Box>

            <Footer />

        </>
    );
};