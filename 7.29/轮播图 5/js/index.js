// 轮播图代码
;(function(){
    var listParent = $('.banner-list');
    var bannerList = $('.banner-list > li');
    var listBtn = $('.list-btn > li');
    var length = listBtn.length;
    var index = 0;
    var autoplay = null;
    var dealy = 3000;

    function showIt(){
        listParent.children('li').eq(index).fadeIn(1000).siblings().fadeOut(1000);
        listBtn.eq(index).addClass('focus').siblings().removeClass('focus');
    }

    function playIt(){
        clearInterval(autoplay);
        autoplay = setInterval(function(){
            if(index < length - 1){
                index ++;
            }else{
                index = 0;
            }
            showIt();
        },dealy);
    }
    playIt();
})();
