const fs = require("fs");
const $ = require("jquery");
const path = require("path");

const file = require('./users.json');

console.log(searchElement('zippo3', 'login', file.users));

$('.add-action').on('click', function(){ 
    console.log(file);
    $('.extra-attributes').append("<div class="form-group"><input type="text" class="form-control add-attr" id="inputPassword" value="attr[]"/><input type="text" class="form-control add-value" id="inputPassword" value="val[]"/></div>");
})

$('.save-action').on('click', function(){
    console.log(file);
    saveElement(fileName, data);
   
})

$('.delete-action').on('click', function(){
    console.log(file);
    var deleteVal = $('#inputLogin').val();
    deleteElement(deleteVal, "login", file.users);
   
    saveElement(fileName, data);
    console.log(file.users);
   
})

$('.remove-action').on('click', function(){
    console.log('remove-action');
    
})

//
function searchElement(searchVal, searchKey, searchArray){
    var searchedValue = '';
    for(var i= 0; i < searchArray.length; i++ ){
        if(searchArray[i] !== null && searchArray[i][searchKey] == searchVal){
            searchedValue = searchArray[i];
        }
    }

    if(searchedValue){
        return true;
    }else{
        return false;
    }
}

function  editElement(params) {
    
}

function saveElement(fileName, data){
    var pathname = path.join(__dirname, `./${fileName}`);
    console.log(pathname, 'pathname')

    fs.writeFile(pathname, JSON.stringify(data), err => {
        if(err) console.log('error');
        return new Error(err);
    });
    return true;
}

function deleteElement(searchVal, searchKey, searchArray){
    for(var i= 0; i < searchArray.length; i++ ){
        console.log( searchArray[i] == null)
        if(searchArray[i] !== null && searchArray[i][searchKey] == searchVal){
            console.log(searchArray[i]);
            delete searchArray[i];
        }
        
    }

    return searchArray;
}