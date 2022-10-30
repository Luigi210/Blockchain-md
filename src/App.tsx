import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Category from "./pages/Category"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Books from "./pages/Books"
import Basket from "./pages/Basket"

export const App = () => {
  const supportedChainIds = [1, 4];
  const connectors = {
      injected: {},
  };

  return <ChakraProvider theme={theme}>
      <ThirdwebProvider
          // chainRpc={{
          //     [ChainId.Rinkeby]:
          //         "https://rinkeby.infura.io/v3/6ecb82aeefcc47fe86b238ecca88afba",
          // }}
          autoConnect
          supportedChains={supportedChainIds}
          desiredChainId={1}
      >
      <BrowserRouter>
        <Header/>
        <Box height={"90%"}>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/category' element={<Category/>} />
            <Route path='/basket' element={<Basket/>} />
            <Route path='/search-books' element={<Books/>} />
          </Routes>
        </Box>
        <Footer/>
      </BrowserRouter>
    </ThirdwebProvider>
  </ChakraProvider>
}
