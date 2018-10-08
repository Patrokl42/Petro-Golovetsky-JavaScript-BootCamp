window.onLoad = timer();
var imageArray = ['ocean-seacoast-rocks-water-87284.jpeg', 'pexels-photo-885880.jpeg', 'pexels-photo-1112598.jpeg',
                  'pexels-photo-1275929.jpeg', 'pexels-photo-1437629.jpeg', 'pexels-photo-1451074.jpeg' ,
                  'pexels-photo-1460880.jpeg'];

var ControlDelay = 10000;
var ControlInterval = 5000;

var screenSaver = document.getElementsByClassName("screen-saver");
var image_Element = document.getElementsByClassName("image");
var window_Height = window.innerHeight;
var window_Width = window.innerWidth;

var interval = setInterval(function(){
    image_Element[0].src = changeImage();
    image_Element[0].style.opacity = '0';
    var image_Height = image_Element[0].clientHeight ;
    var image_Width = image_Element[0].clientWidth ;
    var height = window_Height - image_Height ;
    var weight = window_Width - image_Width ;
    image_Element[0].style.top = Math.round(Math.random() * height ) + "px";
    image_Element[0].style.left = Math.round(Math.random() * weight) + "px";
    setTimeout(function(){
        image_Element[0].style.opacity = '1';
    },1000);
    } , ControlInterval);

function changeImage() {
    var image = 'images/' + imageArray[Math.round(Math.random() * (imageArray.length - 1))];
    return image;
}
function timer(){
    var t;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    function logout() {
        screenSaver[0].classList.add('active');
        interval;
    }
    function resetTimer() {
        screenSaver[0].classList.remove('active');
        clearTimeout(t);
        t = setTimeout(logout, ControlDelay)
    }
}

              