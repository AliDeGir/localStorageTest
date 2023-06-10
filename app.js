function reGister() {
    nickOne = document.getElementById('nick').value;
    passOne = document.getElementById('code').value;

    localStorage.setItem('nick', nickOne);
    localStorage.setItem('pass', passOne);

    alert(nickOne + " " + passOne + " Saved!");
}

function isLocalStored() {
    let nickName = localStorage.getItem("name");
    let passCode = localStorage.getItem("pass");
    
    if (passCode != null || passCode != "") {
        document.getElementById('reg-btn').style.display= "none";
        alert("Welcome back! " + nickName);
    } else {
        alert("Please register!")
    }
    
}

function toLogin() {
    credTwo = localStorage.getItem('pass');

    if (document.getElementById('code').value === credTwo) {
        alert("Password match");
        document.getElementsById('divToHide').style.display= "grid"
    } else {
        alert("No match found!")
    }
}

function clearButton() {
    localStorage.clear();

    alert("Local storage cleared!")
}

function getLocalStorage() {
    let info1 = localStorage.getItem('nick');
    let info2 = localStorage.getItem('pass');

    alert(info1 + " " + info2);
}