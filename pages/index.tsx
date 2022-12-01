import styles from '../styles/Home.module.css'
import Link from 'next/link'
import CustomHead from './components/Head'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead
        title='Page Head'
        metaDescription='Esta es la page head'
      />

      <main className={styles.main}>
        <h1>Hola Next Js</h1>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
      </main>
      
    </div>
  )
}
