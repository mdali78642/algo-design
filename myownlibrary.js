function bounceoff(object1,object2) {
    if(object1.x-object2.x < object1.width/2 + object2.width/2
      && object2.x - object1.x < object1.width/2 + object2.width/2)
      {
        object1.velocityX = object1.velocityX *(-1);
        object2.velocityX = object2.velocityX *(-1);
      }
      if(object1.y - object2.y < object1.height/2 + object2.height/2
      && object2.y - object1.y < object1.height/2 + object2.height/2)
        {
          object1.velocityY = object1.velocityY *(-1);
          object2.velocityY = object2.velocityY *(-1);
        }
    }
    
    function isTouching(rectangle1,rectangle2){
      if(rectangle1.x - rectangle2.x < rectangle1.width/2 + rectangle2.width/2
        && rectangle2.x - rectangle1.x < rectangle1.width/2 + rectangle2.width/2
        && rectangle1.y - rectangle2.y < rectangle1.height/2 + rectangle2.height/2
        && rectangle2.y - rectangle1.y < rectangle1.height/2 + rectangle2.height/2 ){
        return true;
      
      }
      else{
        return false;
      }
    }