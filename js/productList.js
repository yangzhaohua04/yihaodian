$(() => {
    /* 1、发送网络请求获取服务器端的数据 */
    $.ajax({
        url: "./php/productList.php",
        dataType: "json",
    }).done(data => {
        // console.log(data);

        let html = data.map(item => {
            return `
            <li class="tiao" data-id=${item.id}>
            <a href="./product.html"><img src="${item["img"]}" alt=""></a>
            <p><a href="./product.html">${item.titile}</a></p>
            <div class="list_bottom">
                <div class="list_box">
                    <span>已售${item.percent}</span>
                    <div class="jindutiao">
                        <span></span>
                        <i style="width: ${item.percent}"></i>
                    </div>
                    <div class="boutique_show">
                        <b>¥${item.price}. <strong>0</strong></b>
                        <span>${item.price2}</span>
                        <p class="cat">加入购物车</p>
                        <strong class="jiaru none2">加入成功</strong>
                    </div>
                </div>
            </div>
             </li>
                `
        }).join("");
        $(".boutique_list>ul").html(html);
    })





    $(".boutique_list").on("click", ".cat", function () {

        var id = $(this).parents("li[data-id]").data(id).id;

        var username = localStorage.getItem("username");
        console.log(id, username);

        $.ajax({
            url: "./php/addcart.php",
            data: `id=${id}&username=${username}`
        }).done(function (data) {
            console.log(data)
        })

        $(this).next().addClass("block").removeClass("none2")
        setInterval(() => {
            $(this).next().addClass("none2").removeClass("block")
        }, 2500);
    })



    $(window).scroll(function () {
        if ($(window).scrollTop() > 140) {
            $(".pro_top_list").addClass("fixed");
        }
        else {
            $(".pro_top_list").removeClass("fixed");
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".right_box").addClass("opacity");
        }
        else {
            $(".right_box").removeClass("opacity");
        }
    })




})


