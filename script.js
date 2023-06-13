const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const text=document.getElementById('textarea');

form.addEventListener('submit',function(x){
    x.preventDefault();
    let usernamevalidate = false;
    let emailvalidate = false;
    let phonevalidate = false;
    let textvalidate = false;
    if(username.value == ''){
        usernamevalidate = false;
        showerror(username, 'กรุณาป้อนชื่อ-นามสกุล')
    }else{
        usernamevalidate = true;
        showsucces(username)
    }

    if(email.value == ''){
        emailvalidate = false;
        showerror(email, 'กรุณาป้อนอีเมล')
    }else if(!validateEmail(email.value)){
        emailvalidate = false;
        showerror(email,'อีเมลไม่ถูกต้อง')
    }
    else{
        emailvalidate = true;
        showsucces(email)
    }

    if(phone.value == ''){
        phonevalidate = false;
        showerror(phone, 'กรุณาป้อนเบอร์มือถือ')
    }else if(!validatePhone(phone.value)){
        phonevalidate = false;
        showerror(phone,'เบอร์มือถือไม่ถูกต้อง')
    }
    else{
        phonevalidate = true;
        showsucces(phone)
    }
    if(text.value == ''){
        textvalidate = false;
        showerror(text, 'กรุณาป้อนข้อมูลที่ร้องเรียน')
    }else if(!validateTextarea(text.value)){
        textvalidate = false;
        showerror(text,'ห้ามใส่ตัวอักษรเกิน 1000')
    } else {
        textvalidate = true;
        showsucces(text)
    }
    if(usernamevalidate && emailvalidate && phonevalidate && textvalidate){
        myFunction(text);
        console.log("ชื่อ-นามสกุล : ", username.value);
        console.log("อีเมล : ",email.value);
        console.log("เบอร์มือถือ : ",phone.value);
        console.log("คำร้องเรียน : ",text.value);
    }
    
    
});
function myFunction(text) {
    alert(text.value);
}

function showerror(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error"
    const small=formControl.querySelector('small')
    small.innerText=message;
}

function showsucces(input){
    const formControl=input.parentElement;
    formControl.className="form-control success"

}
function validateTextarea(textarea) {
    const maxLength = 1000;
    const text = textarea;
    if (text.length > maxLength) {
        return false; 
      } else {
        return true; 
      }
}
const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(
        /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
      );
  };

  
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  


