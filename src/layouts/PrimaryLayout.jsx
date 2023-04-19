import { Outlet } from "react-router-dom"
import Header from "../components/commons/header/Header"
import Footer from "../components/commons/footer/Footer"

const PrimaryLayout = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PrimaryLayout