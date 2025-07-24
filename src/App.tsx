import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';

import { AlertBoxTest } from './components/AlertBox/AlertBox.test';
import { ProductDisplayTest } from './components/ProductDisplay/ProductDisplay.test';
import { UserProfileCardTest } from './components/UserProfileCard/UserProfileCard.test';
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
 * Note how ProductIDInput is sent as the prop to ProductDisplay.  ProductDisplay attempts to invoke with different arguments but fails.  I think this is correct, as basically an invocation is passed from the parent.
 * 
 * The child element *must* have two arguments (event, and a string).  But when the invocation is passed in from the parent, the child ignores its own arguments to use the parent.  That makes sense in some ways.  After all, if I really intended to pass the function itself, I would actually pass the function.
 * 
 * that is pass handleAddToCart, not () => handleAddToCart(event, argument).  Testing this confirms the supposition.
 * 
 * However, it's weird that the arguments in the child get ignored, yet are demanded.  It's weird.
 * 
 */

function App() {

  // const [isClosed, setIsClosed] = useState(false);

  const closeMe = (event: any) => {
    event.target.parentElement.style.display = "none";
    alert (`Element closed; refresh page to recover element.`)
    // the button is in a div, so it's got to have a parent element
  }

  const handleUserEdit = (event: any, userId: string) => {
    console.log(event);
    console.log(`New user ID: ${userId}`);
    alert (`New user ID: ${userId}`);
  }

  const handleAddToCart = (event: any, productId: string) => {
    console.log(event);
    console.log(`${productId} has been added to cart.`);
    alert (`${productId} has been added to cart.`);
  }

  /**
   * something like const handleUserEdit = (event, stringInput: string) => {
   *   event.preventDefault();
   * }
   *  */

  return (
    <>
      <h1> AlertBox,  UserProfileCard, ProductDisplay</h1>
      <AlertBox type='success' message='hamster' onClose={closeMe}>
        <div>
          AlertBox Child 1
        </div>
        <div>
          AlertBox Child 2
        </div>
      </AlertBox>
      <div>-------------------------------------------------------------</div>
      <UserProfileCard user={{ id: 'UserID', name: 'User Name', email: 'user@userdomain.org', role: 'User Role', avatarUrl: 'http://userthingy.com' }} showEmail={false} showRole={true} onEdit={handleUserEdit}>
        <div>
          User Profile Card Child 1
        </div>
      </UserProfileCard>
      <div>-------------------------------------------------------------</div>
      <ProductDisplay product={{ id: 'ProductID', name: 'Product Name', price: 300, description: 'Product Description', inStock: false }} showDescription={true} showStockStatus={true} onAddToCart={() => handleAddToCart(event, 'ProductIDInput')}>
        <div>
          Product Display Card Child 1
        </div>
      </ProductDisplay>
      <div>=============================================================</div>
      <h2>Alert Box Tests</h2>
      <AlertBoxTest />
      <div>=============================================================</div>
      <h2>User Profile Card Tests</h2>
      <UserProfileCardTest />
      <div>=============================================================</div>
      <h2>Product Display Tests</h2>
      <ProductDisplayTest />
    </>
  )
}

export default App
