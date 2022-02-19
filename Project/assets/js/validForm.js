const passSign = document.querySelector('#password'),
      rePass = document.querySelector('#re-password'),
      passLog = document.querySelector('#passwordLog'),
      accSign = document.querySelector('#accountSignUp'),
      indicator = document.querySelector('.indicator'),
      iconText = document.querySelectorAll('.icon-text'),
      text = document.querySelectorAll('.text');
      showHide = document.querySelectorAll('.show_hide');

// for(var i = 0; i < showHide.length; i++) {
    // showHide[i].addEventListener('click', (i) => {
    //     if(input.type === "password" || rePass.type === "password") {
    //         input.type = "text";
    //         rePass.type = "text";
    //         showHide.classList.replace("fa-eye-slash", "fa-eye");
    //     } else {
    //         input.type = "password";
    //         rePass.type = "text";
    //         showHide.classList.replace("fa-eye", "fa-eye-slash");
    //     }
//     })  
// } 

// for (var i = 0; i <= showHide.length; i++) {
//     showHide[i].addEventListener("click", showPassword(i))
// }

// function showPassword(i) {
//     return function() {
//         if(input.type === "password") {
//             input.type = "text";
//             this.classList.replace("fa-eye-slash", "fa-eye");
//         } else if (rePass.type === "password"){
//             rePass.type = "text";
//             this.classList.replace("fa-eye-slash", "fa-eye");
//         }
//          else {
//             input.type = "password";
//             rePass.type = "password";
//             this.classList.replace("fa-eye", "fa-eye-slash");
//         }
//         console.log("you clicked region number " + i);
//     };
// }

showHide[0].addEventListener('click', () => {
    if(passSign.type === "password") {
        passSign.type = "text";
        showHide[0].classList.replace("fa-eye-slash", "fa-eye");
    } else {
        passSign.type = "password";
        showHide[0].classList.replace("fa-eye", "fa-eye-slash");
    }
})

showHide[1].addEventListener('click', () => {
    if(rePass.type === "password") {
        rePass.type = "text";
        showHide[1].classList.replace("fa-eye-slash", "fa-eye");
    } else {
        rePass.type = "password";
        showHide[1].classList.replace("fa-eye", "fa-eye-slash");
    }
})

showHide[2].addEventListener('click', () => {
    if(passLog.type === "password") {
        passLog.type = "text";
        showHide[2].classList.replace("fa-eye-slash", "fa-eye");
    } else {
        passLog.type = "password";
        showHide[2].classList.replace("fa-eye", "fa-eye-slash");
    }
})

// 
let alphabet = /[a-zA-Z]/, //letter a to z and A to Z
    numbers = /[0-9]/,
    scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/;

passSign.addEventListener('keyup', () => {
    indicator.classList.add('active-form');

    let val = passSign.value;
    if(val.match(alphabet) || val.match(numbers) || val.match(scharacters)) {
        text[0].textContent = "Password is weak";
        passSign.style.borderColor = "#FF6333";
        showHide[0].style.color = "#FF6333";
        iconText[0].style.color = "#FF6333";
    }

    if(val.match(alphabet) && val.match(numbers) && val.length >= 6) {
        text[0].textContent = "Password is medium";
        passSign.style.borderColor = "#ffd24e";
        showHide[0].style.color = "#ffd24e";
        iconText[0].style.color = "#ffd24e";
    }

    if(val.match(alphabet) && val.match(numbers) && val.length >= 8 && val.match(scharacters)) {
        text[0].textContent = "Password is strong";
        passSign.style.borderColor = "#22c32a";
        showHide[0].style.color = "#22c32a";
        iconText[0].style.color = "#22c32a";
    }

    if(val == "") {
        indicator.classList.remove('active-form');
        passSign.style.borderColor = "#a6a6a6";
        showHide[0].style.color = "#a6a6a6";
        iconText[0].style.color = "#a6a6a6";
    }

    console.log(val)
})

rePass.addEventListener('keyup', () => {
    let val = rePass.value;

    if(val.length === passSign.value.length && val.length > 6) {
        rePass.style.borderColor = "#22c32a";
        showHide[1].style.color = "#22c32a";
    } else if (val.length < 6) {
        rePass.style.borderColor = "#FF6333";
        showHide[1].style.color = "#FF6333";
    }else {
        rePass.style.borderColor = "#FF6333";
        showHide[1].style.color = "#FF6333";
    }

    if(val == "") {
        passSign.style.borderColor = "#a6a6a6";
        showHide[1].style.color = "#a6a6a6";
    }
})

accSign.addEventListener('keyup', () => {
    let val = accSign.value;
    
    if(val.length > 8) {
        accSign.style.borderColor = "#22c32a";
    } else {
        accSign.style.borderColor = "#FF6333";
    }

    if(val == "") {
        indicator.classList.remove('active-form');
        passSign.style.borderColor = "#a6a6a6";
    }

})