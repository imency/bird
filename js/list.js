$(function () {
    // 导入头部和底部
    $("header").load("header.html")
    $("footer").load("footer.html")

    // 用global来存储变量
    var global=global||{}
    // 控制要加载的次数
    global.loadStart=0;
    loadList()
    // 加载函数
    function loadList(){
        // 判断是不是第一次加载
        if(global.loadStart==0){
            $("#articleList").html("")
            // 如果是第一次加载清空内容
        }
        // 次数+listData0
        var result=listData["listData0"+global.loadStart];
        // 赋值给result
        var list=result.data.list;
        // 将数据放赋值给list 
        // 判断有无数据
        if(!list||!list.length){
            // 没有数据或者数据为空·
            $("#articleList").html("没有数据")
        }else{
            for(var i=0;i<list.length;i++){
                var itemHtml=$("#itemHtML").html()
                itemHtml=itemHtml.replace("articleId",list[i].sysId);
                itemHtml=itemHtml.replace("images/list_img02.jpg",list[i].coverImg);
                itemHtml=itemHtml.replace("$articleTitle$",list[i].title);
                itemHtml=itemHtml.replace("$UpdataTime$",list[i].creatAt);
                itemHtml=itemHtml.replace("$describe$",list[i].describe);
           
                $("#articleList").append(itemHtml);
            }
        }
        global.loadStart++;
        //    一共十五个 15/6=2..余3  向上取整 是3
        //  global.loadCount=3
        global.loadCount=Math.ceil(result.data.count/result.data.pageSize)
        // console.log(global.loadStart,global.loadCount)
        if(global.loadStart>=global.loadCount){
            // 当加载的次数大于等余控制的次数时
            $(".more-lt").fadeTo(200,0);
            $(".list-more").attr("src","images/list_gomore_bg_nomore.jpg")

        }

    }
    $(".more-lt").click(function(){

        if(global.loadStart<global.loadCount){
            loadList()
        }
    })

    // 跳转
    // 小鸟列表 内容的跳转


    $(".list-content").delegate(".content-a","click",function(){
        var articleid=$(this).attr("articleid");
        window.open("details.html?lvv=xiaoniaoNews"+articleid)
    //details.html?news=xiaoNews4
    })







})