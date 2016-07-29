(function(window, $){
  var data = {
    friends: [{
        name: "Mayur",
        msg: "First of all my heartiest congratulations for the new amazing opportunity, you truly deserve it. You surely will be an asset wherever you go. Good luck for this journey that awaits. Now also a big thank you for always being so helpful when we were in need. I kmow I pestered you with stupid questions and you always found time to answer them with a smile on your face. Not to forget the fun we had together during our time together in Bangalore. IEA will miss you. I will miss you. Keep in touch."
    }, {
      name: "Vidhya",
      msg: "Suvarna has very good working experience on all Front End IEA tracks and her contributions in giving KT to the new joiners, expertise in solving all the critical issues are commendable. Suvarna can work on any tight timelines without compromising the quality of the work.  Her excellent IEA domain knowledge helped the entire FE team to resolve so many critical issues. She is  the friendliest person to everyone in IEA. All PMs know one person to reach out, when they want to solve any critical issues and that person’s name is Suvarna."
    },{
      name: "Rishabh",
      msg: "Suvarna has always been a great mentor, friend and inspiration. Right from the start she has always been there for us all in the team. Thanks Suvarna, for all what you’ve done for us. All of us are really going to miss you. All the best for your future endeavors"
    }, {
      name: "Anooj",
      msg: "You proved to many of us, including myself that it’s not necessary to know every technology to be a good programmer, but open mindness, a will to learn and hard work can make us better one. I still remember the old you saying “I don’t know much about it but I am a good learner and I can lean it fast” and you are right, you are a good learner and a good programmer. You are one of the most dedicated developer I have met. Your contribution and helping hand to IEA has definitely made the product much better. IEA (and me) will miss you badly"
    },{
      name: "Haritha",
      msg: "All the very best for your future, not only in work but in every aspect in your life. Even though, it been a less time  working together but in such a short time your dedication and ownership does a lot of speaking about you and your work."
    }, {
      name: "Arihant",
      msg: "Right from the start, when you and Surbhi came to our help during the training in Project Tracker, the code reviews that you gave was the starting of my looking for excellence in writting good code. More than anything, I've learnt from you the joy of puns, sharing and laughing with the team, and working as if it was a party. The little conversations that I'd with you, over a short period of time, will always be a stubborn part of my learning. You're an excellent listener and very good teacher ( once explained from you, one wouldn't ever forget a thing ). Thank you for all your help, support, guidance, all the very best. May your ways be auspicious"
    },{
      name: "Pinky",
      msg: "All the very best to you! Will miss you very badly. Suvarna, you have been a very good friend cum colleague of mine. Working with you was really enjoyable. Thank you for all your help and support. I have never seen you impatient towards your work. Your debugging skills are awesome. I have learnt a lot from you and would love to work again in future. Will miss all the chit chats we use to have."
    },{
      name: "Surbhi",
      msg: "Life is about cherishing the past ( working with you has made everyday a blast, my rockstar, I miss you a lot), facing the present and moving towards new milestones. I wish you all the best with your endeavors and may everything comes out in your favor, everywhere you go everything you do, may lady luck smiles down at you. Good luck"
    }]
  }


  var names = $("#names").html(),
    messages = $("#messages").html();

  var templateNames = Handlebars.compile(names),
    templateMessages = Handlebars.compile(messages);

  $('.names-container').append(templateNames(data));
  $('.messages-container').html(templateMessages({}));

  $(".name").click(function(evt){
    // $(".name").removeClass("active");
    // $(this).toggleClass("active");
    var name = $(this).html();
    console.log(name);
    var selectedPerson = data.friends.filter(function(person){
      return person.name == name;
    });
    selectedPerson = selectedPerson[0];
    $('.messages-container').html(templateMessages(selectedPerson));
  })

})(window, jQuery);
