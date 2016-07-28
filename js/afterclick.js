document.querySelector(".main-title").addEventListener("click", function (evt) {

  var title = document.querySelector(".main-title"),
    messagesContainer = document.querySelector(".messages-container");

  tl = new TimelineMax();
  tl_msgs = new TimelineMax();

  tl.to(title, 1, {
    width: window.innerWidth
  });

  tl.to(title, 2, {
    padding: "100% 0"
  });

  tl.to(title, 0, {
    text: "",
    onComplete: function(){
      tl.reverse();
      scrollToMsgs();
    }
  });

  function scrollToMsgs(){
    tl_msgs.to(messagesContainer, 0 , {
      width: window.innerWidth,
      height: window.innerHeight
    });

    tl_msgs.to(window, 2, {
      scrollTo: messagesContainer
    });
  }
});
