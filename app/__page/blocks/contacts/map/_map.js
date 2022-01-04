ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map(
    "map",
    {
      // center: [55.760146854232936, 37.638843273438674], // смещенный центр как в макете
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: [],
    },
    {
      zoomControlSize: "small",
      zoomControlFloat: "right",
      geolocationControlFloat: "right",
      suppressMapOpenBlock: true,
    }
  );

  myMap.controls.add("zoomControl", {
    size: "small",
    float: "none",
    position: {
      top: "270px",
      right: "18px",
    },
  });

  myMap.controls.add("geolocationControl", {
    size: "small",
    float: "none",
    position: {
      top: "357px",
      right: "18px",
    },
  });

  var myPlacemark = new ymaps.Placemark(
    // [55.758501842296766, 37.601094577973704], // смещенная метка как в макете
    [55.75846806898367, 37.60108849999989],
    {
      hintContent: "Шоурум №4, Леонтьевский переулок, дом 5/1",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map-marker.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
}
