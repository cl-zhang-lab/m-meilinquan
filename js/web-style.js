$(function () {
    console.log('aaaa')

/*---------------------------------  HQ  --------------------------------*/

    //TAB切换
    $('.qtab').each(function(){
        $(this).children('.qtab1').eq(0).addClass('on');
    });

    $('.qtab_nr').each(function(){
        $(this).children('.qtab_nr1').eq(0).show();
    });

    $('.qtab1').click(function(){
    // $('.qtab1').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(this).parents().siblings('.qtab_nr').children('.qtab_nr1').eq($(this).index()).show().siblings().hide();
    });

})

