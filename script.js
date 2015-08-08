var cookies = 100;

var myCookies = 0;

var pusheenCookies = 0;

window.onload = function (){

  window.setInterval(function (){
    if (cookies > 0){
      if (pusheenCookies < 100){
        pusheenCookies += 1;
        cookies -= 1;
        console.log(cookies);
      }
    }
    document.getElementById('cookies').innerHTML = cookies;
    document.getElementById('pusheencookies').innerHTML = pusheenCookies;
  }, 250);

  document.getElementById('getcookie').onclick =
    function getCookie (){
      if (cookies > 0 ){
        cookies -= 1;
        myCookies += 1;
      }
      document.getElementById('cookies').innerHTML = cookies;
      document.getElementById('mycookies').innerHTML = 'My Cookies: ' + myCookies;
    };
};
