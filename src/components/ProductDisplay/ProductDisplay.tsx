import React from 'react'; // so return type of ProductDisplay OK.
// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (event: any, productId: string) => void;
  children?: React.ReactNode;
}

// Displays product using product information.  Accepts arguments to decide whether to show description and stock status respectively.  Function invoked when item added to cart (function functionality not required by assignment.)
export const ProductDisplay = ({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps):React.ReactNode => {
  return (
    <div>
      <div>
        {`ID: ${product.id}, NAME: ${product.name}, PRICE: $${product.price}, DESCRIPTION: ${showDescription ? product.description : 'Settings do not allow product description to be shown.'}, IMAGE URL: ${product.imageUrl ? product.imageUrl : 'No product image URL'}, STOCK STATUS: ${showStockStatus ? product.inStock : 'Settings do not allow stock status to be shown.'}`}
      </div>
      {onAddToCart ? (
      <button onClick={(event) => onAddToCart(event, product.id)} style={{backgroundColor: "pink"}}>
        Add Item to Cart (Implementation Not Required)
      </button>) : null}
      {children ? children : null }
    </div>
  )
}