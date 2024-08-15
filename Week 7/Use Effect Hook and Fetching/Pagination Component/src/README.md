# Pagination Component

## Activity Directions

**GOAL**: Create a component that paginates items based on a changing `pageSize` variable.

_Create all code in_ `./components/Pagination.js`

**De-structure props object and initialize state**

1. In the `./components/Pagination.js` component, de-structure the props object into: `items` and `pageSize`.
2. Initialize a state variable called `currentPage` with a value of 1. This will keep track of the current page being displayed.

**Set up useEffect and create paginate function**

1. Use `useEffect` to calculate the total number of pages based on the length of the `items` array and the `pageSize` prop. Update the state variable `totalPages` with this value.
2. Create a function called `paginate` that takes a page number as an argument and updates the state variable `currentPage` with the new page number. This function will be passed down to child components to allow for pagination.

**Separate items based on page size**

1. Use `slice` to display only the `items` corresponding to the current page. The starting index should be `(currentPage - 1) * pageSize` and the ending index should be `currentPage * pageSize`.
2. Render the list of items using map. The format should be:

```javascript
<ul>
  <li key = ITEM_KEY>ITEM_NAME</li>
  <li key = ITEM_KEY>ITEM_NAME</li>
  <li key = ITEM_KEY>ITEM_NAME</li>
</ul>
```

**Create page navigation controls and attach the paginate function**

1. Render a pagination control that displays the current page number and allows the user to navigate to other pages. This control can be a simple array of buttons or a more complex component with additional features like the ability to customize the number of items displayed per page.
2. Attach the `paginate` function to the pagination control buttons to allow the user to navigate between pages.
3. The format should be:

```javascript
<div>
  <span>Page CURRENT_PAGE of TOTAL_PAGES</span>
  <button>NEXT_PAGE_NUMBER</button>
</div>
```

4. Run your code.
5. View your application
6. Test your code.
