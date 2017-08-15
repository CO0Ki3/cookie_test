// 쿠키 생성
function setCookie(Name, Value, Day){
     var expire = new Date();
     expire.setDate(expire.getDate() + ㅇay);
     cookies = Name + '=' + escape(Value) + '; path=/ ';
     if(typeof Day != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
     document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(Name) {
     Name = Name + '=';
     var cookieData = document.cookie;
     var start = cookieData.indexOf(Name);
     var Value_ = '';
     if(start != -1){
          start += Name.length;
          var end = cookieData.indexOf(';', start);
          if(end == -1)end = cookieData.length;
          Value = cookieData.substring(start, end);
     }
     return unescape(Value);
}
