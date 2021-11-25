import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import ItemList from '../../components/ItemList'
import datas from '../../Data/data'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cloaks() {
  return (

  <div>
    <div className="d-flex flex-column h-100">
      <Header />
    <div>
        <ItemList datas={datas.cats}  cat="Helmets"/>
    </div>
    </div>
  </div>
    
  )
}