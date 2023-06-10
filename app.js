function loggingIn() {
    fulName = document.querySelector(".name").value;
    fulPassword = document.getElementById("passInput").value;

    if (fulName.length < 3) {
        fulName = null
    }

    if (fulName == "" || fulName == null) {
        alert("Either empty or null")
    } else {
        alert("Welcome " + fulName);
        numberOfPassword = fulPassword.length;

        if (numberOfPassword != 6) {
            alert("not correct amount of passcode digits!")
        } else {
            storedName = localStorage.getItem('name');
            storedPass = localStorage.getItem('pass');

            if (fulPassword === storedPass) {
                document.getElementById('visibleDiv').style.background="yellow";
                document.getElementById('hiddenDiv').style.display="flex";
                document.getElementById('loginDiv').style.display="none";
            } else {
                alert("No match found!");
            }
        }
    }

    document.getElementById('nameInput').value="";
    document.getElementById('passInput').value="";
}

function newMember() {
    fulName = document.querySelector(".name").value;
    fulPassword = document.getElementById("passInput").value;

    numberOfPassword = fulPassword.length;

    if (fulName.length < 3) {
        fulName = null;
    }

    if (fulName != "" || fulName != null) {
        if (numberOfPassword == 6) {
            alert(fulName + ", your credentials has been stored!")
            localStorage.setItem('name', fulName);
            localStorage.setItem('pass', fulPassword);
        } else {
            alert("Enter right amount of digits!")
        }
    } else {
        alert("Nickname field empty of not enough characters!")
    }

    document.getElementById('nameInput').value="";
    document.getElementById('passInput').value="";
}

function clearCache() {
    localStorage.clear();
    alert("Local storage cleared!")
}

function pageOnload() {
    storedName = localStorage.getItem('name');
    storedPass = localStorage.getItem('pass');

    fulPassword = document.getElementById("passInput").value;

    if (storedPass != "" || storedPass != null) {
        document.getElementById('registerButton').style.display="none"
    }
}