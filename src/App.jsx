
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeX } from './pages/HomeX'
import { Layout } from './components/Layout'
import { AdminPage } from './pages/AdminPage'
import { CardLogin } from './components/CardLogin'
import { CardLoginError } from './components/CardLoginError'




function App() {


  return (
    <>

      <BrowserRouter>
        <ChakraProvider value={defaultSystem}>
          <Layout>
            <Routes>
              <Route path='/' element={<><HomeX/></>} />
              <Route path='/SystemGrafAdmin' element={<AdminPage />} />
              <Route path='/login' element={<CardLogin />} />
              <Route path='/loginError' element={<CardLoginError />} />
              
            </Routes>
          </Layout>

        </ChakraProvider>


      </BrowserRouter>




    </>
  )
}

export default App
