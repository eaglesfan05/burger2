$(function(){
$("#add-burger").on("click", function (event) {
    
    console.log("clicked");
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger_name").val().trim()
    };

    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function(){
        console.log("created new burger");

        // location.reload();
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

// $(".devour").on("click", function(event){
//     event.preventDefault();
//     var id = $(this).data("id");
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

// })

});

