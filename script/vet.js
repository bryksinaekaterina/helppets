document.querySelectorAll('.clinic-block').forEach(block => {
  block.addEventListener('click', function () {
      const info = this.querySelector('.clinic-info');
      if (info.style.display === "block") {
          info.style.display = "none";
      } else {
          // Скрыть все другие раскрытые информационные блоки
          document.querySelectorAll('.clinic-info').forEach(inf => inf.style.display = "none");
          info.style.display = "block"; // Показать только текущий
      }

      info.style.maxHeight = info.scrollHeight + 'px';
      block.classList.add('active');
  });
});
