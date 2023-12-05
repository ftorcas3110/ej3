import React from 'react'
import Link from "next/link";

function Sidebar() {
  return (
    <nav className="sidebar">
    <Link href="/flores/delfinios_rosas">Delfinios Rosas</Link>
    <Link href="/flores/tulipanes_rosas">Tulipanes Rosas</Link>
    <Link href="/flores/camelia_blanca">Camelia Blanca</Link>
    <Link href="/flores/tulipanes_amarillos">Tulipanes Amarillos</Link>
    <Link href="/flores/camelias_rojas">Camelias Rojas</Link>
    <Link href="/flores/clavel_bicolor">Clavel Bicolor</Link>
    </nav>
  )
}

export default Sidebar