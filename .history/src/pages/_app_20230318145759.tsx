import type { AppProps } from 'next/app'
import { ChakraProvider,Box } from '@chakra-ui/react'
import {theme} from "../Chakra/theme"
import Layout from "../components/layout/Layout"
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <div style={{width:"110%"}}>
    <RecoilRoot>
   <ChakraProvider theme={theme}>
      <Layout/>
      <Component {...pageProps} />
    
    </ChakraProvider>
    </RecoilRoot>
    </div>
  )
}
