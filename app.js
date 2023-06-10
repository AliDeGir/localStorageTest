function reGister() {
    nickOne = document.getElementById('nick').value;
    passOne = document.getElementById('code').value;

    localStorage.setItem('nick', nickOne);
    localStorage.setItem('pass', passOne);

    alert(nickOne + " " + passOne + " Saved!");
}

function isLocalStored() {
    let nick_name = localStorage.getItem("name");
    let pass_code = localStorage.getItem("pass");
    
    if (pass_code != null || pass_code != "") {
        document.getElementById('reg-btn').style.display= "none";
        alert("Welcome back!");
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