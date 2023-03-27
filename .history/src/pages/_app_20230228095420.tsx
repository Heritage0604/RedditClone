import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../Chakra/theme"
import Layout from "../components"

export default function App({ Component, pageProps }: AppProps) {
  return(
   <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
