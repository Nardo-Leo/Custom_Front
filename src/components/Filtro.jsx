import { useState } from "react";
import { Box, Grid, GridItem, Center, Stack, Image, Button, Text,createListCollection  } from "@chakra-ui/react";
import { SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText, } from "@/components/ui/select";

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






export const Filtro = () => {



    return(
        <>



        

<Box  w='90vw' display='flex' justifyContent='end' alignItems='end' gap='3' margin='10px 20px 50px 10px'>
  

<SelectRoot collection={shirts} size="sm" width="320px"  >
  <SelectLabel>Selecione o tipo
    <SelectTrigger border='2px solid grey ' borderRadius='5px'>
      <SelectValueText placeholder='Camisa' />
      <SelectContent>
        {shirts.items.map((shirt) => (
            <SelectItem  item={shirt} key={shirt.value}>
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
            <SelectItem  item={cor} key={cor.value}>
                {cor.label}</SelectItem>))}
      </SelectContent>
    </SelectTrigger>
  </SelectLabel>  
</SelectRoot>


    <Button bg='black' color='white'>Filtrar</Button>



</Box>



        </>
    )
}