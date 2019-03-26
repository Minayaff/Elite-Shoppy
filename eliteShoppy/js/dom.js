function DOM(){

    this.getValue = function(id){
        return document.getElementById(id).value;
    }

    this.isInputEmpty = function(value){
        return value == "";
    }


    this.writeMessage = function(id,message){
        document.getElementById(id).innerHTML = message;
    }

    this.upperCase = function(value){
        for(let l in value){
            if((value.charCodeAt(l) >= 65) && (value.charCodeAt(l) <= 90)){
                return true;
            }
        }
    }

    this.lowerCase = function(value){
        for(let l in value){
            if((value.charCodeAt(l) >= 97) && (value.charCodeAt(l) <= 122)){
                return true;
            }
        }
    }

    this.validate = function(user){
        let arr = [];
        //checking name input//
        if(this.isInputEmpty(user.name_surname)){
            arr.push(this.writeMessage("name_error","input can't be empty"));
        }
        else{
            this.writeMessage("name_error","");
        }
        //checking name input ended//
        //checing mail input//
        if(!user.email.includes("@")){
            arr.push(this.writeMessage("email_error","email is invalid"));
        }
        else{
            this.writeMessage("email_error","");
        }
        //checking mail ended//
        //checking password//
        if(user.password.length < 6){
            arr.push(this.writeMessage("password_error","password length must be minimum 6 character"));
        }
        else if(!this.upperCase(user.password)){
            arr.push(this.writeMessage("password_error","password must contain minimum one upper case"));
        }
        else if(!this.lowerCase(user.password)){
            arr.push(this.writeMessage("password_error","password must contain minimum one lower case"));
        }
        else{
            this.writeMessage("password_error","")
        }
        //checking password ended//
        if(arr.length == 0){
            return true;
        }
        
    }
}