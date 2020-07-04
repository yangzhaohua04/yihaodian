$(() => {
    let username = localStorage.getItem("username");
    console.log(12);

    $.ajax({
        url: "./php/shoppingCart.php",
        data: { username },
        dataType: "json",
    }).done(data => {

        let html = data.map(item => {
            return `
                <div list-id=${item.id} class="shopping_commodity">
                        <input class="checked" type="checkbox"> <img src="${item.img}" alt="">
                        <span><a href="">${item.titile}</a></span>
                        <b>${item.price}</b>
                        <div class="shopping_num">
                            <input type="button" class="reduceBtn" value="-">
                            <input class="num" type="text" value="${item.num}">
                            <input type="button" class="addBtn" value="+">
                        </div>
                        <strong class="yizongjia">${item.price * item.num}</strong>
                        <em class="delete">删除</em>
                    </div>
                `
        }).join("");
        $(".shopping_lsit_c").html(html);
    })


    // 单选
    $(".shopping_lsit_c").on("click", ".checked", function () {
        console.log(123);
        for (let i = 0; i < $(".checked").length; i++) {
            if ($(".checked").eq(i).is(":checked")) {
                $(".quanxuan").prop("checked", true);
                yizongjia = ($(this).parent().find(".yizongjia").text() * 1).toFixed(2)

            }
            else {
                $(".quanxuan").prop("checked", false);
                break
            }
        }
        fn();

    })
    // 全选
    $(".shopping_list").on("click", ".quanxuan", function () {
        if ($(this).is(":checked")) {
            $(this).parent().next().find(".checked").prop("checked", true);
            $(".quanxuan").prop("checked", true);
        }
        fn()
    })
    // 计算数量

    function fn() {
        let zongshuliang = 0
        let zongjiage = 0

        for (let i = 0; i < $(".checked").length; i++) {
            if ($(".checked").eq(i).is(":checked")) {
                zongshuliang += $(".num").eq(i + 1).val() * 1;
                zongjiage += $(".yizongjia").eq(i).text() * 1 * $(".num").eq(i + 1).val() * 1;;
            }
            // zongjiage += $(".checked").is(":checked").find(".yizongjia").text() * 1;
        }


        $(".shuliang").text(zongshuliang)
        $(".heji").text(zongjiage)
    }
    function qq(e) {
        let username = localStorage.getItem("username")
        let num = e.parent().children(".num").val();
        let id = e.parents(".shopping_commodity").attr("list-id")
        console.log(e);
        $.ajax({
            url: "./php/updata.php",
            data: { username, id, num },
            dataType: "json",
        }).done(data => {
            console.log(data);

        })

    }
    $(".shopping_lsit_c").on("click", ".delete", function () {
        let username = localStorage.getItem("username");
        let id = $(this).parents(".shopping_commodity").attr("list-id");

        if (confirm("亲，您真的要删除吗？")) {
            $.ajax({
                url: "./php/delete.php",
                data: { username, id },
                dataType: "json",
            }).done(data => {
                console.log(data);
            })
            $(this).parents(".shopping_commodity").remove();


        }
    })

    // 数量加减
    $(".shopping_lsit_c").on("click", ".reduceBtn", function () {

        let count = $(this).next().val()
        count--
        if (count < 1) {
            count = 1
            $(this).next().val(count)
        }
        else {
            $(this).next().val(count)
        }
        $(this).parent().next().text(count * $(this).parent().prev().text())
        qq($(this))
    })
    $(".shopping_lsit_c").on("click", ".addBtn", function () {
        let count = $(this).prev().val()
        count++
        $(this).prev().val(count)
        $(this).parent().next().text(count * $(this).parent().prev().text())
        qq($(this))
    })


    // 删除


})
