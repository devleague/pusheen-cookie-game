var cookies = 100;

var myCookies = 0;

var pusheenCookies = 0;


window.onload = function (){
  var cookieCount = document.getElementById('cookies');
  var pusheenCount = document.getElementById('pusheencookies');
  var myCount = document.getElementById('mycookies');
  var result = document.getElementById('result');

  cookieCount.innerHTML = cookies;
  myCount.innerHTML = myCookies;
  pusheenCount.innerHTML = pusheenCookies;

  var startGame = function (){
    cookies = 100;
    myCookies = 0;
    pusheenCookies = 0;

    var pusheenEats = window.setInterval(function (){
      if (cookies > 0){
        if (pusheenCookies < 100){
          pusheenCookies += 1;
          cookies -= 1;
        }
      }
      if (cookies === 0){
        clearInterval(pusheenEats);
        if (myCookies > pusheenCookies){
          result.innerHTML = 'You\'ve Ate All The Cookies! Ya Fatteh!';
        }else {
          result.innerHTML = 'Boo! Pusheen beat you in cookie eating!!';
        }
      }
      cookieCount.innerHTML = cookies;
      pusheenCount.innerHTML = pusheenCookies;
    }, 100);

    document.getElementById('getcookie').onclick =
      function getCookie (){
        if (cookies > 0){
          cookies -= 1;
          myCookies += 1;
        }
        cookieCount.innerHTML = cookies;
        myCount.innerHTML = myCookies;
      };
  };

  document.getElementById('start').onclick = startGame;

};
