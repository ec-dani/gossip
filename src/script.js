const url = "https://api.github.com/users/";
//const user ="Pochu15"
//const sub = url.length+user.length;
//console.log(url+user,"sub "+sub);

/*$(function(){
  $("#user").click(function(){
    console.log(document.querySelector("#user").value);
    $.get(url+user, function(data,status){
      console.log(data.login)
      console.log(data.avatar_url)
      console.log(data.followers)
      console.log(data.following)
      console.log(data.starred_url)
      let stars = data.starred_url.substring(-1, url.length+user.length+8);
      console.log(stars);
      $.get(stars, function(datastars,status){
        console.log(datastars.length);
      })
    })
  });
});*/

var user;
$("#myForm").submit(function(event) {
    event.preventDefault();
    user= $(this).find('input[name="user"]').val();
    console.log(user);
    $.get(url+user, function(data,status){
      console.log(data.login)
      console.log(data.avatar_url)
      console.log(data.followers)
      console.log(data.following)
      console.log(data.starred_url)
      let stars = data.starred_url.substring(-1, url.length+user.length+8);
      console.log(stars);
      $.get(stars, function(datastars,status){
        console.log("Estrellas: "+datastars.length);
      })
    })
});


/*
https://api.github.com/users/Pochu15
Following
https://api.github.com/users/Pochu15/following
Followers
https://api.github.com/users/Pochu15/followers
Avatar
avatar_url,
Stars, del 0 al 7 
https://api.github.com/users/Pochu15/starred
*/