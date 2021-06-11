function httpPost(URL, PARAMS) {
 var temp = document.createElement("form");
 temp.action = URL;
 temp.method = "post";
 temp.style.display = "none";
 
 for (var x in PARAMS) {
  var opt = document.createElement("textarea");
  opt.name = x;
  opt.value = PARAMS[x];
  temp.appendChild(opt);
 }
 
 document.body.appendChild(temp);
 temp.submit();
 
 return temp;
}

 var params = {
random:Math.random()
 };
 
 httpPost("http://127.0.0.1:80", params);
