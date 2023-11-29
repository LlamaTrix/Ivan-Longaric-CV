document.addEventListener('DOMContentLoaded', function () {
    const languageSwitchButton = document.getElementById('languageButton');
    const elementsToTranslate = document.querySelectorAll('[data-es], [data-en]');
  
    let isSpanish = true;
  
    languageSwitchButton.addEventListener('click', function () {
      isSpanish = !isSpanish;
      updateLanguage();
    });
  
    function updateLanguage() {
      elementsToTranslate.forEach(function (element) {
        if (isSpanish) {
          element.textContent = element.getAttribute('data-es');
        } else {
          element.textContent = element.getAttribute('data-en');
        }
      });
    }
  
    updateLanguage();
  });