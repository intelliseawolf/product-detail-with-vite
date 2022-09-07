<template>
  <div class="card_page">
    <div class="card_page__section section">
      <div class="card_page__container container">
        <div class="card_page__row card_page__container__top row jcsb">
          <div class="col-12 col-md-7 pl-0">
            <div class="card_page__container__top_caption">
              <h1>
                <span class="d-none d-md-block">{{ product.fullname }}</span>
                <span class="d-md-block">{{ product.catname }}</span>
              </h1>
            </div>
          </div>
          <div class="col-12 col-md-5 p-0">
            <div
              class="labels d-flex flex-wrap d-flex justify-content-start justify-content-md-end"
            >
              <div class="newitem_label label hover">
                <span
                  class="iconify"
                  data-icon="fluent:star-20-regular"
                  style="color: white"
                  data-height="16"
                  data-flip="horizontal"
                ></span>
                <div class="newitem_label_hover label_hover_p">
                  <p>Новинка</p>
                </div>
              </div>
              <div class="freedelivery_label hover label">
                <span
                  class="iconify"
                  data-icon="ph:truck"
                  style="color: white"
                  data-height="16"
                ></span>
                <div class="freedelivery_label_hover label_hover_p">
                  <p>Бесплатная доставка</p>
                </div>
              </div>
              <div class="hit_label hover label">
                <span
                  class="iconify"
                  data-icon="ph:fire"
                  style="color: white"
                  data-height="14"
                ></span>
                <div class="hit_label_hover label_hover_p"><p>Хит</p></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card_page__row card_page__rating row align-items-center justify-content-between justify-content-md-start"
        >
          <div class="cardblock__rating">
            <span class="rating">5,0</span>
            <span class="cardblock__reviews_link"
              >{{ product.brand.value }} отзыва</span
            >
          </div>
          <div class="list-fav">
            <a href="#" class="add_to_favorite active"
              ><span class="icon_favorite"></span
              ><span class="add_to_list_text d-none d-md-inline-block"
                >В избранном</span
              ></a
            >
            <a href="#" class="add_to_list"
              ><span class="iconify" data-icon="ph:list-plus"></span
              ><span class="add_to_list_text">Сравнить</span></a
            >
          </div>
          <div class="cardblock_articul">Арт. {{ product.art }}</div>
        </div>
        <div class="card_page__row row">
          <div class="col-1 pl-0 d-none d-md-block">
            <img
              v-for="(photo, index) in productGalleryPhotos"
              :key="photo.id"
              :src="photo.photo"
              alt="photo"
              @click="selectPhoto(index)"
              :class="{
                'photo-preview': true,
                selected: selectedPhoto == index,
              }"
            />
            <div class="more_photo" @click="lightBoxIndex = 0">Еще 2</div>
            <CoolLightBox
              :items="allGalleryPhotos"
              :index="lightBoxIndex"
              @close="lightBoxIndex = null"
            >
            </CoolLightBox>
          </div>

          <div class="col-5 pl-0 d-none d-md-block">
            <carousel
              :gutter="15"
              :feather="15"
              ref="photoCarousel"
              @change="changeCarousel"
            >
              <div v-for="(photo, index) in productGalleryPhotos" :key="index">
                <img
                  :src="photo.photo"
                  height="400"
                  @click="lightBoxIndex = index"
                />
              </div>
            </carousel>
          </div>

          <div class="col-12 col-md-3 p-xs-0 card_page__parametrs_col">
            <div class="card_page__parametrs">
              <div class="card_page__parametrs_row">
                <span>Тип микрофона</span>
                <b>{{ product.brand.text }}</b>
              </div>
              <div class="card_page__parametrs_row">
                <span>Размер упаковки</span>
                <b
                  >{{ Number(product.width) }} х {{ Number(product.depth) }} х
                  {{ Number(product.height) }} см</b
                >
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3 pr-md-0 card_page__price_card_col">
            <div class="card_page__price_card">
              <div class="cardblock__bottom">
                <div
                  class="cardblock__price_block d-flex justify-content-between align-items-end"
                >
                  <div class="cardblock__prices">
                    <div class="cardblock__new_price">
                      {{ product.price }} ₽
                    </div>
                  </div>
                </div>
                <div class="cardblock__delivery">
                  <button class="btn_blue cardblock__btn d-none d-md-flex">
                    <span
                      class="iconify mr-1"
                      data-icon="ph:shopping-cart-simple"
                      style="color: #fff"
                      data-height="24"
                    >
                    </span>
                    <p class="d-none d-lg-block">Добавить в корзину</p>
                    <p class="d-block d-lg-none">Добавить</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card_page__section section mt-5">
        <div class="card_page__container container">
          <div class="card_page__row row jcsb">
            <div class="card_page__tabbar d-flex">
              <a
                href="#card_page__caption"
                data="card_page__caption"
                class="card_page__tabbar_link anchor_link active"
                >Описание</a
              >
            </div>
          </div>
          <div class="card_page__row row jcsb" id="card_page__caption">
            <div class="col-12 col-md-8 pl-0">
              <h4 class="d-none d-md-block">Описание</h4>
              <div class="card_page__caption" v-html="product.text_full"></div>
            </div>
            <div class="col-12 col-md-4 p-xs-0 pr-md-0">
              <div class="card_page__brand_block">
                <div class="braand">
                  <a href=""
                    ><img
                      src="/src/assets/images/brands/Brand_Sennheiser.svg"
                      alt="Brand_Sennheiser Image"
                  /></a>
                </div>
                <div class="divider"></div>
                <div class="brand_links">
                  <a href="">Все радиосистемы Sennheiser</a>
                  <a href="">Все товары Sennheiser</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Contact />
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Carousel from "vue-ssr-carousel";
import CoolLightBox from "vue-cool-lightbox";

import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import "vue-ssr-carousel/index.css";

import data from "../data/input.json";

export default defineComponent({
  name: "ProductDetail",
  components: {
    Carousel,
    CoolLightBox,
    Contact,
    Footer,
  },
  methods: {
    selectPhoto(index) {
      this.selectedPhoto = index;
      this.$refs.photoCarousel.goto(index);
    },
  },
  computed: {
    allGalleryPhotos() {
      return data.model.gallery.photos.map((photo) => photo.photo);
    },
  },
  setup() {
    const product = ref(data.model);
    const lightBoxIndex = ref(null);
    const selectedPhoto = ref(0);
    const productGalleryPhotos = ref(data.model.gallery.photos.slice(0, 3));

    const changeCarousel = ({ index }) => {
      selectedPhoto.value = index;
    };

    return {
      product,
      productGalleryPhotos,
      selectedPhoto,
      lightBoxIndex,
      changeCarousel,
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper-slide.swiper-slide-active {
  height: 400px !important;
}

.photo-preview {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 8px;
  padding: 4px;

  &.selected {
    border: 1px solid #5568ff;
    border-radius: 4px;
  }
}

.more_photo {
  cursor: pointer;
}

.ssr-carousel-slide {
  text-align: center;

  img {
    width: 90%;
  }
}
</style>
