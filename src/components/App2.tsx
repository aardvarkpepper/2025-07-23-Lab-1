import { useState } from 'react';
import { AlertBox } from './AlertBox/AlertBox';
import { UserProfileCard } from './UserProfileCard/UserProfileCard';
import { ProductDisplay } from './ProductDisplay/ProductDisplay';

export const App2 = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  const user = {
    id: "007",
    name: 'James Bond',
    email: 'jb@mi6.org',
    role: 'secret agent'
  }

  const product = {
    id: 'ProductID001',
    name: 'A Nice Product Name',
    price: 12,
    description: `A nice product that you will surely like.`,
    inStock: true,
  }

  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
        />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};