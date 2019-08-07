$("button").click(function(e) {
  e.preventDefault();
  let newAdd = $("#add").val();
  let newSpan1 = "<span>" + newAdd + "</span>";
  let newSpan2 = '<span class="delete">delete</span>';
  let newList = $("<li>" + newSpan1 + newSpan2 + "</li>");
  $("ul").append(newList);
  $("#add").val("");
});

$(".delete").on("click", function() {
  $(this)
    .parent("li")
    .remove();
});

$("#search-topics").on("keyup", function() {
  let value = $("input").val().toLowerCase();
  $("li").filter(function() {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
});



 
$('li:even').css('background-color','#eeeeee');