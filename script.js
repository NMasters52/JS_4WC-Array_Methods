const products = [
    { name: "Laptop", price: 1200, category: "Electronics", inStock: true },
    { name: "Book", price: 25, category: "Books", inStock: true },
    { name: "Headphones", price: 150, category: "Electronics", inStock: false },
    { name: "T-shirt", price: 30, category: "Clothing", inStock: true },
    { name: "Keyboard", price: 80, category: "Electronics", inStock: true },
    { name: "Novel", price: 15, category: "Books", inStock: false },
  ];

  //This is done on an Ipad. I cannot console log. Using Dom to output results.
  const display = document.getElementById('display');

  

  //Calculate the total value (sum of prices) of all the products in the products array.
  const sumTotalPrices = products.reduce((totalPrice, item) => {
   return item.price + totalPrice;
  },0);
  display.innerText = `the total value of all the products in the array is: ${sumTotalPrices}`;


  
  //Determine if all products in the "Electronics" category are currently in stock.
  const inStock = products.every((product) => {
   return product.inStock;
  })
  display.innerText = `Are all products in electronics in stock: ${inStock}`;




  //Find out if any of the products in the "Books" category are out of stock. 
  const books = products.filter((item) => {
   return item.category === "Books";
  }).some((book) => {
   return !book.inStock
  });
  display.innerText = `Are there books out of stock?: ${books ? "There are books out of stock" : "there are no books out of stock"}`;



  //Create a new array containing only the names of the products that are both in stock and belong to the "Electronics" category. 
  const inStockElectronics = products.filter((product) => {
    return product.category === "Electronics" && product.inStock;
  }).map((product) => product.name);
  display.innerText = `What are the electronics that are in stock?: ${inStockElectronics}`;



  //Create a new array of objects. Each object should contain the name and price of each product, but the price should be increased by 10%. 
  const newArr = products.map((product) => {
    let newPrice = product.price * 1.1;
    return {name: product.name, price: newPrice};

  })
  display.innerText = `What are the electronics that are in stock?: ${JSON.stringify(newArr)}`;