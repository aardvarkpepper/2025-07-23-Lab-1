import { ProductDisplay } from './ProductDisplay';

export const ProductDisplayTest = () => {

  const handleAddToCart = (event: any, productId: string) => {
    console.log(event);
    console.log(`${productId} has been added to cart.`);
  }

  return (
    <>
      <ProductDisplay product={{ id: 'ProductID', name: 'Product Name', price: 300, description: 'Product Description', inStock: true }} showDescription={true} showStockStatus={true} onAddToCart={() => handleAddToCart(event, 'addProductIdToCart')}>
        <div> Child Element 1 of 2.  inStock: true, showDescription: true, showStockStatus: true </div>
        <div> Child Element 2 of 2. handleAddToCart supplied.  </div>
      </ProductDisplay>
      
      <ProductDisplay product={{ id: 'ProductID', name: 'Product Name', price: 300, description: 'Product Description', inStock: false }} showDescription={false} showStockStatus={false}></ProductDisplay>
      <div> Above no children element; all set to false, no handleAddToCart.</div>
    </>
  )
}