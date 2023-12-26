function useInfo() {
    let name = document.getElementById("userFullName").value;

    let phoneNumber = document.getElementById("userPhoneNumber").value;

    let mail = document.getElementById("userEmail").value;

    let message = document.getElementById("userMessage").value;

    let usera = {
        name, phoneNumber, mail, message
    };
    if (
        name == "" ||
        phoneNumber == "" ||
        mail == "" ||
        message == ""
    ) {
        alert("You are not admin");
    } else {
        fetch("https://658a0b57324d41715259b228.mockapi.io/UserInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usera),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
            const confirmed = document.getElementById("confirmed")
            confirmed.classList.remove("d-none");

            const unConfirmed = document.getElementById("unConfirmed");
            unConfirmed.classList.add("d-none");

            const unConfirmedBtn = document.getElementById("unConfirmedBtn");
            unConfirmedBtn.classList.add("d-none");

            const unConfirmedInput = document.getElementById("unConfirmedInput");
            unConfirmedInput.classList.add("d-none");
        }
}

async function getUser() {
    const response = await fetch(
        "https://658a0b57324d41715259b228.mockapi.io/UserInfo"
    );
    let content = await response.json();
    let list = document.querySelector(".InfoAbout");
    let key;
    for (key in content) {
        list.innerHTML += `
      <div class="card ">
      <h5 class="cardDopColor"><span class="cardMainTeg">id:</span> ${content[key].id}</h5>
      <h5 class="cardDopColor"><span class="cardMainTeg">Ім'я:</span> ${content[key].name}</h5>    
      <h5 class="cardDopColor"><span class="cardMainTeg">Прізвище:</span> ${content[key].phoneNumber}</h5>
      <h5 class="cardDopColor"><span class="cardMainTeg">Mail:</span> ${content[key].mail}</h5>  
      <h5 class="cardDopColor"><span class="cardMainTeg">Повідомлення:</span> ${content[key].message}</h5>
    </div>
      `;
    }
}
getUser();

function adminLogin() {
    let userLogin = document.getElementById("getLogin").value;
    let userPassword = document.getElementById("getPassword").value;
    let adminName = "admin";
    let adminPassword = "admin"    
    if (userLogin == adminName && userPassword == adminPassword) {
        window.location.href = 'admin.html';
    } else {
        alert("You are not admin")
    }
}


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})