$(document).ready(function(){

  //section4-이미지롤링효과
  old = 0;
  num = 0;
  
  function paper(){
    num++;
    if (num>2) {
      num=0;
    }
    $(".section4 ul li").eq(old).stop().fadeOut(1000);
    $(".section4 ul li").eq(num).stop().fadeIn(1000);
    old=num;
  }
  setInterval(paper,3000);
  //pc-푸터패밀리사이트_____
  chk = true;
  
  $(".family_site dl dt").click(function () {
  
    if (chk) {
      $(".arrow").html("<span class='material-icons icon2'>arrow_drop_down</span>");
      $(".family_site dd ul").slideDown();
      chk = false;
    } else {
      $(".arrow").html("<span class='material-icons icon2'>arrow_drop_up</span>");
      $(".family_site dd ul").slideUp();
      chk = true;
    }
  
  });
  
  /* 모바일용 메뉴 버튼 */
  
  $(".M_view").css({"right":"-60%"});
  $(".close").hide();
  
  $(".mo_btn").click(function(){
    $(".M_view").stop(true, true).animate({"right":"0%"});
    $(".mo_btn img").hide();
    $(".close").show();
  });
  
  $(".close").click(function(){
    $(".M_view").stop(true,true).animate({"right":"-60%"});
    $(".close").hide();
    $(".mo_btn img").show();
  })
  });