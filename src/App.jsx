import CategoryCardList from "./ListingsComponents/CategoryCardList"
import SectionProductList from "./ListingsComponents/SectionProductList"
import './styles.css'

export const App = () => {

  return (
    <div className="content-page">
      <CategoryCardList/>
      <SectionProductList order={"createdDate"} title={"Articulos nuevos"}/>
      <SectionProductList order={"amount"} title={"Articulos destacados"}/>
    </div>
  )
}
