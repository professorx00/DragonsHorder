import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link href="#"><a className="navbar-brand" href="#">Dragon's Horde</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Cloaks"><a className="nav-link" href="#">Cloaks</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Rings"><a className="nav-link" href="#">Rings</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Staffs"><a className="nav-link" href='#'> Staffs</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Potions"><a className="nav-link" href="#">Potions</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Helmet"><a className="nav-link" href="#">Helmets</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Boots"><a className="nav-link" href='#'> Boots</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Accessories"><a className="nav-link" href="#">Accesories</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Quivers"><a className="nav-link" href="#">Quivers</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/Arrows"><a className="nav-link" href="#">Arrows</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
