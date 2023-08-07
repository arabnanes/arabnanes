import { API_ENDPOINTS } from "./endpoints";
import request from "./request";



export const banners = [
     
{id: 1, name: "Woman", slug: "woman", productCount: 20 , icon:"/assets/images/category/woman.jpg"} ,

{id: 2, name: "Man", slug: "man", productCount: 20, icon: "/assets/images/category/man.jpg"},

{id: 3, name: "Watch", slug: "watch", productCount: 20 , icon: "/assets/images/category/watch.jpg"},

{id: 5, name: "Sports", slug: "sports", productCount: 20 , icon: "/assets/images/category/sports.jpg"},
 
{id: 6, name: "Sunglass", slug: "sunglass", productCount: 20 , icon: "/assets/images/category/sunglass.jpg"},
 
{id: 7, name: "Bags", slug: "bags", productCount: 20, icon: "/assets/images/category/bags.jpg"},
 
{id: 8, name: "Sneakers", slug: "sneakers", productCount: 20 , icon: "/assets/images/category/sneakers.jpg"} 
]


export  function WebsiteData() {

    async function getSettings(){
    const response = await request.get(API_ENDPOINTS.SETTINGS)
    return response
    }

    async function getTopProducts(){
    const response = await request.get(API_ENDPOINTS.POPULAR_PRODUCTS)
    return response
    }
    async function getOneProducts(id : any , slug : any){
    const response = await request.get(`${API_ENDPOINTS.ONEPRODUCT}${id}/${slug}`)
    return response
    }

    async function getSLider(){
    const response = await request.get(`${API_ENDPOINTS.slider}`)
    return response
    }

    async function search(word : any ){
        if(Object.keys(word).length === 0){
            const response = await request.get(`${API_ENDPOINTS.search}/${'i'}`)
            return response
        }else{

            const response = await request.get(`${API_ENDPOINTS.search}/${word}`)
            return response
        }
    }

    async function getFeaturedProducts(){
    const response = await request.get(API_ENDPOINTS.PRODUCTS)
    return response
    }

    async function getNewArrivals(){
    const response = await request.get(API_ENDPOINTS.new)
    return response
    }

    async function getAllVendors(){
   
    const response = await request.get(API_ENDPOINTS.VENDORS)
    return response
    }

    async function getOneVendor(id : any){
    const response = await request.get(`${API_ENDPOINTS.SINGLEVENDOR}${id}`)
    return response
    }

    async function getUserData(){
    const response = await request.post(API_ENDPOINTS.CUSTOMER)
    return response
    }

    async function login( email : string, password : string) {
        const response = await request.post(API_ENDPOINTS.LOGIN , {
            email : email ,
            password : password
        }).catch((error) => {
            console.error(error);
          })
        return response
    }

 return{
    getSettings : getSettings,
    login : login , 
    getTopProducts : getTopProducts,
    getFeaturedProducts : getFeaturedProducts,
    getNewArrivals : getNewArrivals,
    getAllVendors : getAllVendors,
    getUserData : getUserData,
    getOneVendor : getOneVendor,
    getOneProducts : getOneProducts,
    search : search,
    getSLider: getSLider
 }

}

