var productName = document.getElementById('product-name');
var productPrice = document.getElementById('product-price');
var productCategory = document.getElementById('product-category');
var productDescription = document.getElementById('product-desc');
var geatDataButton = document.getElementById('get-data');
var tableBody = document.getElementById('t-body');
var inputs = document.getElementsByClassName('form-control');
var inputSearch = document.getElementById('search');
let products ;
var currentIndex = 0;

if(localStorage.getItem('products')==null)
{
    products = [];
}
else
{
    products = JSON.parse(localStorage.getItem('products'));
    displayProduct();
}


geatDataButton.onclick = function()
{
    if(geatDataButton.innerHTML==='Update Product')
    {
        updateProduct();
    }
    else
    {
        getProduct();
    }
    
    displayProduct();
    clearForm();
}

function getProduct()
{
    var product = {
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        description:productDescription.value
    }
    products.push(product);
    localStorage.setItem("products" , JSON.stringify(products));
}

function clearForm()
{
    for(var i=0; i<inputs.length; i++)
    {
        inputs[i].value ="";
    }
}

function displayProduct()
{
    var container = "";
    for(var i =0; i<products.length;i++)
    {
        container += `<tr>
                            <td> ${i+1}</td>
                            <td> ${products[i].name}</td>
                            <td> ${products[i].price}</td>
                            <td> ${products[i].category}</td>
                            <td> ${products[i].description}</td>
                            <td><button class="btn btn-danger" onclick="deleteProduct(${i})" > Delete </button> </td>
                            <td><button class="btn btn-warning" onclick="getProductInfo(${i})"> Update </button>  </td>
                    </tr>` 
    }
    tableBody.innerHTML=container;
}

function deleteProduct(index)
{
    products.splice(index , 1);
    localStorage.setItem('products' , JSON.stringify(products));
    displayProduct();
}

inputSearch.onkeyup= function (){
    var container = "" ;
    for(var i=0 ; i<products.length ; i++)
    {
        if(products[i].name.toLowerCase().includes(inputSearch.value.toLowerCase())== true)
        {
            container += `<tr>
                            <td> ${i+1}</td>
                            <td> ${products[i].name}</td>
                            <td> ${products[i].price}</td>
                            <td> ${products[i].category}</td>
                            <td> ${products[i].description}</td>
                            <td><button class="btn btn-danger" onclick="deleteProduct(${i})" > Delete </button> </td>
                            <td><button class="btn btn-warning" onclick="getProductInfo(${i})"> Update </button>  </td>
                    </tr>` 
        }
    }
    tableBody.innerHTML=container;
    console.log(exist());
}

function getProductInfo(index)
{
    currentIndex = index;
    var product = products[index];

    productName.value = product.name;
    productPrice.value =product.price;
    productCategory.value = product.category;
    productDescription.value = product.description;
    
    geatDataButton.innerHTML="Update Product";
    geatDataButton.classList.replace('btn-primary' , 'btn-warning');
}

function updateProduct()
{
    var product = {
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        description:productDescription.value
    }
    products[currentIndex].name = product.name;
    products[currentIndex].price = product.price;
    products[currentIndex].category = product.category;
    products[currentIndex].description = product.description;
    
    localStorage.setItem("products" , JSON.stringify(products));
    geatDataButton.innerHTML="Add Product";
    geatDataButton.classList.remove('btn-warning');
}

// function exist()
// {
//     if( products.length == 0)
//     {
//         return true
//     }
//     else
//     {
            
//                 for(let i = 0 ; i<products.length ; i++)
//                 {
//                     var gettingInp =  inputSearch.value ;
//                     if(products[i].name.toLowerCase() == gettingInp)
//                     {
//                         return true
//                     }
//                     else//  if(products[i].name.toLowerCase() == inputSearch.value.toLowerCase())
//                     {
//                         return false
//                     }
//                 }
            
    

//         }
// }

// console.log(exist());
