import { Field, Center, Box, Input, Button, Stack } from "@chakra-ui/react"






export const CardLogin = () => {

    return (
        <>
<Box h='100vh'>
        <form method="POST" action="https://custom-back-zxiu.onrender.com/login">
        <Center>
                <Box bg='black' color='white'
                 w={{md:'35vw', base:'80vw'}}
                  padding='25px'>

                    <Stack gap='15px'>
                        <Field.Root required> 
                            <Field.Label>Email</Field.Label>
                            <Input bg='white' color='black' name="email" placeholder="Email:" type="email" />

                        </Field.Root>

                        <Field.Root required> 
                            <Field.Label>Senha</Field.Label>
                            <Input bg='white' color='black' name="senha" placeholder="Senha:" type="password" />
                        </Field.Root>

                        <Center>
                            <Button bg='green.600' type="submit" alignSelf="flex-start">
                                Entrar
                            </Button>
                        </Center>
                    </Stack>
                </Box>
            </Center>

        </form>
        </Box>
        </>
    )
}