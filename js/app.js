const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");

const checkNumberBtn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum,luckyNo) {
   if(luckyNo>0){
    if(sum%luckyNo === 0){
       outputBox.innerText = "Your birthday is lucky indeed! 🥳";
    }
    else{
       outputBox.innerText = "your birthday is not so lucky!😔";
    }}
    else{
      outputBox.innerText = "Invalid input ❌.";
    }
}

function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const luckyNo = luckyNumber.value
    if(dob && luckyNo){
    const sum = calculateSum(dob);
    compareValues(sum, luckyNo)
    }else{
      outputBox.innerText = "please enter both the fields." 
    }

}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let i =0 ; i<dob.length;i++){
      sum = sum+Number(dob.charAt(i));
    }
    return sum;
  }

checkNumberBtn.addEventListener("click",checkBirthdateIsLucky )
