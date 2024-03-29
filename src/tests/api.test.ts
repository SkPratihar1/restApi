import { fetchData, productDetails,productId,AddNewProduct } from '../api/api';
describe("Space test suite", () => {

test('Fetch data from API', async () => {
    const data = await fetchData();
    console.log(data)
   
    expect(data).toBeDefined();
    
});

test('Fetch specific product from API', async () => {
    console.log("productId",productId);
    
    const data = await productDetails(productId);
    // console.log('product',data)
    expect(data).toBeDefined();
});

test('Product add', async () => {

    const title: string = 'test product';
    const price: number = 13.5;
    const description: string = 'lorem ipsum set';
    const image: string = 'https://i.pravatar.cc';
    const category: string = 'electronic';
    try {
        const responseData = await AddNewProduct(title, price,description,image,category);

        console.log(responseData);
        
        expect(responseData).toBeDefined();
        expect(responseData).toHaveProperty('id');
        expect(responseData).toHaveProperty('price');
        expect(responseData).toHaveProperty('title');
        expect(responseData).toHaveProperty('description');
        expect(responseData).toHaveProperty('image');
        expect(responseData).toHaveProperty('category');
        

    } catch (error) {
        throw error
        //fail(error.message);
    }
    
    
});


})