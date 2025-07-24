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

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Gerbils</h1> */}
      <AlertBox type='success' message='hamster' onClose={() => console.log("onClose invoked.")}>
        <div>
          AlertBox Child 1
        </div>
        <div>
          AlertBox Child 2
        </div>
      </AlertBox>
      <UserProfileCard user={{id: 'UserID', name: 'User Name', email: 'user@userdomain.org', role: 'User Role', avatarUrl: 'http://userthingy.com'}} showEmail={false} showRole={true} >
        <div>
          User Profile Card Child 1
        </div>
      </UserProfileCard>
      <ProductDisplay product={{id: 'ProductID', name: 'Product Name', price: 300, description: 'Product Description', inStock: false}} showDescription={true} showStockStatus={true}>
        <div>
          Product Display Card Child 1
        </div>
      </ProductDisplay>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
