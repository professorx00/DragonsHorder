

import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'


export default function Home() {
  return (

  <div>
    <body className="d-flex flex-column h-100">
      <Header />
      <div>
      <ul className="list-group">
        <li className="list-group-item"><Link href='/Cloaks'>Cloaks</Link></li>
        <li className="list-group-item"><Link href='/Rings'>Rings</Link></li>
        <li className="list-group-item"><Link href='/Staffs'>Staffs</Link></li>
        <li className="list-group-item"> <Link href='/Potions'>Potions</Link></li>
        <li className="list-group-item"> <Link href='/Helmet'>Helmets</Link></li>
        <li className="list-group-item"><Link href='/Boots'>Boots</Link></li>
        <li className="list-group-item"> <Link href='/Accessories'>Accessories</Link></li>
        <li className="list-group-item"><Link href='/Quivers'>Quivers</Link></li>
        <li className="list-group-item"><Link href='/Arrows'>Arrows</Link></li>
      </ul>
      </div>
    </body>
  </div>
    
  )
}
