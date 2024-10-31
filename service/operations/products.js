import { apiConnector } from '../apiConnector'

export const getAllProducts = async()=>{
    try {
        let allProducts =[];

        const response = await apiConnector("GET", "https://fakestoreapi.com/products")
        
        allProducts = response.data

        // console.log(allProducts);
        return allProducts

    } catch (error) {
        console.log("Error in all products: ",error);
    }
}

export const getAllCategories = async()=>{
    try {
        let allCategories =[];

        const response = await apiConnector("GET", "https://fakestoreapi.com/products/categories")
        
        allCategories = response.data
        return allCategories;
        
    } catch (error) {
        console.log("Error in all categories: ",error);
    }
}

export const getProductDetails = async(productId)=>{
    try {
        let productDetail;

        const response = await apiConnector("GET", `https://fakestoreapi.com/products/${productId}`)
        
        productDetail = response.data
        // console.log("productDetail: ",productDetail);    
        return productDetail;

    } catch (error) {
        console.log("Error in product Details: ",error);
    }
}

export const getproductsByCategory = async(category)=>{
    try {
    // let productId;
    // if(productName === "Clothes"){
    //     productId = 1;
    // }
    // else if(productName === "Electronics"){
        //     productId = 2;
    // }
    // else if(productName === "Furniture"){
    //     productId = 3;
    // }
    // else if(productName === "Shoes"){
    //     productId = 4;
    // }
    // else if(productName === "Music"){
    //     productId = 17;
    // }
    // else {
        //     productId = 5;
        // }
        let allProducts=[];
        
        const response = await apiConnector("GET", `https://fakestoreapi.com/products/category/${category}`)
        allProducts = response.data
        // console.log(allProducts);
        return allProducts;
        
    } catch (error) {
        console.log("Error in products on categories: ",error);
    }
}