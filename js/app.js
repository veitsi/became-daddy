(function () {
    var app = angular.module('pledgeStore', []);
    app.controller('PledgeController', function () {
            this.balance = 70;
            this.index = 1;
            this.events = [
                {
                    title: 'FOUNDERS July', price: 16.0, date: new Date(2015, 06, 14),
                    registred: false, img: "img/bluered.jpg",
                    full: " Формат мероприятия — конференция и нетворкинг, что позволяют послушать истории успеха интересных проектов, предпринимательские советы их фаундеров и обсудить бизнес возможности."
                },
                {
                    title: 'Levi9 PHP Tuesday ',
                    price: 35,
                    date: new Date(2015, 06, 14),
                    registred: true,
                    img: "img/graf.jpg",
                    full: "Levi9 устраивает первый ивент в рамках Levi9 PHP Tuesday для PHP разработчиков и всех интересующихся! Наши спикеры с удовольствием расскажут вам"
                },
                {
                    title: 'как начать свой стартап',
                    price: 40,
                    date: new Date(2015, 06, 12),
                    registred: false,
                    img: "img/yo.jpg",
                    full: "Лучший вариант начать трудовую неделю — бесплатно протестировать I coworking hub в один из Monday Free Coworking Days. "
                },
                {
                    title: 'Excel для бізнес-потреб',
                    price: 27,
                    date: new Date(2015, 06, 12),
                    registred: false,
                    img: "img/mountains.jpg",
                    full: "воркшоп буде присвячений Excel. Увага! З собою на воркшоп потрібно взяти ноутбук! "
                },
                {
                    title: 'встреча Clojure-сообщества',
                    price: 18,
                    date: new Date(2015, 06, 12),
                    registred: false,
                    img: "img/horiz.jpg",
                    full: "восьмая встреча киевского Clojure-сообщества в офисе компании Cogniance"
                },
                {
                    title: 'зустріч Mobile-спільноти',
                    price: 35,
                    date: new Date(2015, 06, 27),
                    registred: false,
                    img: "img/popa.jpg",
                    full: "17-та зустріч однодумців Mobile-спільноти. Як досвідчені розробники та юзери, так і новачки мають змогу обговорити тематичні питання, знайти партнерів та просто весело і неформально провести час."
                }
            ];
            this.events.balance=300;

            this.saveData = function () {
                //var sobj = JSON.stringify ({"foo": "bar", "array": [1, 2, 3]});
                //console.log('JSON.stringify: '+sobj);
                // Сериализуем его
                //var sObj = JSON.stringify(obj)
                // После этого sObj принимает строковое значение {"foo":"bar","array":[1,2,3]}

                // Запишем в localStorage с ключём object
                //console.log('JSON.stringify: '+JSON.stringify(this.events));
                localStorage.setItem("events", JSON.stringify (this.events));
                localStorage.setItem("balance", JSON.stringify (this.balance));
                // Обратимся к localStorage следующим образом
                // Хранилище вернёт нашу сериализованную строку {"foo":"bar","array":[1,2,3]}
                //localStorage.object
                // Получим наш сериализованный объект через API
                // Одновременно преобразуем к обычному объекту JavaScript
                var obj = JSON.parse(localStorage.getItem("events"));
                console.log('balance: '+JSON.parse(localStorage.getItem("balance")));
                //console.log('in saveData');
                //localStorage.setItem('somekey', 'some value', function (err, value) {
                //    //console.log(value);
                //});

                //value2 = localStorage.getItem('somekey', function (err, value) {
                //    console.log('taken value: ' + value);
                //});
                //
                //console.log('taken value: ' + value2);
            };

            this.recalcaccess = function () {
                var i;
                for (i = 0; i < this.events.length; i++) {
                    if (this.events[i].registred) this.events[i].giveMoney = false;
                    else  this.events[i].giveMoney = this.balance < this.events[i].price;
                    //console.log(i + ": " + this.events[i].giveMoney);
                }
            }

            this.recalcaccess();

            this.addPledge = function (index) {
                this.index = index;
                //console.log(this.index);
                if (this.balance >= this.events[index].price) {
                    this.balance -= this.events[index].price;
                    this.events[index].registred = true;
                    this.recalcaccess();
                    this.saveData();
                    alert("Вы зарегистрировались на встречу: " + this.events[index].title + ". $" +
                        this.events[index].price + " Списаны с Вашего счета. Остаток на счету: $" + this.balance)
                }
                else alert("недостаточно средств на счету");
            }


        }
    )
    ;
})();

