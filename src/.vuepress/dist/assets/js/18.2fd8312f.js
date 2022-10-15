(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{298:function(t,s,a){t.exports=a.p+"assets/img/styleelint.d6362614.png"},299:function(t,s,a){t.exports=a.p+"assets/img/normalaze.838b2847.png"},378:function(t,s,a){"use strict";a.r(s);var r=a(16),_=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"популярные-практики"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#популярные-практики"}},[t._v("#")]),t._v(" Популярные практики")]),t._v(" "),s("p",[s("img",{attrs:{src:a(298),alt:"Alt for Imsage"}})]),t._v(" "),s("h2",{attrs:{id:"отловить-ошибки"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#отловить-ошибки"}},[t._v("#")]),t._v(" Отловить ошибки")]),t._v(" "),s("p",[t._v("Некоторые правила stylelint направлены на выявление очевидных ошибок, обычно опечаток или недосмотров, сделанных, когда вы торопились, отвлекались или у вас были затуманенные глаза. Например, вы можете запретить пустые блоки, недопустимые шестнадцатеричные значения, повторяющиеся селекторы, неизвестные имена анимации и ошибочный синтаксис линейного градиента.")]),t._v(" "),s("p",[t._v("Другие правила делают все возможное, чтобы выявить более тонкие ошибки.")]),t._v(" "),s("h2",{attrs:{id:"применять-лучшие-практики"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#применять-лучшие-практики"}},[t._v("#")]),t._v(" Применять лучшие практики")]),t._v(" "),s("p",[t._v("Если вы используете систематическую методологию в своих таблицах стилей или у вас есть руководство по стилю для вашего кода, вы сможете решительно запретить определенные шаблоны. stylelint предоставляет средства для этого.")]),t._v(" "),s("p",[t._v("Прежде всего, вам нужно контролировать свои селекторы. Безжалостно. С помощью stylelint вы можете запретить селекторы, превышающие определенную специфичность, или ограничить глубину вложенности. Вы можете запретить категории селекторов (например, селекторы без идентификатора) и предоставить регулярные выражения, чтобы обеспечить соблюдение соглашений об именах для остальных.")]),t._v(" "),s("p",[t._v("Вы можете заблокировать использование !important хаков , или браузера, которые не применимы к поддерживаемым вами браузерам. Если вы используете Autoprefixer (что вам, вероятно, следует делать), вы можете запретить использование префиксов поставщиков в исходных таблицах стилей.")]),t._v(" "),s("h2",{attrs:{id:"обеспечьте-соблюдение-соглашении-о-стиле-кода"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#обеспечьте-соблюдение-соглашении-о-стиле-кода"}},[t._v("#")]),t._v(" Обеспечьте соблюдение соглашений о стиле кода")]),t._v(" "),s("p",[t._v("В stylelint есть множество правил, которые автоматически применяют соглашения о стиле кода, так что вам и вашим товарищам по команде это не нужно. Мы постарались сделать эти правила максимально всеобъемлющими и чрезвычайно гибкими .")]),t._v(" "),s("p",[t._v("Эти правила в основном касаются пробелов, но также нацелены на другие детали, такие как кавычки, регистр букв, начальные нули в дробных числах, использование ключевых слов вместо написания значений и т. д.")]),t._v(" "),s("p",[t._v("Мечта состоит в том, чтобы вы и ваши товарищи по команде могли один раз установить соглашение о форматировании (например, «Давайте всегда будем ставить один пробел после двоеточия в объявлении!»), кодифицировать его в конфигурации stylelint и больше никогда об этом не говорить. Оставьте правоприменение империи машин.")]),t._v(" "),s("h2",{attrs:{id:"настроить-и-расширить-все"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#настроить-и-расширить-все"}},[t._v("#")]),t._v(" Настроить и расширить все")]),t._v(" "),s("p",[t._v("Николас Закас, создатель ESLint (а также CSS Lint), писал , что ключом к успеху ESLint является его расширяемость. stylelint пытается последовать примеру ESLint и предоставить авторам CSS максимально расширяемый линтер.")]),t._v(" "),s("p",[t._v("Вы можете писать и публиковать свои собственные правила в виде плагинов. Уже есть куча доступных; и нам не терпится увидеть, что еще придумают люди.")]),t._v(" "),s("p",[t._v("Конфигурации расширяемы и, следовательно, доступны для совместного использования. Как и в случае с плагинами, мы узнали о ценности этой функции от ESLint. Посмотрите, что уже опубликовано , включая конфиги от WordPress и SUITCSS.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(299),alt:"Alt for Imsage"}})]),t._v(" "),s("h2",{attrs:{id:"normalize-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normalize-css"}},[t._v("#")]),t._v(" Normalize.css")]),t._v(" "),s("p",[t._v("Normalize — это небольшой файл CSS, обеспечивающий лучшую согласованность стилей HTML-элементов в разных браузерах. Это современная, готовая к HTML5 альтернатива традиционному сбросу CSS.")]),t._v(" "),s("p",[t._v("В настоящее время Normalize.css в той или иной форме используется Twitter Bootstrap , HTML5 Boilerplate , GOV.UK , Rdio , CSS Tricks и многими другими фреймворками, наборами инструментов и сайтами.")]),t._v(" "),s("p",[t._v("Цели normalize.css заключаются в следующем:")]),t._v(" "),s("ul",[s("li",[t._v("Сохраняйте полезные настройки браузера по умолчанию , а не удаляйте их.")]),t._v(" "),s("li",[t._v("Нормализация стилей для широкого спектра элементов HTML.")]),t._v(" "),s("li",[t._v("Исправьте ошибки и распространенные несоответствия браузера.")]),t._v(" "),s("li",[t._v("Повысьте удобство использования с помощью незначительных улучшений.")]),t._v(" "),s("li",[t._v("Объясните код, используя комментарии и подробную документацию.")]),t._v(" "),s("li",[t._v("Он поддерживает широкий спектр браузеров (включая мобильные браузеры) и включает CSS, нормализующий элементы HTML5, типографику, списки, встроенное содержимое, формы и таблицы.")])]),t._v(" "),s("p",[t._v("Несмотря на то, что проект основан на принципе нормализации, он использует прагматичные значения по умолчанию там, где они предпочтительнее.")]),t._v(" "),s("p",[t._v("Нормализация против сброса\nСтоит подробнее разобраться, чем normalize.css отличается от традиционных сбросов CSS.")]),t._v(" "),s("p",[t._v("Normalize.css сохраняет полезные значения по умолчанию\nСбросы создают однородный визуальный стиль, сглаживая стили по умолчанию почти для всех элементов. Напротив, normalize.css сохраняет множество полезных стилей браузера по умолчанию. Это означает, что вам не нужно повторно объявлять стили для всех общих типографских элементов.")]),t._v(" "),s("p",[t._v("Альтернатива - CSS-RESET")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://htmlacademy.ru/blog/html/about-normalize-css",target:"_blank"}},[t._v("Статья про normalize")]),t._v(" "),s("br")])])}),[],!1,null,null,null);s.default=_.exports}}]);