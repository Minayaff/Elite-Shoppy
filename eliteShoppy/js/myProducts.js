function getProduct(product) {
  return `
<div class="col-lg-3 col-md-4 col-sm-6 col-12">
    <div class="card">
        <div class="product_image">
            <img src="${product.productImage}" class="card-img-top" alt="...">
            <a href="product_page.html" class="quick_view"> QUICK VIEW </a>
            <span>New</span>
        </div>
        <div class="card-body">
            <div class="product_info" id="p_1">
                <h5><a href="" class="productName">${
                  product.productName
                }</a></h5>
                <span class="d-none productID">${product.productID}</span>
                <div class="product_price">
                    <span class="card-text productPrice">$${
                      product.priceDefacto
                    }</span>
                    <del class="text-muted">$${product.priceRevoke}</del>
                </div>
            </div>
            <div class="addCard">
                <button class="addToCart" onclick="addToCart( this.parentNode.parentNode.parentNode )">ADD TO CART</button>
                <div class="addCard1"></div>
            </div>
        </div>
    </div>
</div>
`;
}

function calculatedCart(selectedProduct) {
  shoppingCart = base.storedProducts();
  let discount = 1 * selectedProduct.count;
  let selectedItem = allProducts.find(function (product) {
    return product.productID == selectedProduct.id;
  });
  var itemPrice = selectedItem.priceDefacto;
  itemPrice = (itemPrice * selectedProduct.count - discount).toFixed(2);
  return `
    <li class="cartItem form-group height11">
      <div class="d-none getProductID">${selectedProduct.id}</div>
      <div class="col-6 float-left pt-2">
        <h6 class="text-dark">${selectedProduct.name}</h6>
        <p>Discount: $${discount}</p>
      </div>
      <div class="col-2 float-left pt-2">
        <input type="text" value="${
          selectedProduct.count
        }" class="countSquare form-control">
      </div>
      <div class="col-2 float-left pt-2">
        <button class="xButton" onclick="deleteItem('${
          selectedProduct.id
        }')">x</button>
      </div>
      <div class="col-2 float-left pt-2">
        <p class="pricePlacement">$${itemPrice}</p>
      </div>
    </li>
    <div class="clearfix"></div>
  `;
}

var base = new Database();
var shoppingCart = [];

function addToCart(parent) {
  shoppingCart = base.storedProducts();
  let id = parent.querySelector(".productID").innerText;
  let name = parent.querySelector(".productName").innerText;
  let price = parent.querySelector(".productPrice").innerText;
  let count = 1;
  let status = true;
  let selectedItem = {
    id,
    name,
    price,
    count
  };
  if (selectedItem.length != 0) {
    for (product of shoppingCart) {
      if (selectedItem.id == product.id) {
        console.log("Alert! Item count increase!");
        product.count += 1;
        status = false;
        break;
      }
    }
  }
  if (status) {
    console.log("Alert! New item added!");
    shoppingCart.push(selectedItem);
  }
  base.update(shoppingCart);
  cartPlacement(shoppingCart);
  totalCalc(document.querySelector(".insideOfCart"));
  showModal("modal");
}

function showModal(id) {
  document.getElementById(id).classList.remove("d-none");
}

var allProducts = mensWear
  .concat(womensWear)
  .concat(bags)
  .concat(footwear);

function totalCalc(cart) {
  let total = [];
  document.querySelectorAll(".pricePlacement").forEach(element => {
    let prc = element.innerText;
    prc = prc.split("$");
    let purePrice = parseFloat(prc[1]);
    total.push(purePrice);
  });
  let totalAmount = total.reduce((x, y) => x + y, 0).toFixed(2);
  document.getElementById("totalAmount").innerText = totalAmount;
  if (totalAmount == 0) {
    closeModal("modal");
  }
}

function productPlacement(array, selector) {
  let innerProducts = "";
  for (product of array) {
    innerProducts += getProduct(product);
  }
  if (document.documentElement.clientWidth > 768) {
    document.querySelector(selector).innerHTML = innerProducts;
  } else {
    if (document.querySelector(selector + "Accordion")) {
      document.querySelector(selector + "Accordion").innerHTML = innerProducts;
    } else {
      document.querySelector(selector).innerHTML = innerProducts;
    }
  }
  window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth > 768) {
      document.querySelector(selector).innerHTML = innerProducts;
    } else {
      if (document.querySelector(selector + "Accordion")) {
        document.querySelector(selector + "Accordion").innerHTML = innerProducts;
      } else {
        document.querySelector(selector).innerHTML = innerProducts;
      }
    }
  });
}

function cartPlacement(shoppingCart) {
  shoppingCart = base.storedProducts();
  let innerProducts = "";
  for (product of shoppingCart) {
    innerProducts += calculatedCart(product);
  }
  document.querySelector(".insideOfCart").innerHTML = innerProducts;
}

function deleteItem(id) {
  shoppingCart = shoppingCart.filter(function (item) {
    return item.id != id;
  });
  base.update(shoppingCart);
  cartPlacement(shoppingCart);
  totalCalc(document.querySelector(".insideOfCart"));
}

function closeModal(id) {
  document.getElementById(id).classList.add("d-none");
}

function totalAmount(shoppingCart) {
  for (product of shoppingCart) {
    product.count * (product.price - 1);
  }
}