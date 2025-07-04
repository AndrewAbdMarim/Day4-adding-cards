        let BoxJs = document.getElementById("BoxJs");
        let contct_flex = document.getElementById("contct-flex");
        let Shopping = document.getElementById("Shopping");
        let Verification = document.getElementById("Verification");
        let AddList = document.getElementById("Add-List");
        let list = document.getElementById("list");
        let itemContenr = document.getElementById("itemContenr");
        let OnDletUl11 = document.getElementById("OnDletUl11");
        let valuee = document.getElementById("valuee");

        let namee = ``;
        let age = 0;
        let statust = Boolean;
        let Birth = "";
        let cartoon = ``;

        function onClkBox() {
            let cartoon = ``;
            namee = prompt("Entr Your Name:");
            age = prompt("Entr Your Age:");
            statust = confirm("Are you a developer?");
            if (statust) {
                Birth = "developer";
            } else {
                Birth = " not developer";
            }

            cartoon = `<div class="boxJs"><h2>${namee}</h2><p>Age:${age}</p><p>Status:${Birth}</p><p>Birth Your:${2025 - age}</p></div>`;
            BoxJs.innerHTML = cartoon;

        }

        function onShopping() {
            let cartoon = ``;
            let subtotal = 2397.00;
            let Tax = 2397.00 * 8 / 100;

            cartoon = `<div class="boxJs"><p>Subtotal: $${subtotal}</p><p>Tax (8%): $${Tax}</p><p>Total: $${subtotal + Tax}</p></div>`;
            Shopping.innerHTML = cartoon;
        }

        function DarkMode() {
            if (contct_flex.style.color == "white") {
                contct_flex.style.backgroundColor = "white";
                contct_flex.style.color = "black";
            } else {
                contct_flex.style.backgroundColor = "#414446";
                contct_flex.style.color = "white";
            }
        }

        function OnVenify() {
            let cartoon = ``;
            let Access = "";
            let Welcome = "";
            let vlu = document.getElementById("value");

            if (vlu.value > 18) {
                Access = '<p style="color: green;" >Access granted</p>';
                Welcome = 'Welcome to our service!';
            } else {
                Access = '<p  style="color: red;" >not granted</p>';
                Welcome = 'not our service!';
            }

            cartoon = `<div class="boxJs">${Access}<p>${Welcome}</p></div>`;
            Verification.innerHTML = cartoon;

        }

        function OnAddList() {
            let valu = valuee.value;
            cartoon += `<div>${valu} <button id="OnDletUl11" onclick="OnDletUl()" style="color: #fff; background-color: red;" ><i class="fas fa-times"></i></button></div>`;
            AddList.innerHTML = cartoon;
            document.getElementById("valuee").value = "";
        }

        // function OnAddUl() {
        //     let thelist = prompt("اكتب عنصر جديد")
        //     let nawItem = document.createElement("li");
        //     nawItem.textContent = `${thelist}`;
        //     list.appendChild(nawItem)
        // }

        function OnDletUl() {
            let listdlet = AddList.lastElementChild;
            listdlet.remove();
        }

        function OnAddUl1() {
            let thelistName = prompt("Type Name")
            let thelistGop = prompt("Type Gop")

            cartoon = `<div class="contenr">
                <div class="contenr-img">
                    <img src="img/FB_IMG_1674517363675_٠٤١٣٤٤.jpg" alt="">
                </div>
                <div class="contenr-p">
                    <h2>${thelistName}</h2>
                    <h3>${thelistGop}</h3>
                    <p>Specialized in user experience and interface design. Works on improving user experience and
                        making applications more user-friendly</p>
                    <div class="Skills">
                        <div>Figma</div>
                        <div>UI Design</div>
                        <div>UX Research</div>
                    </div>
                    <button class="btn1"> View Profile</button>
                    <button class="btn2"> Contact</button>
                </div>
            </div>`;
            itemContenr.innerHTML += cartoon;
        }

        function OnDletUl1() {
            let listdlet = itemContenr.lastElementChild;
            listdlet.remove();
        }

        function myfunction() {
            let x = document.getElementById("myh2");
            if (x.innerText == "yussef") {
                x.innerText = "abdalsalam ";
                x.style.color = "#fff"
                x.style.padding = "1rem"
                x.style.borderRadius = "1rem"
                x.style.backgroundColor = "red"
            } else {
                x.innerText = "yussef ";
                x.style.color = "#fff"
                x.style.padding = "1rem"
                x.style.borderRadius = "1rem"
                x.style.backgroundColor = "#0b65db"
            }


        }
