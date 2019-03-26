function Database(){
	//clear all data from local storage//
	this._clear = function(){
		return localStorage.clear();
	}

	//check database is empty//
	this._isEmpty = function(){
		return localStorage.content == undefined || localStorage.content == null;
	}

	//save data in localstorage//
	this.saveData = function(data){
		return localStorage.content = JSON.stringify(data);
	}

	//get all data from database if you need to operate over it//
	this.getData = function(){
		return JSON.parse(localStorage.content);
	}

	//if you clears all data from database or yoo need to update current data or add new data to database//
	this.update = function(updatedData){
		localStorage.setItem("content", JSON.stringify(updatedData));
	}

	//save as array your data if your data base isn't empty//
	this.saveAsArray = function(currentData,newData){
		currentData.push(newData);
		this.saveData(currentData);
	}

	//add your array to database//
	this.addProductArray = function(array){
		if(this._isEmpty()){
			this.saveData(array);
		}
		else{
			let currentData = this.getData();
			this.saveAsArray(array,currentData)
		}
	}

	//get your all products from database if you want see//
	this.storedProducts = function(){
		if(!localStorage.content){
			return [];
		}
		else{
			return JSON.parse(localStorage.content);
		}
	}

}