//14 июля (вторник)
//14 июля Киев, Офис Levi9 (Ахтырский переулок 7, корпус 3Б)
//Levi9 PHP Tuesday Levi9 PHP Tuesday
//Levi9 устраивает первый ивент в рамках Levi9 PHP Tuesday для PHP разработчиков и всех интересующихся! 2
//9 идутPHP, клубные встречи
//14 июля Киев, ул. Жилянская, 75, БЦ «Евразия»
//FOUNDERS July FOUNDERS July
//Founders — это сообщество ИТ предпринимателей, а также тех, кто живет идеями создавать уникальные и инновационные продукты. Формат мероприятия — конференция и нетворкинг, что позволяют послушать истории успеха интересных проектов, предпринимательские советы их фаундеров и обсудить бизнес возможности.
//3 идутклубные встречи, стартап
//14 июля Ки
//Практичний воркшоп Boost Your Skills: Excel для бізнес-потреб Практичний воркшоп Boost Your Skills: Excel для бізнес-потреб
//Наступний воркшоп буде присвячений Excel. Увага! З собою на воркшоп потрібно взяти ноутбук!
//    обучение
//15 июля (среда)
//15 июля Ciklum
//“Challenges in Building Large-Scale Information Retrieval Systems” (revisited)
//Це буде розмова про те, що саме зробило Google глобальним софтверним велетнем. Про головні й найпотужніші інструменти, що їх винаходить Google для обробки колосальних масивів даних.
//5 идутклубные встречи, технологии
//15 июля Киев, FEDORIV HUB
//Работа в IT: сделай карьеру своей мечты
//Интересная, перспективная, высокооплачиваемая, в крупной международной компании... Не работа, а мечта! Мы поможем Вам ее осуществить.
//15 июля Киев, Креативное Пространство «Часопис», Киев, ул. Л. Толстого, 3
//Fireside chat со Стасом Хирманом на тему «Треугольник Киев — Тель-Авив — Пало Альто. Что это может дать украинскому предпринимателю» Fireside chat со Стасом Хирманом на тему «Треугольник Киев - Тель-Авив - Пало Альто. Что это может дать украинскому предпринимателю»
//15 июля, в 19.00, в Креативном пространстве «Часопис» мы решили поднять старую почти как этот мир тему, вокруг которой споры ведутся уже несколько лет — что может дать украинской технологической отрасли опыт других стран.
//    бизнес
//15 июля Киев, офис, ZNOua, ул. Саксаганского 24, офис 15
//Мастер-класс «GMAT: движемся к цели 700+!» Мастер-класс «GMAT: движемся к цели 700+!»
//Успешно сдать GMAT — задача не из простых. Но если вы планируете, или пока еще только мечтаете, поступить на МВА, то именно этому тесту стоит уделить особое внимание.
//    бизнес, обучение
//15 июля Киев, ул. Казимира Малевича 86 О, (раньше ул. Боженко), офис Cogniance (ст. метро "Либідська")
//Восьмая встреча Clojure-сообщества Восьмая встреча Clojure-сообщества
//Поговорим о том, что было на EuroClojure- о чем говорили докладчики, о чем говорили в кулуарах, как поменялись акценты за год-два и чего ждать в ближайшем будущем.
//3 идутклубные встречи
//15 июля Киев
//Clojurians meeting #8 Clojurians meeting #8
//Пятнадцатого июля состоится восьмая встреча киевского Clojure-сообщества в офисе компании Cogniance.
//1 идетклубные встречи
//15 июля Київ, центр інновацій та підприємництва iHUB, вул. Рибальська, 22, бізнес-центр "Башта №5" 3-й підїзд, вхід зі двору
//Deciding on when to ‘Fix’ or ‘Kill’ a product/project Deciding on when to ‘Fix’ or ‘Kill’ a product/project
//Під час свого майстер-класу Марк Басс проведе діагностику головних причин невдач, як не занапастити проект ще до того як він почався. На власному досвіді порадить що робити, коли відчуваєш, що з проектом щось не те, а саме коли ще є шанси на успіх шляхом роботи над помилками, а коли єдиним виходом є вихід продукту з ринку.
//    бизнес
//17 июля (пятница)
//17 — 18 июля Киев
//Владение каркасом разработки Spring Security Владение каркасом разработки Spring Security
//Курс даст слушателям представление о Spring Security Framework — библиотеке для обеспечения безопасности в проектах, разрабатываемых с использованием Spring Framework.
//    обучение, технологии
//18 июля (суббота)
//18 июля Киев
//Summer Testathon > Летняя забава для тестировщиков ;) < Summer Testathon > Летняя забава для тестировщиков ;) <
//Бывалый Middle QA и хочешь потусить с пользой для тех. скилла? Хватит нудиться, стань участником Summer Testathon`a!
//    2 идутQA, соревнование
//← Сtrl 12	Ctrl →
