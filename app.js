keys = document.getElementsByClassName("key");
let screen = document.getElementById("screen");

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click",function (event){
        event.preventDefault();

        switch (i) {
            //Reset "AC"
            case 12: {
                screen.value = "";
                break;
            }
            //Resultat "="
            case 14: {
                if (screen.value === ""){

                } else {
                screen.value = eval(screen.value);
                }
                break;
            }
            default: {
                console.log(keys[i].innerHTML);
                screen.value = screen.value + keys[i].innerHTML;
                console.log(i);
            }
        }
    })
}
