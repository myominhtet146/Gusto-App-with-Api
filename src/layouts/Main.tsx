import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Main() {
  return (
    <section className="max-w-5xl mx-auto">
        <Header />
        <Outlet />
        <Footer />
    </section>
  )
}

export default Main