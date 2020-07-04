function getWenJu() {


    let username = localStorage.getItem("username") || "";
    if (username) {
        $(".userInfo").text(`${username}:欢迎您`).css({
            "color": "back",
            "cursor": "pointer"
        });
        $(".status").text("注销").css({
            "color": "blue",
            "cursor": "pointer"
        });
    } else {
        $(".userInfo").text(`Hi,请`);
        $(".status").text("登录").css({ "color": "red", "cursor": "pointer" });
    }
    $(".status").click(function () {
        if ($(this).text() == "登录") {
            location.href = "./login.html";
        } else {
            localStorage.removeItem("user_id")
            localStorage.removeItem("username");
            /* 重新加载 */
            window.location.reload();
        }

    })

    // 超级单品
    $.ajax({
        url: "./php/productList.php",
        dataType: "json",
    }).done(data => {
        // console.log(data);

        let html = data.map((item, idx) => {
            if (idx < 9) {
                return `
                <li>
                    <a href=""><img src="${item["img"]}" alt="">
                    <a href=""> ${item.titile}</a>
                    <div class="speed"><span style="width: ${item.percent}"></span></div>
                    <span>¥${item.price}</span><b>￥${item.price2}</b></a>
                </li> 
                `
            }
        }).join("");
        $("#super>ul").html(html);
    })

    // 甄选新鲜
    $.ajax({
        url: "./php/index.php",
        dataType: "json",
    }).done(data => {
        let noe = data.map((item, idx) => {

            if (idx > -1 && idx < 1) {
                return `
                    <li class="fresh_noe noe">
                        <strong>活色生鲜节</strong>
                        <span>部分领劵满减</span>
                        <b>立即购买</b>
                        <img src="${item.img}" alt="">
                   </li>
                    `
            }
        }).join("");
        let html = data.map((item, idx) => {

            if (idx > 0 && idx < 5) {
                return `
                <li>
                    <p>${item.titile}</p>
                    <p>￥${item.price}</p>
                    <img src="${item.img}" alt="">
                </li> 
                `
            }
            // console.log(html);

        }).join("");
        let last = data.map((item, idx) => {

            if (idx > 4 && idx < 6) {
                return `
                    <li class="fresh_noe noe">
                        <strong>平直牛牛排</strong>
                        <span>部分领劵满减</span>
                        <b>立即购买</b>
                        <img src="${item.img}" alt="">
                   </li>
                    `
            }
        }).join("");


        $("#xinxian>ul").html(noe + html + last);



        // 排行
        let paihang1 = data.map((item, idx) => {
            if (idx > 5 && idx < 9) {
                return `
                <li><img src="${item.img}" alt="">
                     <span>${item.paihang}</span>
                </li>
                    `
            }
        }).join("");
        let paihang2 = data.map((item, idx) => {

            if (idx > 9 && idx < 13) {
                return `
                <li><img src="${item.img}" alt="">
                     <span>${item.paihang}</span>
                </li>
                    `
            }
        }).join("");

        $(".fresh_li1").html(paihang1)
        $(".fresh_li2").html(paihang2)

        //精致女人
        let womennoe = data.map((item, idx) => {
            if (idx > 14 && idx < 16) {
                return `
                <li class="fresh_noe noe">
                        <strong>平直牛牛排</strong>
                        <span>部分领劵满减</span>
                        <b>立即购买</b>
                        <img src="${item.img}" alt="">
                   </li>
                    `
            }
        }).join("");
        let womenhtml = data.map((item, idx) => {

            if (idx > 15 && idx < 20) {
                return `
                <li>
                    <p>${item.titile}</p>
                    <p>￥${item.price}</p>
                    <img src="${item.img}" alt="">
                </li> 
                `
            }
        }).join("");
        let womenlast = data.map((item, idx) => {

            if (idx > 19 && idx < 21) {
                return `
                <li class="fresh_noe noe">
                    <strong>平直牛牛排</strong>
                    <span>部分领劵满减</span>
                    <b>立即购买</b>
                    <img src="${item.img}" alt="">
                 </li>
                    `
            }
        }).join("");
        $("#women>ul").html(womennoe + womenhtml + womenlast);
        // 排行
        let womenpaihang1 = data.map((item, idx) => {
            if (idx > 20 && idx < 24) {
                return `
                <li><img src="${item.img}" alt="">
                     <span>${item.paihang}</span>
                </li>
                    `
            }
        }).join("");
        let womenpaihang2 = data.map((item, idx) => {

            if (idx > 23 && idx < 27) {
                return `
                <li><img src="${item.img}" alt="">
                     <span>${item.paihang}</span>
                </li>
                    `
            }
        }).join("");

        $(".women_li1").html(womenpaihang1)
        $(".women_li2").html(womenpaihang2)

        // 科技
        let kejinoe = data.map((item, idx) => {
            if (idx > 29 && idx < 31) {
                return `
                <li class="fresh_noe noe">
                        <strong>平直牛牛排</strong>
                        <span>部分领劵满减</span>
                        <b>立即购买</b>
                        <img src="${item.img}" alt="">
                   </li>
                    `
            }
        }).join("");
        let kejihtml = data.map((item, idx) => {

            if (idx > 30 && idx < 35) {
                return `
                <li>
                    <p>${item.titile}</p>
                    <p>￥${item.price}</p>
                    <img src="${item.img}" alt="">
                </li> 
                `
            }
        }).join("");
        let kejilast = data.map((item, idx) => {
            if (idx > 34 && idx < 36) {
                return `
                <li class="fresh_noe noe">
                    <strong>平直牛牛排</strong>
                    <span>部分领劵满减</span>
                    <b>立即购买</b>
                    <img src="${item.img}" alt="">
                 </li>
                    `
            }
        }).join("");

        $("#keji>ul").html(kejinoe + kejihtml + kejilast);
        // 排行
        let wkejipaihang1 = data.map((item, idx) => {
            if (idx > 35 && idx < 39) {
                return `
                <li><img src="${item.img}" alt="">
                     <span>${item.paihang}</span>
                </li>
                    `
            }
        }).join("");
        let kejipaihang2 = data.map((item, idx) => {

            if (idx > 38 && idx < 42) {
                return `
                <li><img src="${item.img}" alt="">
                     <span>${item.paihang}</span>
                </li>
                    `
            }
        }).join("");

        $(".keji_li1").html(wkejipaihang1)
        $(".keji_li2").html(kejipaihang2)
    })

    // 懂你想要
    $.ajax({
        url: "./php/productList.php",
        dataType: "json",
    }).done(data => {
        let html = data.map((item, idx) => {
            if (idx < 18) {
                return `
                <li>
                <img src="${item["img"]}" alt="">
                <p> ${item.titile} </p>
                <span>￥${item.price}</span>
                <strong><i class="iconfont icon-gouwuche"></i></strong>
                <b>找相似</b>
                </li> 
                `
            }
        }).join("");
        $("#like ul").html(html);
    })


    // 导航栏显示

    $(window).scroll(function () {
        if ($(window).scrollTop() > 610) {
            $(".nav_box").addClass("app_r_display");
        }
        else {
            $(".nav_box").removeClass("app_r_display");
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 650) {
            $(".app_r").addClass("app_r_display");
        }
        else {
            $(".app_r").removeClass("app_r_display");
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 2800) {
            $(".mao").addClass("app_r_display");
        }
        else {
            $(".mao").removeClass("app_r_display");
        }
    })


    $(".super_lis").on("click", "li", function () {
        $(location).attr('href', './productList.html')
    })
    // 轮播
    $(".banner_list>ul>li").mouseenter(function () {
        let index = $(this).index();
        $(this).addClass("banner_list_li").siblings().removeClass("banner_list_li");
        $(".banner_box").children().eq(index).addClass("banner_block").siblings().removeClass("banner_block");
        // console.log("1321321");
    })

    // function OutoPlay() {

    //     let timer=0
    //     setInterval(function(){

    //     },1000
    // }

    let index = 0
    $(".right").on("click", function () {
        index++
        if (index == 2) {
            index = 1
        }
        else {
            $("this").css("background-color", "#999")
            // $(".left").css("background-color", "#666")
        }
        $(this).parent().prev().children().css("left", -(index * 110) + "px")
        console.log((index * 110) + "px");
        console.log("123");
    })

    $(".left").on("click", function () {
        index--
        if (index == -1 || index == 0) {
            index = 1
        }
        $(this).parent().prev().children().css("left", -((index - 1) * 110) + "px")
        console.log(index);

    })


    // 倒计时
    var starttime = new Date(2017 / 06 / 06);
    setInterval(function () {
        var nowtime = new Date();
        var time = starttime - nowtime;
        // var day = parseInt(time / 1000 / 60 / 60 / 24);
        // var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60 + 60);
        var seconds = parseInt(time / 1000 % 60 + 60);
        let str = `
            <span>00</span> : 
            <span class="minute">${minute}</span> : 
            <span class="seconds">${seconds}</span>
        `
        $(".time").html(str)
        if (minute < 10) {
            $('.minute').html("0" + minute);
        }
        else {
            $('.minute').html(minute);
        }
        if (seconds < 10) {
            $('.seconds').html("0" + seconds);
        }
        else {
            $('.seconds').html(seconds);
        }
    }, 1000);


} $(function () {
    getWenJu()


});

