/**
 * Created by xiexing on 2017/7/28.
 */
(function($){
    var GETCLASSES = "";

    $.GETjson(getclasses,{curPage:1},function(data){
        console.log(data);
        var t = $("#class-template").html();
        var f = Handlebar.compile(t)  
    });

})(jQuery)