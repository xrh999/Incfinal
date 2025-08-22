export default async function ProductDetails( {
     params, 
}: {
    params: Promise<{productid: string}>
}) {
        const productid = (await params).productid
    return <h1> details about product {productid}</h1>
}