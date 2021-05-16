import {useState, useEffect} from 'react'
import Product from './Product'
import {useFetch} from './UseFetch'
const url = 'https://rickandmortyapi.com/api/character'


const CustomHooks = () => {

    const { products} = useFetch(url)

    console.log(products);
    return (
        <div>
            <h2>Producs</h2>
            <section>
        {products.map((product) => {
            return <Product key={product.id} {...product} />
        })}
            </section>
        </div>
      );
}
 
export default CustomHooks;