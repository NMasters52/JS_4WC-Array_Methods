# JS4weekChallenge
# Array Methods Advanced Challenge

This project demonstrates the use of advanced JavaScript array methods (`reduce`, `some`, `every`, `filter`, and `map`) to manipulate and analyze a dataset of product objects.

## Project Structure

* `index.html`: Contains the HTML structure for displaying the results.
* `script.js`: Contains the JavaScript code that performs the array manipulations and updates the DOM.

## Data

The project uses a sample dataset of product objects, where each product has the following properties:

* `name`: The name of the product (string).
* `price`: The price of the product (number).
* `category`: The category of the product (string).
* `inStock`: A boolean indicating whether the product is in stock.

## Functionality

The `script.js` file performs the following operations on the `products` array:

1.  **Calculate the Total Value of All Products:**
    * Uses `reduce` to sum the prices of all products.
    * Displays the total price in the `display` element.

2.  **Determine if All Electronics Are In Stock:**
    * Filters the array to only include electronic products.
    * Uses `every` to check if all electronic products are in stock.
    * Displays the result in the `display` element.

3.  **Find Out if Any Books Are Out of Stock:**
    * Filters the array to only include books.
    * Uses `some` to check if any books are out of stock.
    * Displays a user-friendly message indicating whether books are out of stock.

4.  **Create an Array of In-Stock Electronics Names:**
    * Filters the array to include only in-stock electronics.
    * Uses `map` to create a new array containing only the names of the filtered products.
    * Displays the array of names in the `display` element.

5.  **Create an Array of Objects with Increased Prices:**
    * Uses `map` to create a new array of objects.
    * Each object contains the product's name and its price increased by 10%.
    * Displays the new array of objects in the `display` element (using `JSON.stringify`).

## How to Use

1.  Clone or download the repository.
2.  Open `index.html` in your web browser.
3.  The results of the array manipulations will be displayed in the page.

## Notes

* This project is designed to be run in a web browser.
* The `display` element in `index.html` is used to output the results.
* The project demonstrates best practices for using JavaScript array methods.
* The project was tested on an Ipad, so console logging was not used, and all output is displayed to the DOM.