import { products } from '@/app/data/productdata';

export async function GET(productId: string) {
    const product = products.find(product => product.id === productId);
    return product;
}
//app/pages/productList/[categoryId]/[subcategoryId]/[productId]/route.ts

