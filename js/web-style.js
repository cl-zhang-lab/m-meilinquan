$(function () {
    $('.tabs-title a').click(function () {
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current')
        $(this).parent('.tabs-title').siblings('.tabs-cont').children('div').eq(index).show().siblings().hide()
    })

    /*弹窗*/
    $('.box-stat-btn').click(function () {
        $('.up-box-mc').show()
        $('.up-box-stat').show()
    })

    $('.box-close').click(function () {
        $('.up-box-mc').hide()
        $('.up-box').hide()
    })

    $('.reply-form-btn').click(function () {
        $(this).siblings('.reply-form').toggle()
    })

    /*---------------------------------  HQ  --------------------------------*/

    // TAB切换
    $('.qtab').each(function () {
        $(this).children('.qtab1').eq(0).addClass('on');
    });

    $('.qtab_nr').each(function () {
        $(this).children('.qtab_nr1').eq(0).show();
    });

    $('.qtab1').click(function () {
        // $('.qtab1').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(this).parents().siblings('.qtab_nr').children('.qtab_nr1').eq($(this).index()).show().siblings().hide();
    });

    // 弹窗1
    $('.qtanchuang1').click(function () {
        $('.tcbox1').css('margin-top', ($(window).height() - $('.tcbox1').height()) / 2);
        $('.qtcbg1').fadeIn();
        $('.tcbox1').fadeIn();
    });

    $('.qtcbg1,.qgb1').click(function () {
        $('.qtcbg1').fadeOut();
        $('.tcbox1').fadeOut();
    });

    // 弹窗2
    $('.qtanchuang2').click(function () {
        $('.tcbox2').css('margin-top', ($(window).height() - $('.tcbox2').height()) / 2);
        $('.qtcbg2').fadeIn();
        $('.tcbox2').fadeIn();
    });

    $('.qtcbg2,.qgb2').click(function () {
        $('.qtcbg2').fadeOut();
        $('.tcbox2').fadeOut();
    });

    // 弹窗3
    $('.qtanchuang3').click(function(){
        $('.tcbox3').css('margin-top',($(window).height()-$('.tcbox3').height())/2);
        $('.qtcbg3').fadeIn();
        $('.tcbox3').fadeIn();
    });

    $('.qtcbg3,.qgb3').click(function(){
        $('.qtcbg3').fadeOut();
        $('.tcbox3').fadeOut();
    });

    // 弹窗4
    $('.qtanchuang4').click(function(){
        $('.tcbox4').css('margin-top',($(window).height()-$('.tcbox4').height())/2);
        $('.qtcbg4').fadeIn();
        $('.tcbox4').fadeIn();
    });

    $('.qtcbg4,.qgb4').click(function(){
        $('.qtcbg4').fadeOut();
        $('.tcbox4').fadeOut();
    });

    // 弹窗5
    $('.qtanchuang5').click(function(){
        $('.tcbox5').css('margin-top',$(window).scrollTop()+30);
        $('.qtcbg5').fadeIn();
        $('.tcbox5').fadeIn();
    });

    $('.qtcbg5,.qgb5').click(function(){
        $('.qtcbg5').fadeOut();
        $('.tcbox5').fadeOut();
    });

    // 家具定制 收货地址
    $('.qReception2 ul li span .yydz1').click(function () {
        $(this).siblings('.yydz2').stop().slideToggle();
    });

    $('.qReception2 ul li span .yydz2_nr').click(function () {
        $('.shdz').val($(this).find('.yydz2_nr2').html());
        $('.qReception2 ul li span .yydz2').stop().slideUp();
    });

    // 前台-选效果图
    $('.qReception8_3 a').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.qReception9_1_l2 ul li span .nr2 .nr2_nr').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(this).siblings('.zhi1').val($(this).html());
    });

    $('.qReception9_1_l2 ul li span .nr3 .nr3_nr').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(this).siblings('.zhi1').val($(this).html());
    });

    // 前台-制作工艺详情 增加需求
    var hq1 = 2;
    $('.tcbox5_nr2 ul li span .nr1 .zjxq').click(function(){
        hq1 = hq1+1;
        var hq2 = '<div class="nr1_nr"><div class="nr1_nr1">需求' + hq1 + '</div><div class="nr1_nr2 fix"><input type="text" placeholder="您要定制的家具" class="wbk4 fl"><input type="text" placeholder="您要定制的数量" class="wbk4 fr"></div></div>';
        $(this).parent('.nr1').append(hq2);
    });

})

