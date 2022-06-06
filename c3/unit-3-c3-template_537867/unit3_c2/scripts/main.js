// document.getElementById("form").addEventListener("submit",details)
var data=JSON.stringify(localStorage.getItem("user"))||[]

function details(){
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var address=document.getElementById("address").value
    var wallet=document.getElementById("amount").value
     var data={
        name:name,
        email:email,
        address:address,
        wallet:wallet
     }
    //   data.push(dataobj);
     console.log(data)
     localStorage.setItem("user",JSON.stringify(data));
     document.getElementById("name").value=null
     document.getElementById("email").value=null
     document.getElementById("address").value=null
     document.getElementById("amount").value=null
}
//     var amount=useramount.wallet
//     console.log(amount)
//     if(amount>el.price){
// alert("Hurray! purchase successful")
//     amount=amount-el.price
//     useramount.wallet=amount
