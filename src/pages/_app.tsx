import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'

import Image from 'next/image'
import { Button, Container, Header } from '../styles/pagesStyle/app'
import { Handbag, X } from 'phosphor-react'
import {
  CartItem,
  DialogClose,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  StyledContent,
  StyledOverlay
} from '../styles/componentsStyle/cart'

import Cart from '../components/Cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <DialogRoot>
          <DialogTrigger asChild>
            <Button style={{ backgroundColor: '#202024' }}>
              <Handbag size={24} color="#fff" />

              <span>1</span>
            </Button>
          </DialogTrigger>

          <Cart />
        </DialogRoot>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
