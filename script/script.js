let user = {
    email: document.getElementById("textToSend"),
    button: document.getElementById("buttonToSendText").addEventListener("click", validEmail)
}


function validEmail(){
    let browser = {
        emailReceived: user.email.value,
        output1: document.getElementById("outputToRecive"),
        output2: document.getElementById("textToSend"),
        output3: document.getElementById("iconError"),
        validate: function(){
            var element1Valid = this.emailReceived.includes("@")
            var element2Valid = this.emailReceived.includes(".")
            if(element1Valid == true & element2Valid== true){
                this.output1.innerText = "Done!"
                this.output2.style.border = "1.5px solid var(--desaturatedRed)"
                this.output3.style.opacity = "0";
            }else{
                this.output1.innerText = "Please provide a valid email";
                this.output2.style.border = "2px solid var(--softRed)";
                this.output3.style.opacity = "100%";
            }     
        }
    }
    browser.validate();
    
}