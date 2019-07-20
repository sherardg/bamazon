var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
displayTable();
});


var displayTable = function(){
    connection.query("SELECT * FROM products", function(err,res){
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id +" || " + res[i].product_name + " || " + res[i].department_name + " ||  " + res[i].price + " || " + res[i].stock_quantity + "\n");
      }
      customerPrompt(res);
    })
}

var customerPrompt = function(res){
    inquirer
      .prompt([{
        type: "input",
        name: "choice",
        message: "What is the item_id of the product you would like to buy?"
      }]).then(function(answer){
          var correct = false;
          for (var i = 0; i < res.length; i++){
            if(res[i].item_id == answer.choice){
              correct = true;
              var product = answer.choice;
              var id=i;

              inquirer
              .prompt({
                type: "input",
                name: "quantity",
                message: "How many units of the product would you like to buy?",
                validate: function(value){
                    if(isNaN(value)==false){
                        return true;
                    }else{
                        return false;
                    }
                }
              }).then(function(answer){
                  if((res[id].stock_quantity-answer.quantity)>0){
                    connection.query("UPDATE products SET stock_quantity = '"+(res[id].stock_quantity-answer.quantity)+"' WHERE productName='"+ product +"'", function(err,res2){
                      console.log("You Brought this product");
                      displayTable();
                  })
              } else {
                  console.log("Not valid - please choose another item");
                  customerPrompt(res);
              }
            
              })
            }
          }
          if(i==res.length && correct==false){
              console.log("Not valid - please choose another item");
              customerPrompt(res);
          }
      })
}




// function runSearch() {
//     inquirer
//       .prompt({
//         name: "action",
//         type: "input",
//         message: "What is the item_id of the product you would like to buy?"
//       })

//       .then(function(answer) {
//         var query = "SELECT product, department_name, price, stock_quantity FROM products WHERE ?";
//         connection.query(query, { product: answer.item_id }, function(err, res) {
//           if (err) throw err;
//           for (var i = 0; i < res.length; i++) {
//             console.log("Product Name: " + res[i].product + " || Department Name: " + res[i].department_name + " || Price: " + res[i].price + " || Stock Quantity: " + res[i].stock_quantity);
//           }
//           runSearch();
//         });
//       });
//     }
