$(function () {
    console.log('aaaa')

/*---------------------------------  HQ  --------------------------------*/

    // TAB切换
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

    // 弹窗1
    $('.qtcbg1').height($(window).height());
    $('.tcbox1').css('margin-top',($(window).height()-$('.tcbox1').height())/2);

    $('.qtanchuang1').click(function(){
        $('.qtcbg1').fadeIn();
        $('.tcbox1').fadeIn();
    });

    $('.qtcbg1,.qgb1').click(function(){
        $('.qtcbg1').fadeOut();
        $('.tcbox1').fadeOut();
    });

    // 弹窗2
    $('.qtcbg2').height($(window).height());
    $('.tcbox2').css('margin-top',($(window).height()-$('.tcbox2').height())/2);

    $('.qtanchuang2').click(function(){
        $('.qtcbg2').fadeIn();
        $('.tcbox2').fadeIn();
    });

    $('.qtcbg2,.qgb2').click(function(){
        $('.qtcbg2').fadeOut();
        $('.tcbox2').fadeOut();
    });

    // 家具定制 收货地址
    $('.qReception2 ul li span .yydz1').click(function(){
        $(this).siblings('.yydz2').stop().slideToggle();
    });

    $('.qReception2 ul li span .yydz2_nr').click(function(){
        $('.shdz').val($(this).find('.yydz2_nr2').html());
        $('.qReception2 ul li span .yydz2').stop().slideUp();
    });

})

