import { Outlet } from "react-router-dom"
import {Grid, GridItem} from '@chakra-ui/react'
import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="grey.500" minHeight="100vh">
      <GridItem as="aside" colSpan={{base: 6, lg: 2, xl: 1}} bg="teal.400">
        <SideBar />
      </GridItem>
      <GridItem as="main" p="40px" colSpan={{base: 6, lg: 4, xl: 3}}>
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
