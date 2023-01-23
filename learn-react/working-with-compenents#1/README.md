## whats is React?
> react is Js Library for building interfaces
![what is react]("./slides/react.png")

## why react ?
> react makes building complex, interactive and reactive user 
interfaces simpler.

## What is compenent?
> React is all about compenents, reusable building block, maded from html and css and potentilly Js for logic.

## why compenents?
  - Reusability
    - Don't repeat yourself
  - separation of concerns
    - every separated compenents have one simple task or functionality
    - don't do many things in one place (function)
  
## How is compenent build ?
> React allow you to create re-usable and reactive compenents, consisting of html and js and css by a declarative approach.

## what is Jsx?
> JSX Stand for js Xml ans is a syntax extension for JavaScript that allows you to write HTML-like elements and components in your JavaScript code.
  #### example:
  ```tsx
const app = _ => {
  return (
    <div>
      <p>anas jaidi</p>
    </div>
  )
}
```

## What is Props ?
> In React, props (short for "properties") are a way for components to receive data from their parent component. They are passed down from the parent component as attributes on the component's JSX element, and can be accessed within the component using the this.props object. Props allow components to be reusable and flexible by allowing them to accept different data based on the context in which they are used.

## what is Composition (Props.children) ?
> React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.
#### example:
```jsx
    function FancyBorder(props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      );
    }

    function WelcomeDialog() {
      return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            Welcome
          </h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
      );
    }
```