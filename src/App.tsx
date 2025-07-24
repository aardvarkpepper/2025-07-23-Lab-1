import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [isClosed, setIsClosed] = useState(false);

  const closeMe = () => {
    console.log(`pre-close ${isClosed}`)
    setIsClosed((isClosed) => !isClosed);
    console.log(`post-close probably this is an async thing so will read the same but eh ${isClosed}`);
  }

  const handleUserEdit = (userId: string) => {
    console.log(`New user ID: ${userId}`);
  }

  const handleAddToCart = (productId: string) => {
    console.log(`${productId} has been added to cart.`);
  }

  /**
   * something like const handleUserEdit = (event, stringInput: string) => {
   *   event.preventDefault();
   * }
   *  */

  return (
    <>
      <AlertBox type='success' message='hamster' onClose={() => console.log("onClose invoked.")}>
        <div>
          AlertBox Child 1
        </div>
        <div>
          AlertBox Child 2
        </div>
      </AlertBox>
      <UserProfileCard user={{ id: 'UserID', name: 'User Name', email: 'user@userdomain.org', role: 'User Role', avatarUrl: 'http://userthingy.com' }} showEmail={false} showRole={true} onEdit={handleUserEdit}>
        <div>
          User Profile Card Child 1
        </div>
      </UserProfileCard>
      <ProductDisplay product={{ id: 'ProductID', name: 'Product Name', price: 300, description: 'Product Description', inStock: false }} showDescription={true} showStockStatus={true}>
        <div>
          Product Display Card Child 1
        </div>
      </ProductDisplay>
    </>
  )
}

export default App
