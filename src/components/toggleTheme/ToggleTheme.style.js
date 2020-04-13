import styled from 'styled-components'

const size = `2rem`
const raySize = `calc(${size} * -0.4)`
const offsetOrthogonal = `calc(${size} * 0.65)`
const offsetDiagonal = `calc(${size} * 0.45)`

const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const Toggle = styled.input.attrs({ type: 'checkbox' })`
  width: ${size};
  height: ${size};
  appearance: none;
  cursor: pointer;
  border-radius: 1rem;
  color: ${({ theme }) => theme.themeToggle};
  transition: all 500ms;
  box-shadow: ${({ active }) =>
    active === 'light'
      ? `inset calc(2rem * 0.33) calc(2rem * -0.25) 0`
      : `
      inset 0 0 0 ${size},
      calc(${offsetOrthogonal} * -1) 0 0 ${raySize},
      ${offsetOrthogonal} 0 0 ${raySize},
      0 calc(${offsetOrthogonal} * -1) 0 ${raySize},
      0 ${offsetOrthogonal} 0 ${raySize},
      calc(${offsetDiagonal} * -1) calc(${offsetDiagonal} * -1) 0 ${raySize},
      ${offsetDiagonal} ${offsetDiagonal} 0 ${raySize},
      calc(${offsetDiagonal} * -1) ${offsetDiagonal} 0 ${raySize},
      ${offsetDiagonal} calc(${offsetDiagonal} * -1) 0 ${raySize}
  `};
`

export { Label, Toggle }
