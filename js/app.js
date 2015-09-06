(function () {
    var app = angular.module('pledgeStore', []);
    app.controller('PledgeController', function () {
            this.balance = 2;
            this.user='Александр К.';
            this.photo='img/'+this.user+'.jpg';
            this.index = 1;
            this.events = [
                {
                    title: 'Подземный переход на зоологической',
                    price: 1, date: new Date(2015, 07, 08),
                    registred: false, img: "img/per01.jpg",
                    full: "В переходе горит лишь одна лампочка. ступеньки находятся в аварийном состоянии",
                    applicants: ["Алексей С.", "Сергей Л."]
                },
                {
                    title: 'Подземный переход на м.Дружбы народов',
                    price: 1,
                    date: new Date(2015, 07, 09),
                    registred: false,
                    img: "img/per02.jpg",
                    full: "В переходе сломаны перила. Нет рельс для того, чтобы провезти коляску",
                    applicants: ["Александр П.","Сергей Ф."]
                },
                {
                    title: 'Гольф-клуб на Новобеличах',
                    price: 1,
                    date: new Date(2015, 07, 12),
                    registred: false,
                    img: "img/golf_club.jpg",
                    full: "Нет развозки напитков. Мало экзотичных животных на местности",
                    applicants: ["Наталья Р.", "Денис Р.","Александр П.","Андрей В.", "Максим К.", "Леонид Ч.",
                        "Сергей Ф.", "Антон О." ]
                },
                {
                    title: 'Подземный переход на академика Билецкого',
                    price: 1,
                    date: new Date(2015, 07, 12),
                    registred: false,
                    img: "img/per04.jpg",
                    full: "В переходе постоянно валяются шприцы и разбитые бутылки"
                },
                {
                    title: 'Подземный переход на И.Клименка',
                    price: 1,
                    date: new Date(2015, 07, 12),
                    registred: false,
                    img: "img/per05.jpg",
                    full: "Постоянно бегают крысы. Переход задымлен"
                },
                {
                    title: 'Подземный переход на Еревансокй',
                    price: 1,
                    date: new Date(2015, 07, 12),
                    registred: false,
                    img: "img/per01.jpg",
                    full: "В переходе горит лишь одна лампа. Нет перил"
                }
            ];

            if (localStorage.getItem(this.user+"balance")!==null)  {
                console.log("let's take data ");
                this.events= JSON.parse(localStorage.getItem(this.user+"events"));
                this.balance=JSON.parse(localStorage.getItem(this.user+"balance"));
            }

            this.saveData = function () {

                localStorage.setItem(this.user+"events", JSON.stringify (this.events));
                localStorage.setItem(this.user+"balance", JSON.stringify (this.balance));
            };

            this.recalcaccess = function () {
                var i;
                for (i = 0; i < this.events.length; i++) {
                    if (this.events[i].registred) this.events[i].giveMoney = false;
                    else  this.events[i].giveMoney = this.balance < this.events[i].price;
                    //console.log(i + ": " + this.events[i].giveMoney);
                }
            }
            this.delData=function(){
                localStorage.removeItem(this.user+"balance");
            }

            this.recalcaccess();

            this.addPledge = function (index) {
                this.index = index;
                //console.log(this.index);
                if (this.balance >= this.events[index].price) {
                    this.balance -= this.events[index].price;
                    this.events[index].registred = true;
                    this.recalcaccess();
                    this.events[index].applicants.push(this.user);
                    //this.saveData();
                    alert("Вы хотите стать папой для объекта: " + this.events[index].title
                        + " Вы можете подать еще: " + this.balance+" заявок")
                }
                else alert("Вы исчерпали лимит заявок");
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
