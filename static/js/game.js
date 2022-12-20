function start(obj, event) {
  obj.style.position = 'absolute';
  obj.style.zIndex = 1000;
  document.body.append(obj);
  if (event.which === 1) {
    let shiftX = 0;
    let shiftY = 0;
    // тоже нужно переделать для произвольного угла
    shiftX = event.clientX + window.pageXOffset - (parseInt(obj.style.left));
    shiftY = event.clientY + window.pageYOffset - (parseInt(obj.style.top));

    // moveAt(event.pageX, event.pageY);
    // переносит мяч на координаты (pageX, pageY),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX, pageY) {
      obj.style.left = pageX - shiftX + 'px';
      obj.style.top = pageY - shiftY + 'px';
    };

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  };

  // передвигаем мяч при событии mousemove
  document.addEventListener('mousemove', onMouseMove);
  // отпустить мяч, удалить ненужные обработчики
  document.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    obj.onmouseup = null;
    obj.style.zIndex = 1;
  };

  obj.ondragstart = function () {
    return false;
  };
}

object1.onmousedown = function (event) {
  start(object1, event);
};

object2.onmousedown = function (event) {
  start(object2, event);
};

object3.onmousedown = function (event) {
  start(object3, event);
};

object4.onmousedown = function (event) {
  start(object4, event);
};
object5.onmousedown = function (event) {
  start(object5, event);
};
object6.onmousedown = function (event) {
  start(object6, event);
};
