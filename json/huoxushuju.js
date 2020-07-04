// 超级单品
// let list = Array.from(document.querySelector(".superSingle").querySelectorAll("li"))
// let p1 = list.splice(1, list.length - 1)
// let arr = [];
// p1.forEach(li => {
// let obj = {};
// obj.img = li.querySelector("img").src;
// obj.titile = li.querySelector(".s_title").innerText;
// obj.price = li.querySelector(".s_num_act").innerText;
// obj.prices = li.querySelector(".s_num_line").innerText;
// arr.push(obj);
// })

// let arr2 = JSON.stringify(arr)

// let list = Array.from(document.querySelector(".qua_show_con_right").querySelectorAll("a"))
// let p1 = list.splice(1, list.length - 1)
// let arr = [];
// p1.forEach(li => {
//     let obj = {};
//     obj.img = li.querySelector("img").src;
//     obj.titile = li.querySelector(".burting_font") ? li.querySelector(".burting_font").innerText : "";
//     obj.price = li.querySelector(".eat_money>span") ? li.querySelector(".eat_money>span").innerText : "";
//     arr.push(obj);
// })
// let arr2 = JSON.stringify(arr)


// let list = Array.from(document.querySelector(".qua_top_slideCon_ul").querySelectorAll("li"))
// let p1 = list.splice(1, list.length - 1)

let list = document.querySelector(".delicate_woman ").querySelectorAll("a");
let arr = [];
list.forEach(li => {
    let obj = {};
    obj.percent = li.querySelector(".sold_num>b").innerText;
    arr.push(obj);
})
let arr2 = JSON.stringify(arr)
arr2


let list = document.querySelector(".product_list  ").querySelectorAll("div");
let arr = [];
list.forEach(li => {
    let obj = {};
    obj.img = li.querySelector("img") ? li.querySelector("img").src : "";
    obj.titile = li.querySelector(".pro_title>a") ? li.querySelector(".pro_title>a").innerText : "";
    obj.price = li.querySelector(".new-price>b") ? li.querySelector(".new-price>b").innerText : "";
    // obj.price2 = li.querySelector(".old-price>") ? li.querySelector(".old-price").innerText : "";
    obj.percent = li.querySelector(".sold_num>b") ? li.querySelector(".sold_num>b").innerText : "";
    arr.push(obj);
})
let arr2 = JSON.stringify(arr)
arr2


let list = document.querySelector(".mod_detail_preview").querySelectorAll(".proImg");
let arr = [];
list.forEach(li => {
    let obj = {};
    obj.smalimg = li.querySelector("img").src;
    
    arr.push(obj);
})
let arr2 = JSON.stringify(arr)
arr2

let list = document.querySelector(".dd").querySelectorAll("div");
let arr = [];
list.forEach(li => {
    let obj = {};
    obj.smalimg = li.querySelector("img").src;
    obj.bigimg = li.querySelector("proImg>img").src;
    obj.smalltitile = li.querySelector(".item>a>i").innerText;
    // obj.rate = li.querySelector(".rate").innerText;
    // obj.percent = li.querySelector(".pl >span").innerText;
    arr.push(obj);
})
let arr2 = JSON.stringify(arr)
arr2

let list = document.querySelector(".J_zoom").querySelectorAll("img")[0].getAttribute("src");

console.log(list);