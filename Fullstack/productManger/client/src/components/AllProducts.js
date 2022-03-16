import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import CreateProduct from "./CreateProduct"


const AllProducts = (props) => {

    const {productList, setProductList} = props
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProductList(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data)
                setProductList(productList.filter((product, index)=>product._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))
    }

    return (
        <div>
        
        <hr/>
            <h1>All Products:</h1>
            
            {
                productList.map((product, index)=>(
                    <div key={index}>
                    <Link to={`/product/${product._id}`}>
                        <h2>{product.title}</h2>
                    </Link>
                    <Link to={`/product/edit/${product._id}`}>Edit</Link>
                    <button onClick={()=>deleteFilter(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts