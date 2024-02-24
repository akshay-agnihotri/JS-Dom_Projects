
document.querySelector('.right').addEventListener('mouseenter', function() {
    document.querySelector('.left').style.width = '25%';
    document.querySelector('.right').style.width = '75%';
});

document.querySelector('.right').addEventListener('mouseleave', function() {
    document.querySelector('.left').style.width = '75%';
    document.querySelector('.right').style.width = '25%';
});

// document.querySelector('.right').addEventListener('mouseenter', function() {
//     var leftWidth = document.querySelector('.left').style.width;
//     var rightWidth = document.querySelector('.right').style.width;
    
//     document.querySelector('.left').style.width = rightWidth;
//     document.querySelector('.right').style.width = leftWidth;
// });
