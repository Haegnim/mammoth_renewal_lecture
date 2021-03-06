$(function () {
  // mega box menu show when hover navigation
  $(".topnav, .hidden_sub").on("mouseenter", function () {
    $(".hidden_sub").css({ display: "block" });
    $(".topnav li a").css({ color: "#000" });
    $(".hidden_sub").stop().animate({ height: "485px" }, 300);
  });
  $(".topnav, .hidden_sub").on("mouseleave", function () {
    $(".hidden_sub")
      .stop()
      .animate({ height: 0 }, 300, function () {
        $(".topnav li a").css({ color: "#fff" });
        $(".hidden_sub").css({ display: "none" });
      });
    //콜백함수 사용
  });

  // sub mega box menu hide and show
  $(".topnav li").on("mouseenter", function () {
    const i = $(this).index();
    $(".subnav_box").hide();
    $(".subnav_box").eq(i).show();
  });

  //mobile menu animation effect
  $(".menu_icon").hover(function () {
    $(this).toggleClass("active");
  });
  //mobile menu click effect
  $(".menu_icon, .overlay").click(function () {
    $(".mobile_nav").animate({ left: 0 }, 300);
    $(".section").animate({ left: "60%" }, 300);
    $(".overlay").css(
      {
        opacity: 0.7,
        left: "60%",
        width: "100%",
      },
      300
    );
  });

  $(".close_btn, .overlay").click(function () {
    $(".mobile_nav").animate({ left: "-60%" }, 300);
    $(".section").animate({ left: 0 }, 300);
    $(".overlay").animate({ opacity: 0 }, 300);
    $(".overlay").css(
      {
        opacity: 0,
        left: 0,
        width: 0,
      },
      300
    );
  });

  //mobile menu animation effect

  // mobile menu accordion effect
  $(".mobile_tit").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).removeClass("rotate");
      $(this).siblings(".mobile_sub_nav").slideUp(200);
    } else {
      $(".mobile_tit").removeClass("active");
      $(".mobile_sub_nav").slideUp(200);
      $(".mobile_tit").removeClass("rotate");

      $(this).addClass("active");
      $(this).siblings(".mobile_sub_nav").slideDown(200);
      $(this).addClass("rotate");
    }
  });

  //slide funtions
  function resSize(autoLength) {
    const liWidth = $(".slide_li").width() * autoLength;
    const liLength = $(".slide_li").width() * $(".slide_li").length;
    $(".slide_box, .slides").width(liWidth);
    $(".slide_inner").width(liLength);
  }

  $(window).resize(function () {
    const wWidth = $(window).width();
    if (wWidth >= 700) {
      resSize(3);
    } else if (wWidth < 700) {
      resSize(2);
    }
  });

  if (matchMedia("screen and (min-width:900px)").matches) {
    resSize(3);
  } else if (matchMedia("screen and (max-width:899px)").matches) {
    resSize(2);
  }

  function slideInit() {
    let slideCount = 0;
    const liWidth = $(".slide_li").width();
    const slideSize = $(".slide_box").width() / $(".slide_li").width();
    const slideLength = $(".slide_li").length - slideSize;
    //console.log(slideLength);
    //console.log(slideSize);

    $(".arr_next").click(function () {
      slideCount++;
      if (slideCount > slideLength) {
        slideCount = 0;
        // slideCount = slideCount % slideLength;
      }
      $(".slide_inner")
        .stop()
        .animate({ "margin-left": slideCount * -liWidth }, 250);
    });
    $(".arr_prev").click(function () {
      slideCount--;
      if (slideCount < 0) {
        slideCount = slideLength;
        // slideCount = slideCount % slideLength;
      }
      $(".slide_inner")
        .stop()
        .animate({ "margin-left": slideCount * -liWidth }, 250);
    });
  }
  $(window).resize(function () {
    $(".slide_inner").stop().animate({ "margin-left": 0 }, 100);
    slideInit();
  });
  slideInit();
});
