let data1=[]
// fetch(url)
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(res){
//         let d=res.vouchers
//         console.log(d)
//         appendProducts(d)
//     });
async function main(){
     var useramount=JSON.parse(localStorage.getItem("user"))
    let res=searchdata()
    let data=await res
    // console.log(data)
    appendProducts(data)
    var amount=useramount.wallet
    console.log(amount)
    document.getElementById("wallet_balance").innerText=amount

}
main()
async function searchdata(){
    try{
        let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

        let res=await fetch(url)
        let data=await res.json();
        // const data1=data.vouchers
        return data[0].vouchers
        console.log(data)
        appendProducts(data)
    }
    catch(err){
        console.log(err)
    }
}
function appendProducts(data){
    data.forEach(function(el){
        // let image=elem.image;
        // let name=elem.name;
        // let price=elem.price
        // let dataObj={
        //      image:image,
        //     name:name,
        //     price:price

        // }
let container=document.createElement("div")
container.setAttribute("class","voucher")
let img=document.createElement("img")
img.src=el.image
// console.log(img)

let name=document.createElement("p")
name.innerText=el.name
// console.log(name)

let price=document.createElement("p")
price.innerText=el.price
// console.log(price)

let btn=document.createElement("button")
btn.setAttribute("class","buy_voucher")
btn.innerText="buy_voucher"

btn.addEventListener("click", function(){
     voucher(el)
})
container.append(img,name,price,btn)
document.getElementById("voucher_list").append(container)

    })
}

function voucher(el){
    // var amount=user.wallet
    // console.log(amount)
//     if(amount>el.price){
// alert("Hurray! purchase successful")
var purchase= JSON.parse(localStorage.getItem("purchase"))||[]
purchase.push(el)
localStorage.setItem("purchase",JSON.stringify(purchase))
    }
