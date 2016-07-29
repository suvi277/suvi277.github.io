var data = {
  friends: [{
      name: "Arihant",
      msg: "I'm Arihant"
  }, {
    name: "Neha",
    msg: "I'm Neha"
  },{
    name: "Sunil",
    msg: "I'm Sunil"
  }]
}


var names = $("#names").html(),
  messages = $("#messages").html();

var templateNames = Handlebars.compile(names),
  templateMessages = Handlebars.compile(messages);

$('.names-container').append(templateNames(data));
$('.messages-container').html(templateMessages({}));

$(".name").click(function(evt){
  var name = $(this).html();
  var selectedPerson = data.friends.filter(function(person){
    return person.name == name;
  });
  selectedPerson = selectedPerson[0];
  $('.messages-container').html(templateMessages(selectedPerson));
})
