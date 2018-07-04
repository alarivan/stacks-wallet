import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 18px;
  text-align: center;
  transition: 0.08s all ease-in-out;
  user-select: none;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none !important;
`

const StyledButton = styled.button`
  ${({ height }) =>
    height && 
    css`
      min-height: ${height}px;
    `};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translate3d(0, 0, 0);
  flex-grow: 1;

  ${({ padding }) =>
    padding
      ? css`
          padding: ${padding};
        `
      : css`
          padding: 12px 30px;
        `};
  transition: 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    pointer-events: none;
    opacity: 0;
    transition: 0.1s all ease-in-out;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      ${Label} {
        opacity: 0.5;
      }
    `};

  &:focus {
    box-shadow: inset 0 0 0 3px rgba(75, 190, 190, 1);
    &:before {
      box-shadow: inset 0 0 0 3px rgba(75, 190, 190, 1);
    }
  }

  border: 0 !important;
  ${Label} {
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  &::before {
    background: linear-gradient(109.46deg, #504482 0%, #8c66bd 171.9%);
  }
  &:after {
    background: linear-gradient(109.46deg, #1d1740 0%, #664b8a 171.9%);
  }
  &:hover,
  &:focus {
    box-shadow: 1px 3px 11px rgba(89, 58, 121, 0.5);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    &:after {
      background: linear-gradient(109.46deg, #1d1740 0%, #664b8a 171.9%);
      opacity: 1;
    }
  }
`

StyledButton.Div = StyledButton.withComponent('div')
StyledButton.Link = StyledButton.withComponent(Link)
StyledButton.Label = Label

export default StyledButton