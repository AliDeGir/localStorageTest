function reGister() {
    nickOne = document.getElementById('nick').value;
    passOne = document.getElementById('code').value;

    localStorage.setItem('name', nickOne);
    localStorage.setItem('pass', passOne);

    alert(nickOne + " " + passOne + "Saved!");
}

function getInfo() {
    let nick_name = localStorage.getItem("name");
    let pass_code = localStorage.getItem("pass");
    
    alert("info found in local storage " + nick_name + " " + pass_code);

    if (pass_code != "") {
        document.getElementById('reg-btn').style.display= "none";
    }
    
}

function checkLocal() {
    credTwo = localStorage.getItem('pass');

    if (document.getElementById('code').value === credTwo) {
        alert("Password match");
        document.getElementsById('hidden-div').style.display= "grid"
    }
}

function clearButton() {
    localStorage.clear();

    alert("Local storage cleared!")
}