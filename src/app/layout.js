import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'

export const metadata = {
  title: 'App Router',
  description: "App Router",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
