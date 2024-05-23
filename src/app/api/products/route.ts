import {NextRequest, NextResponse} from 'next/server';
import {PrismaClient} from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const products = await prisma.product.findMany();
    if (!products) {
        return NextResponse.json({
            message: "No products found",
            data: []
        })
    }
    return NextResponse.json({
        message: "Got all products",
        data: products
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {name, price, brandId, categoryId, vat, model, discountAmount, longDescription, shortDescription, showPrice} = body
    const product = await prisma.product.create({
        data: {
            BrandId: brandId,
            CategoryId: categoryId,
            ProductName: name,
            VAT: vat,
            Price: price,
            Model: model,
            Discount_Amount: discountAmount,
            Long_Description: longDescription,
            Short_Description: shortDescription,
            Show_price: showPrice,
        }
    }).catch((error) => {
        return NextResponse.json({
            message: "Error creating product",
            error: error
        })
    })
    return NextResponse.json({
        message: "Product created",
        data: product
    })
}