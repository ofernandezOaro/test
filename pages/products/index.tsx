import React, {useEffect, useState} from 'react'
import styles from "../../styles/Products.module.css"
import InterfaceProducts, {InterfaceGetNumber} from '../../utilities/interfaces/interfaceProducts'

const INITIAL_STATE = [
  {
    name: "Oscar",
    description: "Description product oscar",
    created: 22
  },
  {
    name: "Oscar",
    description: "Description product oscar",
    created: 22
  },
]


interface Sub {
  numero: number
}

const INITIAL_STATE_NUMBERS = [{numero: 0}, {numero: 4}];

interface AppState {
  products: InterfaceProducts[]
  getnumer: Array<Sub>
}

const ProductPage = () => {
  const [products, setProducts] = useState<AppState["products"]>([]);
  const [getNumber, setGetNumber] = useState<AppState["getnumer"]>([]);

  useEffect(() => {
    setProducts(INITIAL_STATE)
    setGetNumber(INITIAL_STATE_NUMBERS)
  },[])
  
  return (
    <>
    <div>
      <h1>Esta es la pagina de Productos</h1>
      {products.map((p, index) => (
        <div key={index} className={styles.cardProducts}>
          <p>{p.name}</p>
          <p>{p.description?.substring(0, 10)}</p>
          <p>{p.created}</p>
        </div>
      ))}
      {getNumber.map((n, index) => (
        <p key={index}>{n.numero}</p>
      ))}
    </div>
    </>
  )
}

export default ProductPage
