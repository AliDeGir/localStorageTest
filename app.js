function reGister() {
    nickOne = document.getElementById('nick').value;
    passOne = document.getElementById('pass').value;

    localStorage.setItem('nickOne', nickOne);
    localStorage.setItem('passwordOne', passOne);

    alert(nickOne + " " + passOne + "Saved!");
}

function getInfo() {
    nickName = document.getElementById('nick').value;
    passWord = document.getElementById('pass').value;
    alert("info found in local storage " + nickName + " " + passWord);
    
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