import { products } from '@/data/productdata';

export async function GET(productId: string) {
    const product = products.find(product => product.id === productId);
    return product;
}
//app/pages/productList/[categoryId]/[subcategoryId]/[productId]/route.ts

export async function GET_RELATED(subcategory: string) {
    const relatedProducts = products.filter(product => product.subcategory === subcategory);
    return relatedProducts;
}