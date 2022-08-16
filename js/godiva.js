(($)=>{
  class Godiva {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.goTop();
    }
    header(){
      $('.main-btn').on({
        mouseenter:function(){
          $('.sub').stop().fadeOut(0);
          $(this).next().stop().fadeIn(300);
        },
        focusin:function(){
          $('.sub').stop().fadeOut(0);
          $(this).next().stop().fadeIn(300);
        }
      });

      $('#nav').on({
        mouseleave:function(){
          $('.sub').stop().slideUp(500);
        }
      });

      $('.menu-bar-box').on({
        click:function(e){
          e.preventDefault();
          $('.all-menu').stop().slideToggle(500);
        }
      });
    }
    section1(){
      let cnt=0;
      let setId=0;
      let setId2=0;
      let winW=$(window).width();

      $(window).resize(function(){
        winW=$(window).width();
        mainSlide();
        return winW;
      });

      //1. 메인 슬라이드 함수
      function mainSlide(){
        $('#section1 .slide-wrap').stop().animate({left:-winW*cnt},600,function(){
          cnt<0?cnt=2:cnt;
          cnt>2?cnt=0:cnt;
          $('#section1 .slide-wrap').stop().animate({left:-winW*cnt},0);
        })
        pageBtn();
      }

      //2-1. 다음 카운트 함수
      function nextCount(){
        cnt++;
        mainSlide();
      }

      //2-2. 이전 카운트 함수
      function prevCount(){
        cnt--;
        mainSlide();
      }

      //3. 자동 타이머 함수
      function autoTimer(){
        setId=setInterval(nextCount,3000);
      }
      autoTimer();

      //다음 버튼 이벤트
      $('.next-btn').click(function(){
        if($('#section1 .slide-wrap').is(':animated'))
        return;
        pausefn();
        nextCount();
      })
      $('.prev-btn').click(function(){
        pausefn();
        prevCount();
      })

      //5.페이지 버튼 함수 이벤트
      function pageBtn(){
        $('.page-btn').removeClass('on');
        $('.page-btn').eq(cnt>2?0:cnt).addClass('on');
      }

      //6.페이지 버튼 클릭 이벤트
      $('.page-btn').each(function(idx){
        $(this).click(function(){
          pausefn();
          cnt=idx;
          mainSlide();
        })
      })

      //7.정지버튼 이벤트
      $('.pause-btn').click(function(){
        if($(this).children().hasClass('fa-pause')){
          clearInterval(setId);
          $('.pause-btn').children().attr('class','fa fa-play');
        }
        else{
          autoTimer();
          $('.pause-btn').children().attr('class','fa fa-pause');
        }
      })

      //정지함수
      function pausefn(){
        clearInterval(setId);
        clearInterval(setId2);
        $('.pause-btn').children().attr('class','fa fa-play');

        let cnt2=0;
        setId2=setInterval(function(){
          cnt2++;
          if(cnt2>2){
            clearInterval(setId2);
            playfn()
          }
        },1000);
      }

      function playfn(){
        autoTimer();
        $('.pause-btn').children().attr('class','fa fa-pause');
      }
    }
    section2(){
      let sec2Top=$('#section2').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section2').removeClass('sec2Ani');
        }
        if($(window).scrollTop()>sec2Top){
          $('#section2').addClass('sec2Ani');
        }
      });
    }
    section3(){
      let sec3Top=$('#section3').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section3').removeClass('sec3Ani');
        }
        if($(window).scrollTop()>sec3Top){
          $('#section3').addClass('sec3Ani');
        }
      });

      $('.first').on({
        click:function(e){
          e.preventDefault();
          $(this).addClass('on');
          $('.firstBox').fadeIn(300);

          $('.secondBox').hide();
          $('.thirdBox').hide();
          $('.fourthBox').hide();
          $('.fifthBox').hide();

          $('.second').removeClass('on');
          $('.third').removeClass('on');
          $('.fourth').removeClass('on');
          $('.fifth').removeClass('on');
        }
      });

      $('.second').on({
        click:function(e){
          e.preventDefault();
          $(this).addClass('on');
          $('.secondBox').fadeIn(300);
          
          $('.firstBox').hide();
          $('.thirdBox').hide();
          $('.fourthBox').hide();
          $('.fifthBox').hide();

          $('.first').removeClass('on');
          $('.third').removeClass('on');
          $('.fourth').removeClass('on');
          $('.fifth').removeClass('on');
        }
      });

      $('.third').on({
        click:function(e){
          e.preventDefault();
          $(this).addClass('on');
          $('.thirdBox').fadeIn(300);

          $('.firstBox').hide();
          $('.secondBox').hide();
          $('.fourthBox').hide();
          $('.fifthBox').hide();

          $('.first').removeClass('on');
          $('.second').removeClass('on');
          $('.fourth').removeClass('on');
          $('.fifth').removeClass('on');
        }
      });

      $('.fourth').on({
        click:function(e){
          e.preventDefault();
          $(this).addClass('on');
          $('.fourthBox').fadeIn(300);

          $('.firstBox').hide();
          $('.secondBox').hide();
          $('.thirdBox').hide();
          $('.fifthBox').hide();

          $('.first').removeClass('on');
          $('.second').removeClass('on');
          $('.third').removeClass('on');
          $('.fifth').removeClass('on');
        }
      });

      $('.fifth').on({
        click:function(e){
          e.preventDefault();
          $(this).addClass('on');
          $('.fifthBox').fadeIn(300);

          $('.firstBox').hide();
          $('.secondBox').hide();
          $('.thirdBox').hide();
          $('.fourthBox').hide();

          $('.first').removeClass('on');
          $('.second').removeClass('on');
          $('.third').removeClass('on');
          $('.fourth').removeClass('on');
        }
      });
    }
    section4(){
      let sec4Top=$('#section4').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section4').removeClass('sec4Ani');
        }
        if($(window).scrollTop()>sec4Top){
          $('#section4').addClass('sec4Ani');
        }
      });
    }
    section5(){
      let cnt = 0;
      
      let slideW = $('#section5 .slide-container .slide').width();

      resizeSlide();

      function resizeSlide(){
        slideW = $('#section5 .slide-container .slide').width();
        sec5MainSlide();
      }

      $(window).resize(function(){
        resizeSlide();
      });
    
      function sec5MainSlide(){
        $('#section5 .slide-wrap').stop().animate({left:-slideW*cnt},600,function(){
          cnt<0?cnt=5:cnt;
          cnt>5?cnt=0:cnt;
          $('#section5 .slide-wrap').stop().animate({left:-slideW*cnt},0)
        })
      }

      function sec5NextCount(){
        cnt++;
        sec5MainSlide();
      }

      function sec5PrevCount(){
        cnt--;
        sec5MainSlide();
      }

      $('.sec5-prev-btn').on({
        click:function(e){
          e.preventDefault();
          if(!$('#section5 .slide-wrap').is(':animated')){
            sec5PrevCount();
            return;
          }
        }
      });

      $('.sec5-next-btn').on({
        click:function(e){
          e.preventDefault();
          if(!$('#section5 .slide-wrap').is(':animated')){
            sec5NextCount();
            return;
          }
        }
      });

      let sec5Top=$('#section5').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section5').removeClass('sec5Ani');
        }
        if($(window).scrollTop()>sec5Top){
          $('#section5').addClass('sec5Ani');
        }
      });
    }
    section6(){
      let sec6Top=$('#section6').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section6').removeClass('sec6Ani');
        }
        if($(window).scrollTop()>sec6Top){
          $('#section6').addClass('sec6Ani');
        }
      });
    }
    goTop(){
      $(window).scroll(function(){
        if($(window).scrollTop()>100){
          $('#goTop').stop().fadeIn(1000);
        }
        else {
          $('#goTop').stop().fadeOut(1000);
        }
      });

      $('.goTop-btn').on({
        click:function(){
          $('html,body').stop().animate({scrollTop:0},500);
        }
      });
    }
  }
  const newGodiva = new Godiva();
  newGodiva.init();
})(jQuery);