var navMain = document.querySelector('.main-nav');
        var navToggle = document.querySelector('.main-nav__toggle');

        // не реализован функционал с nojs
        navMain.classList.remove('main-nav--nojs');

        navToggle.addEventListener('click', function() {
          // У метод classList.toggle тебе подойдет лучше для данной ситуации
          if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
          } else {
            // Это пример плохой стилизации, нет смысла в двух модификаторах
            // Элемент находится в 2 состояниях всего, в первом изначально (без модификаторов), а второе уже с ним.
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
          }
        });
// Что за ужас с выравниванием?
