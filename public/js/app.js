$(function(){

  //adds new burger and button//
$("#add-burger").on("click", function (event) {
    
    console.log("clicked");
    event.preventDefault();
    
    var id = $(this).data("id");
    let newBurger = {
      id : id,
      burger_name: $("#burger_name").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger, id
    }).then(
      function(){
        console.log("created new burger");
        location.reload();    
      }
    )
})
// onclick change devoured to true move to devoured div//
$(".devoured").on("click", function(event){
  console.log("eat it up")
    event.preventDefault();

    var newdevoured = {
      devoured: 1
    }
    var id = $(this).attr("data-burgerid");
    console.log(id)

    $.ajax("api/burger/" + id , {
      type: "PUT",
      data: newdevoured
    }).then(function(){
      console.log("updated to devoured")
      location.reload();
    })
   
})

//deletes all burgers from database//
$("#deleteburger").on("click", function(event){
  event.preventDefault();
  $.ajax({
    url:"/api/burger/delete",
    method: "DELETE"
  }).then(function(){
   
    location.reload();
  })
})


});

