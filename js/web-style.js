$(function () {
    $('.tabs-title a').click(function () {
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current')
        $(this).parent('.tabs-title').siblings('.tabs-cont').children('div').eq(index).show().siblings().hide()
    });

    /*弹窗*/
    $('.box-stat-btn').click(function () {
        $('.up-box-mc').show();
        $('.up-box-stat').show()
    });

    $('.box-pay-btn').click(function () {
        $('.up-box-mc').show();
        $('.up-box-pay').show()
    });


    $('.box-close').click(function () {
        $('.up-box-mc').hide()
        $('.up-box').hide()
    });


    $('.up-add-btn').click(function () {
        $('.up-box-mc').show()
        $('.up-add-box').show()
    });

    $('.box-close').click(function () {
        $('.up-box-mc').hide()
        $('.up-add-box').hide()
    });

    $('.reply-form-btn').click(function () {
        $(this).siblings('.reply-form').toggle()
    });

    $('.member-tab-list .list-title').click(function () {

        if($(this).parent('.member-tab-list').hasClass('current')) {
            $(this).parent('.member-tab-list').removeClass('current')
        } else {
            $(this).parent('.member-tab-list').addClass('current');
            $(this).parent('.member-tab-list').siblings('.member-tab-list').removeClass('current')
        }
    });

    $('.other-info-btn').click(function () {
        if($(this).parent().siblings('.other-info-box').is(":hidden")) {
            $(this).addClass('current');
            $(this).parent().siblings('.other-info-box').show()
        } else {
            $(this).removeClass('current');
            $(this).parent().siblings('.other-info-box').hide()
        }
    });

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
    $('.qtcbg1').height($(window).height());
    $('.tcbox1').css('margin-top', ($(window).height() - $('.tcbox1').height()) / 2);

    $('.qtanchuang1').click(function () {
        $('.qtcbg1').fadeIn();
        $('.tcbox1').fadeIn();
    });

    $('.qtcbg1,.qgb1').click(function () {
        $('.qtcbg1').fadeOut();
        $('.tcbox1').fadeOut();
    });

    // 弹窗2
    $('.qtcbg2').height($(window).height());
    $('.tcbox2').css('margin-top', ($(window).height() - $('.tcbox2').height()) / 2);

    $('.qtanchuang2').click(function () {
        $('.qtcbg2').fadeIn();
        $('.tcbox2').fadeIn();
    });

    $('.qtcbg2,.qgb2').click(function () {
        $('.qtcbg2').fadeOut();
        $('.tcbox2').fadeOut();
    });

    // 弹窗3
    $('.qtcbg3').height($(window).height());
    $('.tcbox3').css('margin-top',($(window).height()-$('.tcbox3').height())/2);

    $('.qtanchuang3').click(function(){
        $('.qtcbg3').fadeIn();
        $('.tcbox3').fadeIn();
    });

    $('.qtcbg3,.qgb3').click(function(){
        $('.qtcbg3').fadeOut();
        $('.tcbox3').fadeOut();
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
    })

    $('.qReception9_1_l2 ul li span .nr2 .nr2_nr').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(this).siblings('.zhi1').val($(this).html());
    })

    $('.qReception9_1_l2 ul li span .nr3 .nr3_nr').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(this).siblings('.zhi1').val($(this).html());
    })

})

