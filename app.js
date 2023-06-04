function reGister() {
    nickOne = document.getElementById('nick').value;
    passOne = document.getElementById('pass').value;

    localStorage.setItem('passwordOne', passOne);

    alert("Saved!");
}

function getInfo() {
    nickName = document.getElementById('nick').value;
    passWord = document.getElementById('pass').value;
    alert(nickName + " " + passWord);
    
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
}