var path = window.location.pathname;
path = decodeURIComponent(path).substring(1).replace(/\//g, "|");
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
  if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
    var data = JSON.parse(xmlHttp.responseText);
    if(data){
      window.location.replace(data);
    }else{
      window.location.replace("/");
    }
  }
}
xmlHttp.open("GET","https://subs-e3db8.firebaseio.com/path/"+path+".json", true);
xmlHttp.send(null);
