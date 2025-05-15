import { Box, Input, Center, Field, Stack, Button, Text } from "@chakra-ui/react"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"


export const FormCamisa = () => {


    return (
        
        <main>
 
            


            <form action="https://custom-back-zxiu.onrender.com/addTshirt" method="post" enctype="multipart/form-data">
                <Stack padding='15px' gap='12px' bg='white' color='black'
                borderRadius='md' borderStyle='solid'
                >

                <Text fontWeight='500' fontSize='larger' >Cadastrar Camisa</Text>

        

                    <Field.Root required>
                        <Field.Label>
                            Modelo <Field.RequiredIndicator />
                        </Field.Label>
                        <Input bg='white' color='black' 
                        name='modelo' placeholder="Informe o modelo da camisa" 
                        type="text" />
                    </Field.Root>


                    <Field.Root required>
                        <Field.Label>
                            Cor <Field.RequiredIndicator />
                        </Field.Label>
                        <Input bg='white' color='black' 
                         name="cor" placeholder="Informe a cor" 
                         type="text" />
                    </Field.Root>

                    <Field.Root required>
                        <Field.Label>
                            Imagem Frente <Field.RequiredIndicator />
                        </Field.Label>
                        <Input bg='white' color='black'  
                        name='imagemFrente' placeholder="Informe seu nome" 
                        type="file" />
                    </Field.Root>

                    <Field.Root required>
                        <Field.Label>
                            Imagem Costas <Field.RequiredIndicator />
                        </Field.Label>
                        <Input bg='white' color='black'  
                        name='imagemCostas' placeholder="Informe seu nome" 
                        type="file" />
                    </Field.Root>


                    <Center marginTop='12px'>
                        <Button bg='green.600' color='white' type="submit">Cadastrar Camisa</Button>
                    </Center>
                </Stack>
            </form>

          

        </main>

    )
}