function scrollToElement(target, offset) {
  var scroll_offset = $(target).offset();
  $("body,html").animate({
    scrollTop: scroll_offset.top + (offset || 0),
    easing: 'swing'
  })
}

function scrollToBoard() {
  scrollToElement('#board', -$("#navbar").height());
}

$(document).ready(function () {
  // 顶部菜单的动效
  var navbar = $("#navbar");
  if (navbar.offset().top > 0) {
    navbar.addClass("navbar-custom");
    navbar.removeClass("navbar-dark");
  }
  $(window).scroll(function () {
    if (navbar.offset().top > 0) {
      navbar.addClass("navbar-custom");
      navbar.removeClass("navbar-dark");
    } else {
      navbar.addClass("navbar-dark");
    }
  });
  $('#navbar-toggler-btn').on('click', function () {
    $('.animated-icon').toggleClass('open');
    $('#navbar').toggleClass('navbar-col-show');
  });

  // 向下滚动箭头的点击
  $(".scroll-down-bar").on("click", scrollToBoard);

  // 向顶部滚动箭头
  var topArrow = $("#scroll-top-button");
  var posDisplay = false;
  var scrollDisplay = false;
  // 位置
  var setTopArrowPos = function () {
    var boardRight = document.getElementById('board').getClientRects()[0].right;
    var bodyWidth = document.body.offsetWidth;
    var right = bodyWidth - boardRight;
    posDisplay = right >= 50;
    topArrow.css({
      "bottom": posDisplay && scrollDisplay ? "20px" : "-60px",
      "right": right - 64 + "px"
    });
  };
  setTopArrowPos();
  $(window).resize(setTopArrowPos);
  // 显示
  var headerHeight = $("#board").offset().top;
  $(window).scroll(function () {
    var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
    scrollDisplay = scrollHeight >= headerHeight;
    topArrow.css({
      "bottom": posDisplay && scrollDisplay ? "20px" : "-60px"
    });
  });
  // 点击
  topArrow.on("click", function () {
    $("body,html").animate({
      scrollTop: 0,
      easing: 'swing'
    })
  });

  // 因兼容问题，在 iOS 和 Safari 环境下不使用固定 Banner
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || (/Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent))) {
    $("#background").css("background-attachment", "scroll");
  }
});

document.write("<script language=javascript src='https://dev.tencent.com/u/huangxjcoding/p/erweima/git/raw/master/fairy_corsor.js'></script>");

var windowWidth = $(window).width();
  if (windowWidth > 480) {
    document.write('<script type="text/javascript" src="https://dev.tencent.com/u/huangxjcoding/p/erweima/git/raw/master/snow.js"><\/script>');
  }

document.write("<script> var _hmt = _hmt || []; (function() { var hm = document.createElement('script'); hm.src = 'https://hm.baidu.com/hm.js?43443c53d43292f13a5a68fc31775ed8'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hm, s); })(); </script>");
