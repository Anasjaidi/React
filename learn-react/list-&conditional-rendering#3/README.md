## React Key prop ?
> In React, a key is a special string attribute that you can provide to an element in a React component's array of elements. The key helps React identify which items have changed, are added, or are removed. This allows React to efficiently update the user interface. Keys should be unique among the siblings and should be stable. It is a good practice to use keys when generating a list of components from an array.

## how key works ?
> When React renders a component that has a list of items, it keeps track of the order of the items and the keys associated with each item. When the component updates and the list of items changes, React uses the keys to determine which items have been added, removed, or moved.
> For example, let's say you have a component that renders a list of items. Each item is represented by a child component that has a key attribute. When the component first renders, React assigns a key to each child component based on the value of the key attribute.
> When the list of items updates, React compares the keys of the new list of items to the keys of the old list. If an item has a new key, React treats it as a new item and adds it to the list. If an item has a key that already exists, React updates the existing item with the new data. If an item is missing from the new list, React removes it from the user interface.
> By using keys, React can efficiently update the list of items without having to re-render the entire list. This can greatly improve the performance of your application, especially if the list of items is large or if the items are complex.