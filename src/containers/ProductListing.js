import { useSelector , useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import { setProducts } from "../redux/actions/productActions"
import ProductComponent from "./ProductComponent"

const ProductListing = () => {
    const dispatch = useDispatch()
    // const products = useSelector((state) => state.allProducts.products)

    const fetchProducts = async () => {
        const url = "https://fakestoreapi.com/products"
        const response = await axios.get(url)
        .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(setProducts(response.data))
    }
    useEffect( () => {
        fetchProducts()
    },[])
    return (
        <div className="ui grid container" >
            <ProductComponent/>
        </div>
    )
}

export default ProductListing 