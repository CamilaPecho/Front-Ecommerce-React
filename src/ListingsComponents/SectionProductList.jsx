// import './styleCategory.css'
import { fetchData } from '../FetchDataActions/fetchData'
import { Suspense, useState, useEffect } from 'react';
import { ProductCard } from '../ProductCardComponent/ProductCard';

const apiResult = fetchData(`https://localhost:7175/api/products/getall`);


function SectionProductList(props) {
  const data = apiResult.read()
  const [products, setProducts] = useState(data)
  
  useEffect(() => {
    if (props.order === 'fecha') {
      const sortedProducts = [...products].sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
      setProducts(sortedProducts);
    }else if (props.order === 'amount') {
      const sortedProducts = [...products].sort((a, b) => a.availableQuantity - b.availableQuantity);
      setProducts(sortedProducts);
    } else {
      setProducts(data);
    }
  }, [props.order, data]);

  return (
    <>
      <h3 className='m-3'>
        {props.title}
      </h3>
      <div className="d-flex flex-row flex-wrap m-2">
        <Suspense fallback={<div>Cargando ...</div>}>
        { 
          products?.slice(0,8).map(product => 
            <ProductCard key={product.id} product={product} />
          )
        }
        </Suspense>
      </div>
    </>
  )
}

export default SectionProductList;