if($("body.top-page")[0]){$(document).ready(function(){function e(e){var t=$(".top-page .explain-content");height=0,t.hide(),$(".top-page .explain-trigger").click(function(i){i.preventDefault(),0==height?(t.show(),t.animate({height:e},1200,"easeInOutQuart"),setTimeout(function(){height=$(".top-page .explain-content").height()},1200)):($("body,html").animate({scrollTop:0},1e3,"easeInOutQuart"),height=$(".top-page .explain-content").height())}),$(this).scroll(function(){$(this).scrollTop()>height&&0!=height&&(t.height(0),height=0,t.hide(),$("html,body").scrollTop(0))}),$(".top-page .closeBtn").click(function(){$(".top-page .explain-content").animate({height:0},1e3,"easeInOutQuart"),setTimeout(function(){$(".top-page .explain-content").hide(),height=0},1e3)})}$(".slider").slider();var t=$(".explain-content").data("device"),i=$(".explain-container").find("img").width(),a="1130px";"mobile"==t&&i>600&&768>=i?(a="1330px",e(a)):"mobile"==t&&i>414&&600>=i?(a="1090px",e(a)):"mobile"==t&&i>320&&414>=i?(a="910px",e(a)):"mobile"==t&&320>=i?(a="990px",e(a)):"mobile"==t&&i>768?e(a):"tablet"==t?(a="1080px",e(a)):"pc"==t?(a="810px",e(a)):e(a)}),$(".button-collapse").sideNav({edge:"right"}),function(e){e(document).ready(function(){e("select").material_select()})}(jQuery),$("form").on("submit",function(){if("GET"!=$(this).attr("method")){var e=$(this).find(".btn");$.each(e,function(){"submit"==$(this).attr("type")&&void 0==$(this).attr("name")&&$(this).attr("disabled","disabled").text("送信中...")})}}),$(document).ready(function(){$(".modal-trigger:not(.allow-auto-scroll-to-top)")[0]&&$("body").addClass("modal-open"),$(".modal-trigger").leanModal({opacity:.8})}),$(".alert i.close-alert").click(function(){$(this).parent(".alert").hide()}),$("#mobile-nav")[0]&&$(function(){var e=$("#mobile-nav"),t=e.offset().top,i=function(){$(window).scrollTop()>=t?$("#mobile-nav, .content-wrapper-for-mobile-nav").addClass("fixed"):$("#mobile-nav, .content-wrapper-for-mobile-nav").removeClass("fixed")};$(window).scroll(i),$("body").bind("touchmove",i)}),!function(e,t,i){var a,o=e.getElementsByTagName(t)[0],n=/^http:/.test(e.location)?"http":"https";e.getElementById(i)||(a=e.createElement(t),a.id=i,a.async=!0,a.src=n+"://platform.twitter.com/widgets.js",o.parentNode.insertBefore(a,o))}(document,"script","twitter-wjs"),function(e,t,i){var a,o=e.getElementsByTagName(t)[0];e.getElementById(i)||(a=e.createElement(t),a.id=i,a.async=!0,a.src="//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.4&appId=1412068989120518",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk");var ua=window.navigator.userAgent.toLowerCase();-1!=navigator.userAgent.indexOf("Safari")&&($("button.btn").removeClass("waves-effect"),$("a.btn").removeClass("waves-effect"),$("a.btn-floating").removeClass("waves-effect")),-1!=ua.indexOf("chrome")&&($("button.btn").addClass("waves-effect"),$("a.btn-floating:not(.circle a.btn-floating, a.btn-floating.no-waves-effect)").addClass("waves-effect"));var viewingHistories=$(".viewing-histories .each-content"),length=viewingHistories.length,offset=5,toggleTarget=viewingHistories.slice(offset,length);toggleTarget.hide(),offset>length&&$(".viewing-histories-show-more-btn").hide(),$(".viewing-histories-show-more-btn").click(function(){if($(".arrow").hasClass("rotate")){toggleTarget.slideUp();var e=$(this).html();$(this).html(e.replace(/閉じる/,"もっと見る")),$(this).find(".arrow").removeClass("rotate")}else{toggleTarget.slideDown();var e=$(this).html();$(this).html(e.replace(/もっと見る/,"閉じる")),$(this).find(".arrow").addClass("rotate")}})}$(function(){$(".category-search-open-button").on("click",function(){$(".category-search-toggle-wrapper ").fadeIn(500),postData()}),$(".category-search-close-button").on("click",function(){$(".category-search-toggle-wrapper ").css("display","none")})}),$(".filled-in").change(function(){postData()});var postData=function(){var e=$(".hit-number"),t=$(".ajax-hit-number"),i=$(".under-fixed-search-button-area .search-btn");t.text(e.text());var a=$("[name='free_word']").val(),o=[],n=[],s=[],r=[];$("[name='occupation[]']:checked").each(function(){r.push($(this).val())}),$("[name='area[]']:checked").each(function(){o.push($(this).val())}),$("[name='industry[]']:checked").each(function(){n.push($(this).val())}),$("[name='feature[]']:checked").each(function(){s.push($(this).val())}),$.ajax({type:"POST",url:"/intern-list/ajax-hit-number",dataType:"json",data:{free_words:a,occupations:r,areas:o,industries:n,features:s},success:function(e){0==e.ajaxHitNumber?i.attr("disabled","disabled").text("検索結果が0件です"):i.removeAttr("disabled","disabled").text("選択した条件で検索"),$({count:0}).animate({count:e.ajaxHitNumber},{duration:500,easing:"linear",progress:function(){t.text(Math.ceil(this.count))}})},error:function(){alert("通信エラーです。もう一度お試しください。")}})};$(document).ready(function(){$(".slider-wrap").css("display","block"),$(".popular-interns-slider").slick({nextArrow:'<div class="slick-next"><i class="material-icons">keyboard_arrow_right</i></div>',prevArrow:'<div class="slick-prev"><i class="material-icons">keyboard_arrow_left</i></div>',slidesToShow:3,slidesToScroll:3,dots:!0,infinite:!0,responsive:[{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"140px",dots:!1}}]}),$(".new-interns-slider").slick({nextArrow:'<div class="slick-next"><i class="material-icons">keyboard_arrow_right</i></div>',prevArrow:'<div class="slick-prev"><i class="material-icons">keyboard_arrow_left</i></div>',slidesToShow:3,slidesToScroll:3,dots:!0,infinite:!0,responsive:[{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"140px",dots:!1}}]})});