const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const loginBtns = $$('.signIn')
const signUpBtns = $$('.signUp')
const btnAccount = $('.btn-account')

const songImages = $$('.pageList-item__head')
const songAction = $$('.pageList-item__action')

function start(){
    handleEven()
}
start()

//XỬ LÍ KHI CLICK
function handleEven(){
    //Xử lí khi bấm vào nút đăng kí
    signUpBtns.forEach(function(signUpBtn){
        signUpBtn.onclick=function(){
            renderSignUpForm()
        }
    })
   
    //Xử lí khi bấm vào login
    loginBtns.forEach(function(loginBtn,i){
        loginBtn.onclick=function(){ 
            renderLoginForm()
        }
    })
    //xử lí khi hover qua bài hát
   songImages.forEach(function(songImage,i){
     songImage.onmouseover = function(){
         songAction[i].style.display="block"
     }
     songImage.onmouseout=function(){
         songAction[i].style.display="none"
     }
    })

}

//XỬ LÍ FORM ĐĂNG NHẬP, ĐĂNG KÝ
function handleEvenForm(){
    const modal = $('.modal')
    const returnBtn = $('.auth-form__controls-back')
    //Xử lí khi bấm return 
    returnBtn.onclick = function(){
    btnAccount.removeChild(modal);
  }
  //Xử lí khi hover qua bài hát

}

//RENDER FORM ĐĂNG NHẬP ĐĂNG KÝ
function renderLoginForm(){
    if(btnAccount){
        const modal = document.createElement('div')
        modal.classList.add('modal')
        btnAccount.style.display = "block"
        modal.innerHTML = `
        <div class="modal__overlay"></div>
        <div class="modal__body">           
             <!--Login form-->
             <div class="auth-form">
                <div class="auth-form__container">
                    <div class="auth-form__form">
                        <div class="auth-form__group">
                            <input type="text" class="auth-form__input" placeholder="Enter your account">
                        </div>
                        <div class="auth-form__group">
                            <input type="password" class="auth-form__input" placeholder="Enter your password">
                        </div>
                        <div class="auth-form__aside">
                            <div class="auth-form__help">
                                <a href="" class=" auth-form__help--forgot">Forgot password?</a>
                                <span class="auth-form__help-separate"></span>
                                <a href="" class="auth-form__help-link">You need help?</a>
                            </div>
                        </div>
                        <div>
                                <div class="auth-form__controls">
                                    <button class="btn auth-form__controls-back">Return</button>
                                    <button class="btn btn--primary">Login</button>
                                </div>
                                <div class="auth-form__socials">
                                <a href="" class="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                                    <i class="fab fa-facebook auth-form__socials-icon"></i>
                                    <span class="auth-form__socials-lable-title">  Continue with Facebook </span>
                                </a>
                                <a href="" class="auth-form__socials--google btn btn--size-s btn--with-icon">
                                    <i class="fab fa-google auth-form__socials-icon"></i>
                                    <span class="auth-form__socials-lable-title"> Continue with Google</span>
                                </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        btnAccount.appendChild(modal)
    }
    
    handleEvenForm()
}
function renderSignUpForm(){
    btnAccount.style.display = "block"
    if(btnAccount){
        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.onclick = function(e){
            if(e.target.closest('.auth-form__controls-back')){
                btnAccount.removeChild(modal)
            }
        }
        modal.innerHTML = `
        <div class="modal__overlay"></div>
        <div class="modal__body">  
            <!--Register form-->
              <div class="auth-form">
                <div class="auth-form__container">
                    <div class="auth-form__form">
                        <div class="auth-form__group">
                            <input type="text" class="auth-form__input" placeholder="Nhập tài khoản đăng ký">
                        </div>
                        <div class="auth-form__group">
                            <input type="password" class="auth-form__input" placeholder="Nhập mật khẩu của bạn">
                        </div>
                        <div class="auth-form__group">
                            <input type="password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
                        </div>
                        <div class="auth-form__aside">
                            <p class="auth-form__policy-text">
                                When registering, you agree that we may use your provided data for the registration
                                    and to send you notifications on our products and services. You can unsubscribe from 
                                    notifications at any time in your settings. For additional info 
                                    please refer to our <a href="" class="auth-form__policy-link">Privacy Policy.</a>
                            </p>
                        </div>
                        <div>
                                <div class="auth-form__controls">
                                    <button class="btn auth-form__controls-back">Return</button>
                                    <button class="btn btn--primary">Register</button>
                                </div>
                                <div class="auth-form__socials">
                                <a href="" class="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                                    <i class="fab fa-facebook auth-form__socials-icon"></i>
                                    <span class="auth-form__socials-lable-title">  Continue with Facebook </span>
                                </a>
                                <a href="" class="auth-form__socials--google btn btn--size-s btn--with-icon">
                                    <i class="fab fa-google auth-form__socials-icon"></i>
                                    <span class="auth-form__socials-lable-title"> Continue with Google</span>
                                </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
        `;
        btnAccount.appendChild(modal)
    }
    handleEvenForm()
}

