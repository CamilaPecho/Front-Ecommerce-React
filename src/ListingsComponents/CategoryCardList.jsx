// import './styleCategory.css'
import { CategoryCard } from '../CategoryCardComponent/CategoryCard'
import { fetchData } from '../FetchDataActions/fetchData'
import { fetchDataPaginated } from '../FetchDataActions/fetchDataPaginated'
import { Suspense, useState } from 'react';
const TAKECATEGORIES = 6;
var SKIPCATEGORIES = 0;

const apiResult = fetchData(`https://localhost:7175/api/categories/getallpaginated/take=${TAKECATEGORIES}/skip=${SKIPCATEGORIES}`);


function CategoryCardList() {
  const data = apiResult.read()
  const [categories, setCategories] = useState(data)

  const GetMoreCategories = async () =>{
      var skip = categories.length
      const apiresultSkip = await fetchDataPaginated(`https://localhost:7175/api/categories/getallpaginated/take=${3}/skip=${skip}`);
      setCategories([...categories, ...apiresultSkip]); 
  }

  return (
    <>
      <div className="card card-categories-menu flex-row flex-wrap justify-content-around  m-3">
        <Suspense fallback={<div>Cargando ...</div>}>
        { 
          categories?.map(category => 
            <CategoryCard key={category.id} category={category} />
          )
        }
        </Suspense>
        <div className='col-12 row justify-content-center'>
            <button onClick={GetMoreCategories} className='btn btn-secundary btn-ver-mas'>Ver mas</button>
        </div>
      </div>
    </>
  )
}

export default CategoryCardList;