var cookies = 100;

var myCookies = 0;

var pusheenCookies = 0;


window.onload = function (){
  var cookieCount = document.getElementById('cookies');
  var pusheenCount = document.getElementById('pusheencookies');
  var myCount = document.getElementById('mycookies');

  cookieCount.innerHTML = cookies;
  myCount.innerHTML = myCookies;
  pusheenCount.innerHTML = pusheenCookies;

  document.getElementById('start').onclick =
    function startGame (){
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
            alert('You\'ve won!');
          }else {
            alert('YOU LOST ALL THE COOKIES!');
          }
        }
        cookieCount.innerHTML = cookies;
        pusheenCount.innerHTML = pusheenCookies;
      }, 250);

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
};
