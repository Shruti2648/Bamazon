var mysql = require("mysql")
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "catfood",
  database: "bamazon_db"
})

connection.connect(function(err) {
  if (err) throw err
  displayProducts()
})

var amountDue

function displayProducts() {
    var query = "SELECT * FROM products"
    connection.query(query, function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id
            + "   Product Name: " + res[i].product_name 
            + "   Department Name: " + res[i].department_name
            + "   Price: " + res[i].price)
        }
        findProduct()
    })
}

function findProduct() {
    inquirer.prompt([
        {
        name: "itemID",
        type: "input",
        message: "Please enter the ID of the product that you would like to purchase."
        }, {
        name: "quantity",
        type: "input",
        message: "Please enter the number of units you would like to purchase."
        }
    ]).then(function(answers) {
        connection.query("SELECT * FROM products WHERE item_id = ?", itemID, function(res) {
            amountDue = res[0].price * answer.quantity
            console.log(amountDue)
            if (answer.quantity > res[0].stock_quantity) {
                console.log("Sorry, there is not enough in stock.")
            } else {
                amountDue = res[0].price * answer.quantity
                console.log("Your total is $" + amountDue.toFixed(2) + ". Thank you for your order!")
            }
        })
    }).catch(function () {
        console.log("Promise Rejected");
   })
}



