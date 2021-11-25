import { Link } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'


export default function Home() {
  return (

  <div>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      <link href="sticky-footer.css" rel="stylesheet"></link>
    </Head>
    <body className="d-flex flex-column h-100">
      <Header />
      <div>
      <ul class="list-group">
        <li class="list-group-item"><Link href='/Cloaks'>Cloaks</Link></li>
        <li class="list-group-item"><Link href='/Rings'>Rings</Link></li>
        <li class="list-group-item"><Link href='/Staffs'>Staffs</Link></li>
        <li class="list-group-item"> <Link href='/Potions'>Potions</Link></li>
        <li class="list-group-item"> <Link href='/Helmet'>Helmets</Link></li>
        <li class="list-group-item"><Link href='/Boots'>Boots</Link></li>
        <li class="list-group-item"> <Link href='/Accessories'>Accessories</Link></li>
        <li class="list-group-item"><Link href='/Quivers'>Quivers</Link></li>
        <li class="list-group-item"><Link href='/Arrows'>Arrows</Link></li>
      </ul>
      </div>
    </body>
  </div>
    
  )
}
