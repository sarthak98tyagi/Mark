$c=1;
map=$("#map");
cover=$(".image-cover");
w=cover.width();
h=cover.height();
a=[];
$("#zoom-in").click(function()
{
    if($c<5){$c=$c+1;}
    map.css("transform","scale("+$c+")");
    u=parseFloat(a[0].css("left"))-(w/2);
    // console.log(u);
    v=parseFloat(a[0].css("top"))-(h/2);
    a[0].css({"left":u,"top":v});

});
$("#zoom-out").click(function()
{
    if($c>1){
        $c=$c-1;
        map.css("transform","scale("+$c+")");
        u=parseFloat(a[0].css("left"))+(w/2);
        console.log($c);
        v=parseFloat(a[0].css("top"))+(h/2);
        a[0].css({"left":u,"top":v});
    }

});
map.click(function(e)
{
   $x=e.pageX-$(this).offset().left-10;
   $y=e.pageY-$(this).offset().top;
   // console.log("("+$x+","+$y+")");
   mk=$("<div></div>");
   mk.css({"width":"20px","height":"20px","background":"green","position":"absolute","top":$y,"left":$x,"border-radius":"50%"});
   a[0]=mk;
   $(".image-cover").append(mk);

});
