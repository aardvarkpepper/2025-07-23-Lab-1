import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import './App.css'

/**
 * 
 * what is convention with onAddToCart, onEdit, onClose?  These are 'onClick' parameters that get passed to children?  The *arguments* themselves are typically "handleUserEdit" or similarly named functions that invoke setState?
 * 
 * xyz as function is weird.
 * 
 * in App, instead of passing handleAddToCart, I pass () => handleAddToCart(blah).  This is ok, yes?
 * handleAddToCart is not invoked because of arrow function.  When it gets to the child element,
 * invoking () => handleAddToCart (WITHOUT THE ARGUMENTS) gets the job done in the end as the arguments are passed in with the rest?  Contrast to how it's handled in UserProfileCard where the entire user is passed in, and the function in the child element is invoked with the argument.
 * 
 * check if event handling is correct - pass up and down.
 * 
 */

function App() {

  const [isClosed, setIsClosed] = useState(false);

  const closeMe = (event: any) => {
    event.target.parentElement.style.display = "none";
    // the button is in a div, so it's got to have a parent element
  }

  const handleUserEdit = (event: any, userId: string) => {
    console.log(event);
    console.log(`New user ID: ${userId}`);
  }

  const handleAddToCart = (event: any, productId: string) => {
    console.log(event);
    console.log(`${productId} has been added to cart.`);
  }

  /**
   * something like const handleUserEdit = (event, stringInput: string) => {
   *   event.preventDefault();
   * }
   *  */

  return (
    <>
      <AlertBox type='success' message='hamster' onClose={closeMe}>
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
      <ProductDisplay product={{ id: 'ProductID', name: 'Product Name', price: 300, description: 'Product Description', inStock: false }} showDescription={true} showStockStatus={true} onAddToCart={() => handleAddToCart(event, 'addProductIdToCart')}>
        <div>
          Product Display Card Child 1
        </div>
      </ProductDisplay>
    </>
  )
}

export default App
