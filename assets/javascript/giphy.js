class Giphy{

	constructor(keyword){
		this.keyword = keyword;
		this.endpoint = "http://api.giphy.com/v1/gifs";
		this.api_key = "cb22a3ba10b7457ba0fd5c446850c598";
		this.quantity = "&limit=20";
	}

	getUrlAsync(callback){
		var xhr = new XMLHttpRequest();

		xhr.open("GET", this.endpoint + "/translate?api_key=" + this.api_key + "&s=" + this.keyword + this.quantity);

		xhr.responseType = "json";

		xhr.onload = function(){
			callback(this.response.data.images.original.mp4)
		}

		xhr.send();
	}


	static getUrlAsync(keyword, callback){
		return new Giphy(keyword).getUrlAsync(callback);
	}
}