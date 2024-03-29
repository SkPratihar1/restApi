//import axios from 'axios';
//import axios from '..axiosConfig';
import axios from '../../axiosConfig'

let responseData: any;
export let productId:any
export async function fetchData(): Promise<any> {
    const response = await axios.get('/products');
    responseData=response.data
    const ids =responseData.map(item => item.id)
    const randomIndex = Math.floor(Math.random() * ids.length);
    productId = ids[randomIndex];
    return responseData;
}

export async function productDetails(productId: number): Promise<any> {
    const response = await axios.get(`/products/${productId}`);
    console.log("response ",response.data);
    
    return response.data;
}


export async function AddNewProduct(title: string, price: number,description:string,image:string,category:string): Promise<any> {
    const postData = {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category
    };

    try {
        const response = await axios.post('/products', postData);
        return response.data;
    } catch (error) {
        throw error;
    }
}