function Database(){

    this.saveData = function (data){
        return localStorage.container = JSON.stringify(data);
    }

    this.getAllData = function(){
        return JSON.parse(localStorage.container);
    }

    this.dbIsEmpty = function(){
        return localStorage.container == undefined || localStorage.container == null;
    }

    this.dbDataIsArray = function(data){
        return data.length != undefined;
    }

    this.saveAsArray = function(array,data){
        array.push(data);
        this.saveData(array);
    }

    this.addingUser = function(user){
        if(this.dbIsEmpty()){
            this.saveData(user);
        }
        else
        {
            let dbData = this.getAllData();

            if(!this.dbDataIsArray(dbData)){
                let newArray = [];
                newArray.push(user);
                this.saveAsArray(newArray,dbData);
            }
            else
            {
                this.saveAsArray(dbData,user);
            }
        }
    }


    this.users = function (){
        if(localStorage.container == null){
            return false;
        }
        else{
            return JSON.parse(localStorage.container);
        }
    }
}