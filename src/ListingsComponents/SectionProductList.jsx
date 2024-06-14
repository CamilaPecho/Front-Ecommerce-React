// import './styleCategory.css'
import { fetchData } from '../FetchDataActions/fetchData'
import { Suspense, useState } from 'react';
import { ProductCard } from '../ProductCardComponent/ProductCard';

const apiResult = fetchData(`https://localhost:7175/api/products/getall`);


function SectionProductList(props) {
  const data = apiResult.read()
  const [products, setProducts] = useState(data)

  return (
    <>
      <h3 className='m-3'>
        {props.title}
      </h3>
      <div className="d-flex flex-row flex-wrap m-2">
        <Suspense fallback={<div>Cargando ...</div>}>
        { 
          products?.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate)).slice(0, 8).map(product => 
            <ProductCard key={product.id} product={product} />
          )
        }
        </Suspense>
      </div>
    </>
  )
}

export default SectionProductList;