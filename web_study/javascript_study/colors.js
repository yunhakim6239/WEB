function setColor(color) {
    var list = document.querySelectorAll('a');
    var i = 0;
    while (i < list.length) {
        list[i].style.color = color;
        i++;
    }
}
var Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    },


}
function nightDayHandler(self) {

    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');

        setColor('powderblue');

    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');

        setColor('blue');
    }

}
