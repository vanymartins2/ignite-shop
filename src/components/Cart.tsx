import {
  CartItem,
  DialogClose,
  DialogPortal,
  ImageContainer,
  InfoContainer,
  PurchaseButton,
  PurchaseDetails,
  StyledContent,
  StyledOverlay
} from '../styles/componentsStyle/cart'
import { X } from 'phosphor-react'
import Image from 'next/image'

export default function Cart() {
  return (
    <DialogPortal>
      <StyledOverlay />
      <StyledContent>
        <DialogClose>
          <X size={24} color="#fff" />
        </DialogClose>
        <h1>Sacola de compras</h1>

        <CartItem>
          <ImageContainer></ImageContainer>

          <InfoContainer>
            <p>Camiseta Ignite</p>
            <span>R$ 89,90</span>

            <a>Remover</a>
          </InfoContainer>
        </CartItem>

        <CartItem>
          <ImageContainer></ImageContainer>

          <InfoContainer>
            <p>Camiseta Ignite</p>
            <span>R$ 89,90</span>

            <a>Remover</a>
          </InfoContainer>
        </CartItem>

        <CartItem>
          <ImageContainer></ImageContainer>

          <InfoContainer>
            <p>Camiseta Ignite</p>
            <span>R$ 89,90</span>

            <a>Remover</a>
          </InfoContainer>
        </CartItem>

        <CartItem>
          <ImageContainer></ImageContainer>

          <InfoContainer>
            <p>Camiseta Ignite</p>
            <span>R$ 89,90</span>

            <a>Remover</a>
          </InfoContainer>
        </CartItem>

        <PurchaseDetails>
          <ul>
            <li>Quantidade</li>
            <li>3 itens</li>
          </ul>
          <ul>
            <p>Valor total</p>
            <span>R$ 270,00</span>
          </ul>
        </PurchaseDetails>

        <PurchaseButton>Finalizar compra</PurchaseButton>
      </StyledContent>
    </DialogPortal>
  )
}
