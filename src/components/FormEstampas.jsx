import { Input, Center, Field, Stack, Button, Text } from "@chakra-ui/react"


export const FormEstampas = () => {


    return (


        <main>


            <form action="https://custom-back-zxiu.onrender.com/addIcons" method="post" enctype="multipart/form-data">
                <Stack padding='15px' gap='12px' bg='white' color='black'
                borderRadius='md' borderStyle='solid' >

                    <Text Text fontWeight='500' fontSize='larger' >Cadastrar Estampa</Text>

                    <Field.Root required>
                        <Field.Label>
                            Logo <Field.RequiredIndicator />
                        </Field.Label>
                        <Input bg='white' color='black'
                            name='imagemLogo' type="file" />
                    </Field.Root>

                    <Field.Root required>
                        <Field.Label>
                            Estampa <Field.RequiredIndicator />
                        </Field.Label>
                        <Input
                            bg='white' color='black'
                            name='imagemEstampa' type="file" />
                    </Field.Root>




                    <Center marginTop='12px'>
                        <Button bg='green.600' color='white' type="submit">Cadastrar Estampa</Button>
                    </Center>
                </Stack>
            </form>



        </main>



    )
}