import { AlertBox } from './AlertBox';

export const AlertBoxTest = () => {

  const closeMe = (event: any) => {
    event.target.parentElement.style.display = "none";
    // the button is in a div, so it's got to have a parent element
  }

  return (
    <>
      <AlertBox type='success' message='A hamster has reported success.' onClose={closeMe}>
        <div>
          AlertBox Test 1:  Variant text.
        </div>
      </AlertBox>
            <AlertBox type='error' message='A hamster has reported an error.' onClose={closeMe}>
        <div>
          AlertBox Test 2:  One child.  Below Alertbox has no children and self-closing tag.
        </div>
      </AlertBox>
      <AlertBox type='warning' message='A hamster is issuing a warning.' onClose={closeMe} />
    </>
  )
}