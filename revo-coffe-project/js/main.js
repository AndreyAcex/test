document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Скрываем предзагрузчик после полной загрузки страницы
  window.addEventListener("load", function () {
    preloader.classList.add("hidden"); // Добавляем класс для плавного исчезновения

    setTimeout(() => {
      preloader.style.display = "none"; // Убираем предзагрузчик из DOM
      content.style.overflow = "auto"; // Включаем прокрутку контента
    }, 1000); // Время совпадает с длительностью перехода в .hidden
  });
});

const rows = document.querySelectorAll(".card-row");

rows.forEach((row) => {
  function scrollRight() {
    row.scrollBy({ left: 100, behavior: "smooth" }); // Прокрутка на 100px вправо
  }

  setInterval(scrollRight, 2000); // Прокрутка каждые 2 секунды
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll(".control");
  const contents = document.querySelectorAll(".content");

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      // Удаляем активный класс у всех контролов
      controls.forEach((ctrl) => ctrl.classList.remove("active"));

      // Скрываем все блоки контента
      contents.forEach((content) => (content.style.display = "none"));

      // Показываем выбранный блок контента
      const targetId = control.getAttribute("data-target");
      const targetContent = document.getElementById(`content-${targetId}`);
      if (targetContent) {
        targetContent.style.display = "block";
      }

      // Добавляем активный класс на выбранный контрол
      control.classList.add("active");
    });
  });

  // По умолчанию показываем первый блок и устанавливаем первую кнопку активной
  if (contents.length > 0) {
    contents[0].style.display = "block";
    controls[0].classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll(".control");
  const infoNumber = document.getElementById("infoNumber");
  const infoTitle = document.getElementById("infoTitle");
  const infoParagraph = document.getElementById("infoParagraph");

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      // Удаляем активный класс у всех контролов
      controls.forEach((ctrl) => ctrl.classList.remove("active"));

      // Обновляем содержимое основного блока информации
      infoNumber.textContent = control.getAttribute("data-number");
      infoTitle.textContent = control.getAttribute("data-title");
      infoParagraph.textContent = control.getAttribute("data-paragraph");

      // Добавляем активный класс на выбранный контрол
      control.classList.add("active");
    });
  });

  // По умолчанию устанавливаем первую кнопку активной и показываем её информацию
  if (controls.length > 0) {
    const firstControl = controls[0];
    infoNumber.textContent = firstControl.getAttribute("data-number");
    infoTitle.textContent = firstControl.getAttribute("data-title");
    infoParagraph.textContent = firstControl.getAttribute("data-paragraph");
    firstControl.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const leftButton = document.querySelector(".scroll-button.left");
  const rightButton = document.querySelector(".scroll-button.right");
  const scrollContainer = document.querySelector(".scroll-container");

  leftButton.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -200, // Ширина карточки + отступ
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: 200, // Ширина карточки + отступ
      behavior: "smooth",
    });
  });
});
