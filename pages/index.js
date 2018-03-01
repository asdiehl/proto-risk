import React from "react"
import "normalize.css/normalize.css"
import Header from "../components/Header/Header"
import PageContent from "../components/PageContent/PageContent"
import Nav from "../components/Nav/Nav"
import ActivitySettings from "../components/ActivitySettings/ActivitySettings"
import NavLink from "../components/NavLinks/NavLinks"
import Article from "../components/Article/Article"
import Footer from "../components/Footer/Footer"

export default () =>
  <React.Fragment>
    <Header/>
    <PageContent>
      <Nav>
        <ActivitySettings/>
        <NavLink/>
      </Nav>
      <Article title="Credit Lines utilisations" />
    </PageContent>
    <Footer/>
  </React.Fragment>
