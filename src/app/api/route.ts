import { products } from '@/app/data/productdata';

export async function GET(productId: string) {
    const product = products.find(product => product.id === productId);
    return product;
}
//app/api/route.ts

