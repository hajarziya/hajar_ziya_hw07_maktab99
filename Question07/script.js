import data from "./data.json" assert { type: "json" };

const productTable = document.getElementsByClassName("productTable");

data.products.forEach((product) => {
  const tr = document.createElement("tr");
  tr.classList.add("products-tr");
  tr.innerHTML = `<td class="products_item">${product.model}</td>
  <td class="products_item">
    <img class="img asus" src=${product.image} alt="img" />
  </td>

  <td class="products_item">${product.processor}</td>
  <td class="products_item">${product.ram}</td>
  <td class="products_item">${product.hard}</td>
  <td class="products_item">${product.display}</td>
  <td class="products_item">${product.os}</td>
  <td class="products_item">${product.price}</td>
  <td class="btn">
    <button class="button">Buy now</button>
  </td>`;
  productTable[0].appendChild(tr);
});
