var cookies = 100;

var myCookies = 0;

var pusheenCookies = 0;

var isActive = false;


window.onload = function (){
  var cookieCount = document.getElementById('cookies');
  var pusheenCount = document.getElementById('pusheencookies');
  var myCount = document.getElementById('mycookies');
  var result = document.getElementById('result');

  cookieCount.innerHTML = cookies;
  myCount.innerHTML = myCookies;
  pusheenCount.innerHTML = pusheenCookies;

  function startGame (){
    cookies = 100;
    pusheenCookies = 0;
    myCookies = 0;

    cookieCount.innerHTML = cookies;
    pusheenCount.innerHTML = pusheenCookies;
    myCount.innerHTML = myCookies;
    result.innerHTML = '';

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
          isActive = false;
        }else {
          result.innerHTML = 'Boo! Pusheen beat you in cookie eating!!';
          isActive = false;
        }
      }
      cookieCount.innerHTML = cookies;
      pusheenCount.innerHTML = pusheenCookies;

      document.getElementById('getcookie').onclick =
        function getCookie (){
          if (cookies > 0){
            cookies -= 1;
            myCookies += 1;
          }
          cookieCount.innerHTML = cookies;
          myCount.innerHTML = myCookies;
        };
    }, 100);

  }

  // document.getElementById('start').onclick = startGame;
  document.getElementById('start').onclick = function (){
    if (!isActive){
      isActive = true;
      startGame();
    }
    return null;
  };

};
