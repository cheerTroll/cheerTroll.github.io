if (!!!cheer) {
    var cheer = {}
}

cheer = {
    app: null,
    init: function () {
        cheer.app = new Vue({
                el: '#app',
                data: {
                    step: 0,
                    questions: [
                        {
                            question: 'Элемент называется винт или full up?',
                            answers: [
                                { text: 'Full up', code: 0 },
                                { text: 'Винт', code: 1 },
                            ],
                        },
                        {
                            question: 'Фчр или Счр?',
                            answers: [
                                { text: 'Счр', code: 0 },
                                { text: 'Фчр', code: 1 },
                            ],
                        },
                        {
                            question: 'Кто главнее в станте?',
                            answers: [
                                { text: 'База', code: 0 },
                                { text: 'Флаер', code: 1 },
                            ],
                        },
                    ],

                    crucialQuestions: {
                        '000': {
                            question: 'Делать сильную прогу или делать хуету и искать сбавки у других?',
                            answers: [
                                { text: 'Сбавки', code: 0 },
                                { text: 'Прога', code: 1 },
                            ],
                            0: {
                                title: 'Андрей Красс',
                                img: 'src/img/krass.jpg',
                                text: 'Тренируешь, без пяти минут, чемпионов России, Европы и мира, при этом никогда в жизни не делая ничего сложнее препа. Самый талантливый тренер и судья(нет). Зато похож на Пьера Вудмана.',
                            },
                            1: {
                                title: 'Аникеев Павел',
                                img: 'src/img/anikeev.jpg',
                                text: 'Кроешь хуями другого тренера, звукаря, судей, свою команду и поэтому они побеждают. Кроешь хуями систему и не прогибаешься. За это система кроет хуем тебя, твою команду и прикрывает хуем твоё чемпионство на россии.',
                            },
                        },
                        '001': {
                            question: 'Подслушка или Страх и ненависть?',
                            answers: [
                                { text: 'Страх и ненависть', code: 0 },
                                { text: 'Подслушка', code: 1 },
                            ],
                            0: {
                                title: 'Бульбазавр',
                                img: 'src/img/bulbazavr.jpg',
                                text: 'Кто ты? Хуй пойми. Откуда? Хуй знает. Что делаешь? Какую-то хуйню, но это смешно! БОЛЬШЕ ХУЁВ БОГУ ХУЁВ!!!!',
                            },
                            1: {
                                title: 'Любая тёлка из NO LIMIT',
                                img: 'src/img/nolimit.jpg',
                                text: 'Засираешь своими комментами "подслушано у чирлидеров". В принципе, это все чем ты занимаешься в чире.',
                            },
                        },
                        '010': {
                            question: 'Могут ли иностранцы принимать участие в ЧиП России?',
                            answers: [
                                { text: 'Нет', code: 0 },
                                { text: 'Да', code: 1 },
                            ],
                            0: {
                                title: 'Benjamin Kaunda',
                                img: 'src/img/bensad.jpg',
                                text: 'Fuck yourself you fucking racist! You motherfucker, come on you little ass… fuck with me, eh? You fucking little asshole, dickhead cocksucker…You fuckin\' come on, come fuck with me! I\'ll get your ass, you jerk! Oh, you fuckhead motherfucker! Fuck all you and your family! Come on, you cocksucker, slime bucket, shitface turdball! Come on, you scum sucker, you fucking with me? Come on, you asshole!!!',
                            },
                            1: {
                                title: 'Бенжамин Каунда',
                                img: 'src/img/benfunny.jpg',
                                text: 'Да, я тоже считаю что на ЧиП можно всем!',
                            },
                        },
                        '011': {
                            question: 'Делать или учить?',
                            answers: [
                                { text: 'Учить', code: 0 },
                                { text: 'Делать', code: 1 },
                            ],
                            0: {
                                title: 'ForCheer',
                                img: 'src/img/forcheer.jpg',
                                text: 'Когда-то ты был неплохим спортсменом, но захотел денег сейчас работаешь то руками, то ртом. Слишком много времени проводишь со своим другом и о вас уже поползли слухи. Жизненное кредо: "Я не гей, но 20$ это 20$"',
                            },
                            1: {
                                title: 'Михаил Нехолин',
                                img: 'src/img/nуholin.jpg',
                                text: 'Бургеры, кола и метан - вот секрет победы, братан!',
                            },
                        },
                        '100': {
                            question: 'Чирлидинг или Чир-спорт?',
                            answers: [
                                { text: 'Чирлидинг', code: 0 },
                                { text: 'Чир-спорт', code: 1 },
                            ],
                            0: {
                                title: 'Любой адекватный спортсмен',
                                img: 'src/img/anysportsmen.jpg',
                                text: 'Ты умничка, тренируешься, хорошо кушаешь и спишь. Совсем не бухаешь и не жрешь всякую дрянь(нет).',
                            },
                            1: {
                                title: 'Андрей Кокоулин',
                                img: 'src/img/kokoulin.jpg',
                                text: 'Ты и политик, и спортсмен, и судья, и предприниматель и много много кто еще... но короче... вот... лучше бы просто повесился - больше пользы было.',
                            },
                        },
                        '101': {
                            question: 'Деньги или чир?',
                            answers: [
                                { text: 'Деньги', code: 0 },
                                { text: 'Чир', code: 1 },
                            ],
                            0: {
                                title: 'Ольга Таганова',
                                img: 'src/img/taganova.jpg',
                                text: 'В любом деле главное что? Правильно - ВЫ ГО ДА!Предприниматель, настоящий коммерс, продался за бабки.',
                            },
                            1: {
                                title: 'Кто угодно кто не Таганова',
                                img: 'src/img/netaganova.jpg',
                                text: 'Ты развиваешь чирлидинг в России, спишь и видишь сборную РФ Чемпионами Европы и Мира. Работаешь за идею.',
                            },
                        },
                        '110': {
                            question: 'Юниорки или взрослые?',
                            answers: [
                                { text: 'Взрослые', code: 0 },
                                { text: 'Юниорки', code: 1 },
                            ],
                            0: {
                                title: 'Любой парень не чирлидер',
                                img: 'src/img/necheer.jpg',
                                text: 'Ты не чир, хуле тебе тут надо? Пшел нах отсюда! Забудь все что тут прочел и увидел! Всю жизнь довольствовался здоровой спиной и коленями, а чирлидерш видел только на порнхабе - вот и иди нахуй.',
                            },
                            1: {
                                title: 'Артем Архипов',
                                img: 'src/img/arhipov.jpg',
                                text: 'Повелитель юных кисок. Чемпион первенства имени самого себя и обладатель самого большого х... Эго на этой планете. Все это меркнет, когда тебе дают дисквал за то что не умеешь держать язык за зубами в интернет пространстве. Извини, ты не всемогущий.',
                            },
                        },
                        '111': {
                            question: 'Президент или властелин всего?',
                            answers: [
                                { text: 'Президент', code: 0 },
                                { text: 'Властелин всего', code: 1 },
                            ],
                            0: {
                                title: 'Андрей Кравченко',
                                img: 'src/img/kravchenko.jpg',
                                text: 'Босс с большой буквы. Придавал вращение всей этой войне федераций и засиранием соперников и подсуживанием на соревнованиях. Угадай что было осью вращения?',
                            },
                            1: {
                                title: 'Евгений Шурманов',
                                img: 'src/img/shurmanov.jpg',
                                text: 'Кто не курит и не пьет - ровно дишит сильно бьет. Качок, спортсмэн, бизнесмэн, инстаграм-блогер. Казалось бы - золотой человек! Но даже золотому человеку требуется помощь... в твоем случае - логопеда',
                            },
                        },
                    },
                    userAnswers: [],
                    isFinish: false,
                    isFinal: false,
                    finalAnswer: null,
                    result: null,
                },
                methods: {
                    share: cheer.vkontakte,
                    checked: function (e) {
                        let code = e.currentTarget.value,
                            app = cheer.app,
                            step = app.step
                        Vue.set(app.userAnswers, step, code)
                    },
                    nextStep: function () {
                        let app = cheer.app,
                            code = app.userAnswers.join('')

                        if (app.userAnswers.length < app.questions.length) {
                            app.step++
                        } else {
                            if (!app.isFinal) {
                                app.questions.push(app.crucialQuestions[code])
                                app.isFinal = true
                                app.step++
                            } else {
                                code = code.substring(0, code.length - 1)
                                app.result = app.crucialQuestions[code][app.userAnswers[app.userAnswers.length - 1]]
                                app.isFinish = true
                            }
                        }
                        cheer.toUp()
                    },
                },
            },
        )
    },
    t: null,
    toUp: function () {
        let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
        if (top > 0) {
            window.scrollBy(0, -10)
            cheer.t = setTimeout(cheer.toUp(), 20000)
        } else clearTimeout(cheer.t)
        return false
    },

    vkontakte: function () {
        let result = this.result,
            purl = document.URL,
            path = purl.replace('index.html', ''),
            ptitle = 'Я ' + result.title + ' в чирлидинге! Узнай кто в нем ты!',
            pimg = path + result.img

        let url = 'http://vkontakte.ru/share.php?'
        url += 'url=' + encodeURIComponent(purl)
        url += '&title=' + encodeURIComponent(ptitle)
        url += '&image=' + encodeURIComponent(pimg)
        url += '&noparse=true'
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436')
    },
}


document.addEventListener('DOMContentLoaded', cheer.init)
