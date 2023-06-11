const employeeNr = [
    701453731, 701507163, 701404090, 701402078, 701670115, 
    701652729, 701430686, 701479498, 701630854, 701616623, 
    701670346, 701406191, 701420502, 701545902, 701572269, 
    701652705, 701660978, 701387056, 701493331, 701560865, 
    701669374, 701519533, 701506379, 701535342, 701446851, 
    701404477, 701556360, 701519679, 701519535, 701514112, 
    701443922, 701556355, 701649475, 701537676, 701656135, 
    701479876, 701518246, 701401775, 701540993, 701622446, 
    701661774, 701534887, 701620607, 701424067, 701402434, 
    701466553, 701401976, 701458552, 701662760, 701554777, 
    701532255, 701473258, 701450718, 701664788, 701519955, 
    701667069, 701550587, 701470181, 701631204
];

function logIn() {
    testPass = document.getElementById('passInput').value;
    testName = document.getElementById("nameInput").value;
    testPassNr = Number(testPass);

    if (testName.length < 3) {
        alert("Use 3 or more characters!");
    } else {
        if (testPass.length != 9) {
            alert("This code requires 9 digits");
        } else {
            if (employeeNr.includes(testPassNr)) {
                alert("Welcome " + testName + " :)");
                document.getElementById('visibleDiv').style.background="yellow";
                document.getElementById('hiddenDiv').style.display="flex";
                document.getElementById('loginDiv').style.display="none";

                if (localStorage.getItem('pass') != null) {
                    localStorage.setItem('name', testName);
                    localStorage.setItem('pass', testPassNr);
                }
                
            } else {
                alert("No match found");
                localStorage.clear();
            }
        }
    }

    document.getElementById('nameInput').value="";
    document.getElementById('passInput').value="";

}