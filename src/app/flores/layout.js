import '../globals.css'
import Sidebar from '../Sidebar'

export const metadata = {
  title: 'Flores',
  description: 'Flores',
}

export default function FloresLayout({ children }) {
  return (
    <>
    <Sidebar/>  
    {children}  
    </>
  )
}
