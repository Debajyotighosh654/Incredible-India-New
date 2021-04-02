$(".readmore").on('click',function(){
    $(this).parent().toggleClass("showContent");
    var replaceText=$(this).parent().hasClass("showContent")? "Read Less":"Read More";
    $(this).text(replaceText);
})