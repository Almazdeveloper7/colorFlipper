function randomColor() {
    let color = (Math.floor(Math.random() * 16777216) + 1).toString(16);
    return '#' + '0'.repeat(6 - color.length) + color;
};
let generateColor;

const simpleColors = ['red','green', 'yellow', 'white'];
function ColorsfromArray() {
   const randomIndex =  Math.floor(Math.random() * simpleColors.length);
   return simpleColors[randomIndex];
};
let GetSimpleColor;

document.querySelector('.simplebtn').addEventListener('click', function() {
 
    document.querySelector('.btn').addEventListener('click',function() {
        GetSimpleColor = ColorsfromArray();
        document.getElementById('letter').textContent =  GetSimpleColor;
        document.querySelector('body').style.backgroundColor =  GetSimpleColor;
    })
});


//Click into Hex and after click me!
document.querySelector('.hex').addEventListener('click', function() {

    document.querySelector('.btn').addEventListener('click', function() {
        generateColor = randomColor();
        document.querySelector('body').style.backgroundColor = generateColor;
        document.getElementById('letter').textContent = generateColor;
       });

});


