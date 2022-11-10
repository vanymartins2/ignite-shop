import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'
import { styled } from '..'

export const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: '#gray900',
  position: 'fixed',
  inset: 0
})

export const StyledContent = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  top: 0,
  bottom: 0,
  right: 0,
  position: 'fixed',
  overflowY: 'scroll',
  overflowX: 'hidden',
  minWidth: '30rem',
  padding: 25,

  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$lg',
    marginBottom: 32
  }
})

export const DialogClose = styled(Dialog.Close, {
  cursor: 'pointer',
  marginBottom: 24,
  margin: '0 0 0 auto',
  border: 0,
  background: 'transparent',
  transition: 'all .2s',

  '&:hover': {
    filter: 'brightness(.6)'
  }
})

export const CartItem = styled('div', {
  width: '100%',
  height: '5.8rem',
  display: 'flex',
  gap: 20,
  marginBottom: 24
})

export const ImageContainer = styled('div', {
  minWidth: '6.25rem',
  height: '5.8rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  objectFit: 'cover'
})

export const InfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,

  p: {
    fontSize: '$md',
    color: '$gray300'
  },

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100'
  },

  a: {
    marginTop: 'auto',
    fontWeight: 'bold',
    color: '$green500',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const PurchaseDetails = styled('div', {
  marginTop: '3.5rem',
  marginBottom: '3.5rem',

  ul: {
    listStyle: 'none',
    marginBottom: 7,

    display: 'flex',
    justifyContent: 'space-between'
  },

  p: {
    fontSize: '$md',
    fontWeight: 'bold'
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold'
  }
})

export const PurchaseButton = styled('button', {
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',

  padding: '1.25rem 2rem',

  backgroundColor: '$green500',
  borderRadius: 8,
  border: 0,
  cursor: 'pointer',
  transition: 'all .2s',

  '&:hover': {
    background: '$green300'
  }
})

export const DialogRoot = Dialog.Root

export const DialogTrigger = Dialog.Trigger

export const DialogPortal = Dialog.Portal
