import React, { useEffect } from 'react'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { Client } from './Client'
import { Footer } from './Footer'
import { Header } from './Header'
import { Navbar } from './Navbar'
import { getClients } from '../reducers/clientList'

function App() {
  const dispatch = useDispatch()
  // const clientList = useSelector((state) => state.clientList.data)

  useEffect(() => {
    dispatch(getClients())
  }, [])

  return (
    <>
      <ChakraProvider>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'20px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h="100%"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="orange.300" area={'header'}>
            <Header />
          </GridItem>
          <GridItem pl="2" bg="pink.300" area={'nav'}>
            <Navbar />
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            <Client />
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={'footer'}>
            <Footer />
          </GridItem>
        </Grid>
      </ChakraProvider>
    </>
  )
}

export default App
