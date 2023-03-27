import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../Chakra/theme"
import Layout from "../components/layout/Layout"

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Recoil
   <ChakraProvider theme={theme}>
      <Layout/>
      <Component {...pageProps} />
    
    </ChakraProvider>
  )
}