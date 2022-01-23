const memberApi = "https://music-world-g1.herokuapp.com/member"

const returnBtn = $$('.auth-form__controls-back')
const loginBtns = $$('.signIn')
const signUpBtns = $$('.signUp')
const modal = $('.btn-account')
const sigUpForm = $('#signUp-form')
const loginForm = $('#login-form')
const notify = $('.notify')
const btnHomePage = $('.btnHomePage')

//2 nút 2 form đăng ký, đăng nhập
const registerBtn = $('#register-btn')
const SigInBtn = $('#btn-login')

function start(){
    HandleEvents()
    getMembers(getAccount)
    
    //getAccount()
  
}
start()

function HandleEvents(){
    signUpBtns.forEach(function(signUpBtn){
        signUpBtn.onclick = function(){
            modal.style.display = "block"
            loginForm.style.display = "none"
        }
    })
    loginBtns.forEach(function(loginBtn){
        loginBtn.onclick = function(){
            modal.style.display = "block"
            sigUpForm.style.display = "none"
        }
    })
    //Nút return Form đăng ký
    returnBtn[0].onclick = function(){
        modal.style.display = "none"
        loginForm.style.display = "block"
    }
    //Nút return form đăng nhập
    returnBtn[1].onclick = function(){
        modal.style.display = "none"
        sigUpForm.style.display = "block"
        
    }

    //
    btnHomePage.onclick = function(){
        notify.style.display = "none"
    }
}

function getMembers(callback){
    fetch(memberApi)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function getAccount(members){
    
    registerBtn.onclick = function(){
        var account = document.querySelector('input[id="accountSignUp"]').value
        var password = document.querySelector('input[id="passwordSignUp"]').value
       var formData = {
           account:account,
           password:password
       }
       for(var i = 0; i < members.length; i++){
           if(members[i].account===formData.account){
                alert('tai khoan ba bi trung, xin vui long dat lai')   
                break
           }if(i===members.length-1 && members[i].account!==formData.account){
                createAccount(formData)   
                modal.style.display = "none"
                notify.style.display = "block"
           }
       }       
    }    
}

function createAccount(data, callback){
    var options ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                   
                  },
                body: JSON.stringify(data)
            };
            fetch(memberApi, options)
                .then(function(response){
                    response.json();
                })
                .then(callback);
                
}

