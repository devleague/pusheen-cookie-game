var cookies = 100;

var myCookies = 0;

var pusheenCookies = 0;

var isActive = false;

var eatSpeed = 0;

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

    console.log(eatSpeed);
    pusheenEats();

    function pusheenEats(){
      if (cookies > 0){
        pusheenCookies += 1;
        cookies -= 1;

        pusheenCount.innerHTML = pusheenCookies;
        cookieCount.innerHTML = cookies;

        setTimeout(pusheenEats, eatSpeed);
      }else if (cookies === 0) {
        if (myCookies > pusheenCookies){
          result.innerHTML = "you won!";
          isActive = false;
        } else {
          result.innerHTML = "you lost!";
          isActive = false;
        }
      }
    }


    document.getElementById('getcookie').onclick =
      function getCookie(){
        if (cookies > 0){
          cookies -= 1;
          myCookies += 1;
        }
        cookieCount.innerHTML = cookies;
        myCount.innerHTML = myCookies;
      };
  }//end start game

  function randomEatSpeed(){
    var speed = Math.floor(Math.random()*5);
    speed = speed * 100 + 100;
    eatSpeed = speed;
  }

  document.getElementById('start').onclick = function (){
    if (!isActive){
      isActive = true;
      randomEatSpeed();
      startGame();
    }
    return null;
  };

};