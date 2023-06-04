function getInfo() {
    nickName = document.getElementById('nick').value;
    passWord = document.getElementById('pass').value;
    document.getElementById('log-btn').style.background= "red";
    alert(nickName + " " + passWord);
}

function reGister() {
    nickOne = document.getElementById('nick').value;
    passOne = document.getElementById('pass').value;

    localStorage.setItem(nickOne, passOne);

    alert("Saved!");
}

function checkLocal() {
    credOne = localStorage.getItem(nickOne);
    credTwo = localStorage.getItem(passOne);
    alert("Helo");
    alert(credOne);

    // if (getElementById('pass').value === credTwo) {
    //     alert("Correct password!")
    // }
}