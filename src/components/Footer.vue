<template>
  <div class="footer">
    <div class="container">
      <div class="footer_row d-flex jcsb aic">
        <div class="header__logo">
          <a href="#"
            ><img src="/src/assets/images/logo_footer.png" alt=""
          /></a>
        </div>
        <div class="footer__tels d-none d-md-flex">
          <div class="footer__tel">
            <span>Бесплатный звонок</span>
            <a href="tel:88005001196">8 (800) 500-11-96</a>
          </div>
          <div class="footer__tel">
            <span>Санкт-Петербург</span>
            <a href="tel:88123341141">8 (812) 334-11-41</a>
          </div>
          <div class="footer__tel">
            <span>Москва</span>
            <a href="tel:84953748069">8 (495) 374-80-69</a>
          </div>
        </div>
        <div class="d-none d-md-block footer__soc">
          <p>Мы в соц. сетях</p>
        </div>
      </div>
      <div class="footer_row footer__nav d-flex flex-wrap jcsb">
        <div class="footer__nav_block">
          <b><a href="#">Каталог товаров</a></b>
          <div class="collapse d-md-block">
            <a href="">DJ</a>
            <a href="">Микрофоны</a>
            <a href="">Студия</a>
            <a href="">Звук</a>
            <a href="">Свет</a>
            <a href="">Клавиши</a>
            <a href="">Гитары</a>
            <a href="">Наушники</a>
            <a href="">Ударные</a>
            <a href="">Коммутация</a>
            <a href="">Кейсы</a>
          </div>
        </div>
        <div class="footer__nav_block">
          <b><a data-toggle="collapse" href="#collapseExample1">Компания</a></b>
          <div class="collapse d-md-block" id="collapseExample1">
            <a href="">О компании</a>
            <a href="">Статьи</a>
            <a href="">Новости</a>
            <a href="">Звук</a>
            <a href="">Вакансии</a>
            <a href="">Контакты</a>
            <a href="">Политика конфиденциальности</a>
          </div>
        </div>
        <div class="footer__nav_block">
          <b
            ><a data-toggle="collapse" href="#collapseExample">Наши сайты</a></b
          >
          <div class="collapse d-md-block" id="collapseExample">
            <a href="">CreativeSoft</a>
            <a href="">PRO.DJ-Store</a>
            <a href="">СтудиоЦентр</a>
            <a href="">Инстэлс</a>
            <a href="">SZ-Audio</a>
          </div>
        </div>

        <div class="footer__nav_block">
          <b
            ><a data-toggle="collapse" href="#collapseExample2">Юр. лицам</a></b
          >
          <div class="collapse d-md-block" id="collapseExample2">
            <a href="">Инсталляции</a>
            <a href="">Оптовые поставки</a>
            <a href="">Участие в торгах</a>
            <a href="">Как стать дилером</a>
          </div>
        </div>

        <div class="footer__nav_block">
          <b><a data-toggle="collapse" href="#collapseExample3">Справка</a></b>
          <div class="collapse d-md-block" id="collapseExample3">
            <a href="#" title="Оплата товара">Оплата товара</a>
            <a href="#" title="Доставка">Доставка</a>
            <a href="/kak-oformit-zakaz/" title="Как оформить заказ"
              >Как оформить заказ</a
            >
            <a href="/garantiya-i-vozvrat/" title="Гарантия и возврат"
              >Гарантия и возврат
            </a>
            <a
              href="/bonusy-i-aktsii/podarochnye-sertifikaty/"
              title="Подарочные сертификаты"
              >Подарочные сертификаты</a
            >
            <a href="/bundle/" title="Креативный комплект"
              >Креативный комплект</a
            >
            <a href="/bonusy-i-aktsii/bonusnye-rubli/" title="Бонусные рубли"
              >Бонусные рубли</a
            >
          </div>
        </div>
      </div>
      <div class="footer_row bottom d-flex flex-wrap jcsb aic">
        <div class="d-block d-md-none footer__soc">
          <p>Мы в соц. сетях</p>
        </div>
        <div class="bottom__left col-12 col-md-4 d-flex flex-wrap aic">
          <div class="age18">18+</div>
          <div class="bottom_text col-12 col-md-9">
            <p class="mb-2">
              Внимание! Данный сайт носит исключительно информационный характер
              и не является публичной офертой, определяемой положениями Статьи
              437(2) ГК РФ.
            </p>
            <p>© 2008-2021 Группа компаний DJSTORE</p>
          </div>
        </div>
        <div class="footer__payments col-12 col-md-5">
          <div class="d-flex flex-wrap">
            <img alt="Visa" src="/src/assets/images/pay/1.png" />
            <img alt="Mastercard" src="/src/assets/images/pay/2.png" />
            <img alt="Maestro" src="/src/assets/images/pay/3.png" />
            <img alt="JCB" src="/src/assets/images/pay/4.png" />
            <img alt="Google Pay" src="/src/assets/images/pay/5.png" />
            <img alt="Apple Pay" src="/src/assets/images/pay/6.png" />
            <img alt="Samsung Pay" src="/src/assets/images/pay/7.png" />
            <img alt="Сбербанк" src="/src/assets/images/pay/8.png" />
            <img alt="mir" src="/src/assets/images/pay/9.png" />
            <img alt="Тинькофф" src="/src/assets/images/pay/10.png" />
            <img alt="Почта банк" src="/src/assets/images/pay/11.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
