$(function(){
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
    // let burgerarray = [];
    // let newBurger = $("#burger_name").val().trim();
    // let burgersHere = $(".burgers-here");
    // let burgerdiv = $("<div>").addClass("burgerdiv");
    // let name = $("<h1>");
    // let burgerbutton = $("<button>").addClass("devour");
    // name.text(newBurger);
    // burgerbutton.text("Devour Now?")

    // console.log(newBurger);

    // burgerdiv.append(name, burgerbutton);
    // burgerarray.push(newBurger);
    // console.log(burgerarray);
    // burgersHere.append(burgerdiv);

    // let burgerBuild = {
    //     burger_name: $("#burger_name").val().trim(),
    //     devoured : 0
    // }

    // $.post("/api/burgers", burgerBuild)
    //     .then(function (data) {
    //         console.log(data);
    //     })
    // $("#burger_name").val("");
})

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
//     var newdevoured = $(this).data("1");

//     var Eaten = {
//       devoured: newdevoured
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: Eaten
//     }).then(
//       function() {
//         console.log("changed devoured to", newdevoured);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );

})

});

