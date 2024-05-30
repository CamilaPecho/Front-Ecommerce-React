// import './styleCategory.css'
import { ProductCard } from '../ProductCardComponent/ProductCard'
import { fetchData } from '../FetchDataActions/fetchData'
import { Suspense, useState } from 'react';
const TAKECATEGORIES = 6;

const apiResult = fetchData(`https://localhost:7175/api/products/getallbycategory/categoryId=${categoryid}`);


function ProductCardList() {
  const data = apiResult.read()
  const [products, setProducts] = useState(data)

  return (
    <>
      <div className="row flex-row flex-wrap justify-content-around m-3">
        <Suspense fallback={<div>Cargando ...</div>}>
        { 
          products?.map(product => 
            <ProductCard key={product.id} product={product} />
          )
        }
        </Suspense>
      </div>
    </>
  )
}

export default ProductCardList;