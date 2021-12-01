/* catalog accordion */
var accordion = (function (element) {
  var _getItem = function (elements, className) {
    // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {
    let _mainElement = {}, // .accordion
      _items = {}, // .accordion__block
      _contents = {}; // .accordion-block__content
    let _actionClick = function (e) {
        if (!e.target.closest(".accordion-block__header")) {
          // прекращаем выполнение функции если кликнули не по заголовку
          return;
        }
        e.preventDefault(); // отменям стандартное действие
        // получаем необходимые данные
        let header = e.target.closest(".accordion-block__header"),
          item = header.parentElement,
          itemActive = _getItem(_items, "active");

        if (itemActive === undefined) {
          // добавляем класс active к элементу (в зависимости от выбранного заголовка)
          item.classList.add("active");
        } else {
          // удаляем класс active у текущего элемента
          itemActive.classList.remove("active");
          // если следующая вкладка не равна активной
          if (itemActive !== item) {
            // добавляем класс active к элементу (в зависимости от выбранного заголовка)
            item.classList.add("active");
          }
        }
      },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener("click", _actionClick);
      };

    return {
      init: function (element) {
        _mainElement = typeof element === "string" ? document.querySelector(element) : element;
        _items = _mainElement.querySelectorAll(".accordion__block");
        _setupListeners();
      },
    };
  };
})();

document.querySelectorAll(".catalog .accordion").forEach((el) => {
  let catalogAccordion = accordion();
  catalogAccordion.init(el);
});
