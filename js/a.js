// 获取文具类型的商品
function getWenJu() {
    // 超级单品
    $.get("./php/getGoodsListNew.php", {
        "typeId": "001",
        "count": "9"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
            <li>
            <a href="../goodsdetail.html?goodsId=${goods.goodsId}"><img src="${goods.goodsImg}" alt="">
            <a href=""> ${ goods.goodsDesc}</a>
            <div class="speed"><span></span></div>
            <span>￥${goods.goodsPrice}</span><b>￥${goods.beiyong1}</b></a>
            </li> 
            `
        });
        $("#super ul").html(htmlStr);
    }, "json");

    // 甄选新鲜
    $.get("./php/getGoodsListNew.php", {
        "typeId": "002",
        "count": "4"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
            <li>
                <p>${goods.goodsName}</p>
                <p>￥${goods.goodsPrice}</p>
                <img src="${goods.goodsImg}" alt="">
            </li>
            `
        });
        $("#xinxian>ul").html(htmlStr);
    }, "json");

    //精致女人
    $.get("./php/getGoodsListNew.php", {
        "typeId": "003",
        "count": "4"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
            <li>
                <p>${goods.goodsName}</p>
                <p>￥${goods.goodsPrice}</p>
                <img src="${goods.goodsImg}" alt="">
            </li>
            `
        });
        $("#women>ul").html(htmlStr);
    }, "json");

    $.get("./php/getGoodsListNew.php", {
        "typeId": "003",
        "count": "1"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
            <strong>${goods.goodsName}</strong>
            <span>${goods.beiyong1}</span>
            <b>${goods.beiyong2}</b>
            <img src="${goods.goodsImg}" alt="">
            `
        });
        $("#women1").html(htmlStr);
    }, "json");

    $.get("./php/getGoodsListNew.php", {
        "typeId": "003",
        "count": "1"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
            <strong>${goods.goodsName}</strong>
            <span>${goods.beiyong1}</span>
            <b>${goods.beiyong2}</b>
            <img src="${goods.goodsImg}" alt="">
            `
        });
        $("#women2").html(htmlStr);
    }, "json");


    // 科技
    $.get("./php/getGoodsListNew.php", {
        "typeId": "004",
        "count": "4"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
        <li>
            <p>${goods.goodsName}</p>
            <p>￥${goods.goodsPrice}</p>
            <img src="${goods.goodsImg}" alt="">
        </li>
        `
        });
        $("#keji>ul").html(htmlStr);
    }, "json");

    $.get("./php/getGoodsListNew.php", {
        "typeId": "004",
        "count": "1"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
            <strong>${goods.goodsName}</strong>
            <span>${goods.beiyong1}</span>
            <b>${goods.beiyong2}</b>
            <img src="${goods.goodsImg}" alt="">
            `
        });
        $("#keji1").html(htmlStr);
    }, "json");

    $.get("./php/getGoodsListNew.php", {
        "typeId": "004",
        "count": "1"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
            <strong>${goods.goodsName}</strong>
            <span>${goods.beiyong1}</span>
            <b>${goods.beiyong2}</b>
            <img src="${goods.goodsImg}" alt="">
            `
        });
        $("#keji2").html(htmlStr);
    }, "json");
    // 懂你想要
    $.get("./php/getGoodsListNew.php", {
        "typeId": "005",
        "count": "18"
    }, function (datas) {
        let htmlStr = "";
        datas.forEach(goods => {
            htmlStr += `
            <li>
            <img src="${goods.goodsImg}" alt="">
            <p>${goods.goodsDesc} </p>
            <span>￥${goods.goodsPrice}</span>
            <strong><i class="iconfont icon-gouwuche"></i></strong>
            <b>找相似</b>
        </li>
            `
        });
        $("#like ul").html(htmlStr);
    }, "json");


}

$(function () {
    getWenJu();
})