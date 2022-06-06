function purchase(){
    var purchasedata=JSON.parse(localStorage.getItem("purchase"))
append(purchasedata)
var useramount=JSON.parse(localStorage.getItem("user"))
var amount=useramount.wallet

// console.log(amount)
document.getElementById("wallet_balance").innerText=amount
}
purchase()
function append(data){
    var purchased_vouchers=document.getElementById("purchased_vouchers")
    data.forEach (function(el) {
    var box1=document.createElement("div")
    let image=document.createElement("img")
image.src=el.image
// console.log(img)

let name=document.createElement("p")
name.innerText=el.name
// console.log(name)

let price=document.createElement("p")
price.innerText=el.price
box1.append(image,name,price)
purchased_vouchers.append(box1)
    })
}