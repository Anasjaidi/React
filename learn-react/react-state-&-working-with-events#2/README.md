## Events in React ?
> In React, events are actions or occurrences that happen in the browser, such as a user clicking a button or a page finishing loading. React provides a way for developers to handle these events and respond to them in the application through event listeners. This is done by attaching a function to an event using the on prefix and the event name, such as onClick for a click event. When the event occurs, the function is called and can perform an action or update
#### example:
  ```jsx

      const MyComponent = () => {

        const handleClick = () => {
          console.log('clicked');
        }

        return (
          <button onClick={handleClick}>
            Click
          </button>
        );
      }

      export default MyComponent;
  ```

## what is satate?
> In React, state refers to a way of storing and managing data that can change within a component. It allows a component to keep track of its internal data and re-render itself when that data changes.

#### example:
```jsx
        import React, { useState } from 'react';
      
      function MyComponent() {
        const [inputValue, setInputValue] = useState('');
      
        function handleInputChange(event) {
          setInputValue(event.target.value);
        }
      
        return (
          <div>
            <input value={inputValue} onChange={handleInputChange} />
            <p>{`The input value is: ${inputValue}`}</p>
          </div>
        );
      }
      
      export default MyComponent;
```