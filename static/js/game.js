var i_object1 = { value: 0, now_rot: 0 };
var i_object2 = { value: 0, now_rot: 0 };
var i_object3 = { value: 0, now_rot: 0 };
var i_object4 = { value: 0, now_rot: 0 };
var i_object5 = { value: 0, now_rot: 0 };
var i_object6 = { value: 0, now_rot: 0 };

object1.onmousedown = function (event) {
    start(object1, event, i_object1);
};

object2.onmousedown = function (event) {
    start(object2, event, i_object2);
};

object3.onmousedown = function (event) {
    start(object3, event, i_object3);
};

object4.onmousedown = function (event) {
    start(object4, event, i_object4);
};
object5.onmousedown = function (event) {
    start(object5, event, i_object5);
};
object6.onmousedown = function (event) {
    start(object6, event, i_object6);
};




function start(obj, event, j) {
    i = j.value
    obj.style.position = 'absolute';
    obj.style.zIndex = 1000;
    document.body.append(obj);
    if (event.which == 1) {
        var shiftX = 0;
        var shiftY = 0;
        //тоже нужно переделать для произвольного угла
        shiftX = event.clientX + window.pageXOffset - (parseInt(obj.style.left));
        shiftY = event.clientY + window.pageYOffset - (parseInt(obj.style.top));
        console.log(shiftX, shiftY)


        //moveAt(event.pageX, event.pageY);

        // переносит мяч на координаты (pageX, pageY),
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
            obj.style.left = pageX - shiftX + 'px';
            obj.style.top = pageY - shiftY + 'px';
        };

        function onMouseMove(event) {

            moveAt(event.pageX, event.pageY);
        };
    };





    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
    // отпустить мяч, удалить ненужные обработчики
    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        obj.onmouseup = null;
        obj.style.zIndex = 1
    };

    obj.ondragstart = function () {
        return false;
    };
}
