import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.bgSite};
  z-index: 2;
`

export default Wrapper
