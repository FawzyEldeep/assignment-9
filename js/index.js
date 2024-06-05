var bookmarkNameInput = document.getElementById("bookmarkName");

var bookmarkURLInput = document.getElementById("bookmarkURL");
 var productList=[];

 if(localStorage.getItem("productContainer" !== null)){
    productList = JSON.parse(localStorage.getItem("productContainer"));

    displayData();
 }





function addProduct (){
    
    if( valaditionName() == true && valaditionUrl() == true){

        var product = {
            name:bookmarkNameInput.value ,
            url : bookmarkURLInput.value
    
        }
    
        productList.push(product);
        localStorage.setItem("productContainer" , JSON.stringify(productList));
    
    
        displayData();
    
        clearForm();
       
    
        
    
    }
    }
  

function clearForm (){
    bookmarkNameInput.value = null
    bookmarkURLInput.value =null
}

function displayData(){
    var cartona="" ;

    for( var i = 0 ; i< productList.length; i++){

        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>
          <button  onclick="visitURL()" class="btn btn-visit " >
            <i class="fa-solid fa-eye pe-2"></i>Visit
          </button>
        </td>
        <td>
          <button onclick="deleteItem(${i})" class="btn btn-delete pe-2" >
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button>
        </td>
      </tr>

        `

       


    }

    document.getElementById("tableContent").innerHTML=cartona;
}


function deleteItem(indexItem ){
    productList.splice( indexItem , 1 )
    localStorage.setItem( 'productContainer' , JSON.stringify(productList))
    displayData()

}


function valaditionName (){
    var text = bookmarkNameInput.value;
    var regex = /^[A-Z][a-z]{3,8}$/;
    var msgNameElement = document.getElementById("msgName")


if( regex.test(text) ==true){

    bookmarkNameInput.classList.add( "is-valid")
    bookmarkNameInput.classList.remove( "is-invalid")
    msgNameElement.classList.add("d-none")
    return true ;

}else{
    bookmarkNameInput.classList.remove( "is-valid")
    bookmarkNameInput.classList.add( "is-invalid")
    msgNameElement.classList.remove("d-none")
return false;

}

}

function valaditionUrl (){
    var urlElement = bookmarkURLInput.value;
    var httpRegex = /^https?:\/\//g;
    var msgUrlElement = document.getElementById("msgUrl")


if( httpRegex.test(urlElement) ==true){

    bookmarkURLInput.classList.add( "is-valid")
    bookmarkURLInput.classList.remove( "is-invalid")
    msgUrlElement.classList.add("d-none")

    return true ;

}else{
    bookmarkURLInput.classList.remove( "is-valid")
    bookmarkURLInput.classList.add( "is-invalid")
    msgUrlElement.classList.remove("d-none")
return false;

}

}

function visitURL() {
    // Replace 'https://example.com' with the URL you want to visit
    
    var url = `http://chatgpt.com/`;
    window.open(url, '_blank');
}

