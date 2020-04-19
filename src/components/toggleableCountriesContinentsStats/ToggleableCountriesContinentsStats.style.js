import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavTabs = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`

const Option = styled.li`
  width: 50%;
  text-align: center;
  cursor: pointer;
  border-bottom: ${({ isActive }) => (isActive ? '2px solid' : 'unset')};
  border-color: ${({ theme }) => theme.info};
  padding: 1rem;
`

const Tabs = styled.div`
  overflow-x: auto;
  min-height: 20rem;
  position: relative;
`

const Tab = styled.div`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`

export { Container, NavTabs, Option, Tabs, Tab }
