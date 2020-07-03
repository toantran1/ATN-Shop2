
    

function view(id, user, pass, permis, name, birh, address, sex, phone, email, cnid)
{
    var usernamev = document.getElementById("username");
    var passv = document.getElementById("password");
    var permisv = document.getElementById("permission");
    var namev = document.getElementById("Fullname");
    var birhtv = document.getElementById("DateOfBirth");
    var addressv = document.getElementById("Address");
    var sexv = document.getElementById("sex");
    var phonev = document.getElementById("Phone");
    var emailv = document.getElementById("Email");
    var cnidv = document.getElementById("CN_id");

    
    usernamev.value = user;
    passv.value = pass;
    permisv.value = permis;
    namev.value = name;
    birhtv.value = birh;
    addressv.value = address;
    sexv.value = sex;
    phonev.value = phone;
    emailv.value = email;
    cnidv.value = cnid;

    
}

