export default function reviewId({ params}: 
    {
        params: {
        productId: string ,
        reviewId: string}

}
)
{
    return (
        <div>
            <h1>Product {params.productId} review: {params.reviewId}</h1>
        </div>
    )
}
