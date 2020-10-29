const url = "https://api.github.com/users/";

var user;
$("#myForm").submit(function(event) {
    event.preventDefault();
    user= $(this).find('input[name="user"]').val();
    $.get(url+user, function(data,status){
      let stars = data.starred_url.substring(-1, url.length+user.length+8);
      let lastconnection = data.updated_at.substring(-1,10)+" "+data.updated_at.substring(11,19);
      $.get(stars, function(datastars,status){
        $('#table-user').html(
          `<thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Last Connectio</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Stars Gived</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="${data.avatar_url}" class="logo"></td>
            <td> ${data.name} </td>
            <td> ${lastconnection}</td>
            <td> ${data.followers} </td>
            <td> ${data.following} </td>
            <td> ${datastars.length} <i class="far fa-star"></i> </td>
          <tr>
        </tbody>`
          )
      })
    })
});
