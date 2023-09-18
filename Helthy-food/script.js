window.addEventListener('DOMContentLoaded', function(){
let tabs = document.querySelectorAll('.tabheader'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader_items');

    function hideTabContent(){


        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item =>{
            item.classList.remove('tabheader___item_active');
        });

    }

    function showTabContent(i=0){
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader___item_active');
    }

    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click',function(event){
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
            if(target==item){
                hideTabContent(i);
                showTabContent(i);
            }
        });
        
        }
    });

    const deadline = '2021-12-11';
    function getTimeRemaining(endTime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000 % 60)),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
            return{
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }


    function getZero(num){
        if (num >= 0 && num < 10){
            return '0' + num;
        } else {
            return num;
        }
    }


    function setClock(selector, endtime){

        const timer = document.querySelector(selector),

        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock(){
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
        setClock('.timer',deadline);



        const modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('modal');

        modalTrigger.forEach(btn=>{
            btn.addEventListener('click',openModal);
        })

        function closeModal(){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
        }

        modal.addEventListener('click', (e) => {
            if (e.target == modal || e.target.getAttribute('data-close') == ''){
                closeModal();
            }
        });

        const modalTimerId = setTimeout(openModal, 300000);
        function showModalByScroll(){
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                openModal();
                window.removeEventListener('scroll',showModalByScroll);
            }
        }
        this.window.addEventListener('scroll', showModalByScroll);


        class MenuCard {
            constructor(src, alt, title, descr, price, parentSelector,...classes) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.price = price;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                this.transfer = 1;
                this.changeToUSD();
            
            }
        changeToUSD(){
            this.price * this.transfer;
        }
    

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0){
                this.classes = "menu__item";
                element.classList.add(this.classes);
            }else{
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost>Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> EUR/день</div>
            </div>
        `;
        this.parent.append(element);
        }
    }
     
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подхвод к приготовлению блюд: больше свежих овощей и фруктов.' +
         'Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();


    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню "Постное" - это тщательный подбор инградиентов: полное отсутствие продуктов животного происхождения,'+
        'молоко из миндаля, овса, кокоса, или гречки, правильное кол-во белков за счет тофу и импортных ', +
        'вегетарианских стейков',
        14,
        ".menu .container"

    ).render();
        









});