window.onload=function(){
    var wrap=document.getElementById('wrap'),
        pic=document.getElementById('pic'),
        list=document.getElementById('list').getElementsByTagName('li'),
        index=0,
        timer=null;

      // 定义自动播放函数
       function autoplay()
       {
        timer = setInterval(function()
        {
            index++;
            if(index>=list.length)
            {
                index=0;
            }
            switchpic(index);
        },2000)   
       }
       
       //调用自动播放函数
       autoplay();
       
      // 定义图片切换函数
       function switchpic(curIndex)
       {
  pic.style.marginTop = -curIndex*170 + 'px';    
           for(var i=0;i<list.length;i++)
           {
               list[i].className = "";
           }
           list[curIndex].className = "on";
           index=curIndex;
       }
     // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function()
    {
        clearInterval(timer);
    }
     // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout=autoplay;
    
    // 遍历所有数字导航实现划过切换至对应的图片
     for(var j=0;j<list.length;j++)
     {
        list[j].id=j;
        list[j].onmouseover = function()
        {
            switchpic(this.id);
        }
     }
   }
