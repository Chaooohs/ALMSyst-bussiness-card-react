import { Header } from "../components/header"
import { Footer } from "../components/Footer"
import { Outlet, useLoaderData } from "react-router-dom"


export const Root = () => {
  return (
    <div className="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}


export const rootLoader = async () => {
  const res = await fetch("text-editor.json")
  return res.json()
}