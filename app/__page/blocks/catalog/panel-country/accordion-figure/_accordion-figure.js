/* accordion-figure */
var accordion = (function (element) {
  var _getItem = function (elements, className) {
    // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      let content = item.querySelector(".accordion-figure__content");
      content.style.height = "0px";

      if (item.classList.contains(className)) {
        element = item;
        element.querySelector(".accordion-figure__content").style.height = _getContentHeight(item);
      }
    });
    return element;
  };
  var _getContentHeight = function (element) {
    let contentElements = element.querySelector(".accordion-figure__content").childNodes,
      contentHeight = 0; // высота внутренних отступов

    contentElements.forEach(function (elem) {
      let elemHeight = typeof elem.offsetHeight === "number" ? elem.offsetHeight : 0;
      contentHeight += elemHeight;
    });

    return contentHeight + "px";
  };
  return function () {
    let _mainElement = {}, // .accordion-figure
      _items = {}, // .accordion-figure__item
      _contents = {}; // .accordion-figure__content
    let _actionClick = function (e) {
        // прекращаем выполнение функции если кликнули не по заголовку
        if (!e.target.closest(".accordion-figure__header")) {
          return;
        }
        e.preventDefault(); // отменяем стандартное действие
        // получаем необходимые данные
        let header = e.target.closest(".accordion-figure__header"),
          item = header.parentElement,
          itemActive = _getItem(_items, "active"),
          content = item.querySelector(".accordion-figure__content");

        if (itemActive === undefined) {
          // добавляем класс active к элементу (в зависимости от выбранного заголовка)
          item.classList.add("active");
          // добавляем активному элементу высоту
          item.querySelector(".accordion-figure__content").style.height = _getContentHeight(item);
        } else {
          // удаляем класс active у текущего элемента
          itemActive.classList.remove("active");
          itemActive.querySelector(".accordion-figure__content").style.height = "0px";
          // если следующая вкладка не равна активной
          if (itemActive !== item) {
            // добавляем класс active к элементу (в зависимости от выбранного заголовка)
            item.classList.add("active");
            item.querySelector(".accordion-figure__content").style.height = _getContentHeight(item);
          }
        }
      },
      _actionResize = function (event, elem) {
        let itemActive = _getItem(_items, "active");
        // console.log("itemActive:", itemActive);
      },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener("click", _actionClick);
        window.addEventListener("resize", function (event) {
          _actionResize(event, _mainElement);
        });
      };

    return {
      init: function (element) {
        _mainElement = typeof element === "string" ? document.querySelector(element) : element;
        _items = _mainElement.querySelectorAll(".accordion-figure__item");
        _setupListeners();
        _getItem(_items, "active");
      },
    };
  };
})();

document.querySelectorAll(".accordion-figure").forEach((el) => {
  let catalogAccordion = accordion();
  catalogAccordion.init(el);
});

@@include("tabs-figure-list/_tabs-figure-list.js")