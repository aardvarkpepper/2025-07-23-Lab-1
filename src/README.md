## Reflection

1.  How did you handle optional props in your components?

The Typescript interface for the component uses ?: where a prop is optional.  Where a prop is optional, it may be passed in, or it may not.  Sometimes I used the optional props, sometimes I didn't.  In this assignment, generally there were some booleans like 'showEmail'; where no prop was required, I defaulted to 'false' (do not show information).

2.  What considerations did you make when designing the component interfaces?

Component interfaces were assigned.  I don't think I would have included a method to edit a user ID of my own volition.  Editing a user name is no issue, but user ID may be linked to payments, other accounts by ID, and so on. 

3.  How did you ensure type safety across your components?

Jolly well used those ruddy Typescript interfaces to ensure type safety across components.  Some odd interactions that I'll ask about later.


4.  What challenges did you face when implementing component composition?

Alert box with function on closing, user profile card with function for user ID editing, product display with function for adding product ID to cart - those are pretty disparate items.  Short on time, I modified code provided in the assignment, but I really don't think the components chain together well.  I'm not particularly concerned with chaining items together at this juncture though; that'll come in time.

## Usage Documentation

Basic implmentation, tests, and composition are in sequence in one page.  That's the whole one-page React functionality thing.

## Resources

https://www.w3schools.com/howto/howto_js_alert.asp
https://sentry.io/answers/how-do-you-show-or-hide-elements-in-react/
https://stackoverflow.com/questions/37728951/how-to-css-displaynone-within-conditional-with-react-jsx
https://react.dev/learn/sharing-state-between-components
https://react.dev/learn/passing-props-to-a-component
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/
https://legacy.reactjs.org/docs/faq-functions.html
https://blog.logrocket.com/react-onclick-event-handlers-guide/
https://www.w3schools.com/jsref/prop_style_display.asp