let viewBtn = document.getElementById("viewButton");
let eatval = document.getElementById("eat");
let orderBtn=document.getElementById("orderButton"); 
let watchvideobtn=document.getElementById("watchvideoBtn");
let closebtn=document.getElementById("closeBtn"); 

viewBtn.onclick = function() {
    let eatval = document.getElementById("eat");
    eatval.textContent = "View all food items.";
    viewBtn.textContent = "button Viewed";

}
orderBtn.onclick = function() {
    let eatval = document.getElementById("eat");
    eatval.textContent = "order succsesfully.";
    orderBtn.textContent = "button Viewed";

}


watchvideoBtn.onclick = function() {
    let viewBtn = document.getElementById("viewButton");
    eatval.textContent = "All Food Items view.";
    watchvideoBtn.textContent = "button Viewed";

}
closeBtn.onclick = function() {
    let orderBtn = document.getElementById("orderButton");
    eatval.textContent = "payment succsesfully.";
    closeBtn.textContent = "button Viewed";

}