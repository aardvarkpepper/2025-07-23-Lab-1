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
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

export const ProductDisplay = ({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps):React.ReactNode => {
  return (
    <div>
      <div>
        {`ID: ${product.id}, NAME: ${product.name}, PRICE: $${product.price}, DESCRIPTION: ${showDescription ? product.description : 'Settings do not allow product description to be shown.'}, IMAGE URL: ${product.imageUrl ? product.imageUrl : 'No product image URL'}, STOCK STATUS: ${showStockStatus ? product.inStock : 'Settings do not allow stock status to be shown.'}`}
      </div>
      {children ? children : null }
    </div>
  )
}