import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom"
import PrimaryLayout from "./layouts/PrimaryLayout"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ContactPage from "./pages/ContactPage"
import ProductsPage from "./pages/ProductsPage"
import ServicesPage from "./pages/ServicesPage"

const router = createHashRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children:
      [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/nosotros',
          element: <AboutUsPage />,
        },
        {
          path: '/contactos',
          element: <ContactPage />,
        },
        {
          path: '/productos',
          element: <ProductsPage />,
        },
        {
          path: '/servicios',
          element: <ServicesPage />,
        },
      ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
