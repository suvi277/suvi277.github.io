document.querySelector(".main-title").addEventListener("click", function (evt) {
  var title = document.querySelector(".main-title"),
    love = document.querySelector(".love"),


  tl = new TimelineMax();
  tl_msgs = new TimelineMax();

  tl_msgs.to(love, 0.01 , {
    width: window.innerWidth,
    height: window.innerHeight
  });

  tl.to(title, 2, {
    width: window.innerWidth,
    ease: SlowMo.ease.config(0.7, 0.7, false),
    onReverseComplete: function(){
      scrollToMsgs();``
    }
  });

  tl.to(title, 2, {
    padding: "100% 0"
  });

  tl.to(title, 2, {
    text: "Here We Go!",
    fontSize: "4em",
    onComplete: function(){
      tl.reverse();
    }
  }, "+=0.2")

  function scrollToMsgs(){
    tl_msgs.to(window, 2, {
      scrollTo: love
    });
  }
});
