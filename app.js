function getInfo() {
    nickName = document.getElementById('nick').value;
    passWord = document.getElementById('pass').value;
    document.getElementById('log-btn').style.background= "red";
    alert(nickName + " " + passWord);
}

function reGister() {
    nickOne = document.getElementById('nick').value;
    passOne = document.getElementById('pass').value;

    localStorage.setItem('passwordOne', passOne);

    alert("Saved!");
}

function checkLocal() {
    credOne = localStorage.getItem('passwordOne');
    alert("Hello");
    alert(credOne);

    // if (getElementById('pass').value === credTwo) {
    //     alert("Correct password!")
    // }
}