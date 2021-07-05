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
});

// $(document).ready(function(){});
