import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import ItemList from '../../components/ItemList'
import datas from '../../Data/data'

export default function Cloaks() {
  return (

  <div>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      <link href="sticky-footer.css" rel="stylesheet"></link>
    </Head>
    <div className="d-flex flex-column h-100">
      <Header />
    <div>
        <ItemList datas={datas.cats}  cat="Boots"/>
    </div>
    </div>
  </div>
    
  )
}