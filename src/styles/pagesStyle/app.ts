import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between'
})

export const Button = styled('button', {
  padding: 12,
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',
  transition: 'all 0.2s',
  position: 'relative',

  span: {
    width: 24,
    height: 24,
    right: -7,
    top: -7,
    background: '$green500',
    borderRadius: 1000,
    position: 'absolute',
    color: '$white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  '&:hover': {
    filter: 'brightness(1.2)'
  }
})
