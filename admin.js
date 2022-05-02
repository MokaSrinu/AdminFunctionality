function addingfn(){
    var name=document.querySelector("#name").value;
    var category=document.querySelector("#category").value;
    var image=document.querySelector("#image").value;
    var price=document.querySelector("#price").value;
    var gender=document.querySelector("#gender").value;
    var sold=document.querySelector("#sold").value;
    const productobj=new productdetails(name,category,image,price,gender,sold);
}
var products;
if(localStorage.getItem("products")===null){
    products=[];
}else{
    products=json.parse(localStorage.getItem("products"));
}

function productdetails(name,category,image,price,gender,sold=false){
    this.name=name;
    this.category=category;
    this.image=image;
    this.price=price;
    this.gender=gender;
    this.sold=sold;
    var obj={
        name:this.name,
        category:this.category,
        image:this.image,
        price:this.price,
        gender:this.gender,
        sold:this.sold
    }
    products.push(obj);
    localStorage.setItem("products",JSON.stringify(products));
    alert("added successfully");
}