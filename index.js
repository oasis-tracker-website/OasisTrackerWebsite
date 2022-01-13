const xhr = new XMLHttpRequest();
xhr.open('GET',`https://apiv2.nethergames.org/v1/guilds/Oasis%20II`, true);
xhr.onload = function () {
    if(this.status === 200) {
       let json = JSON.parse(this.responseText);
       console.log(json);
       for (members in json){
           console.log(json[members])
       }
    }
    else{
      console.log("some error occured")
    }
}

xhr.send()

