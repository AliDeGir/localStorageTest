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
    
}

function checkLocal() {
    credTwo = localStorage.getItem('passwordOne');
    alert("Hello");
    alert(credOne);

    if (document.getElementById('pass').value === credTwo) {
        alert("Password match");
    }
}

function clearButton() {
    localStorage.clear();

    alert("Local storage cleared!")
}