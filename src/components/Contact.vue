<template>
  <div class="podpiska">
    <div class="container">
      <div class="podpiska__block">
        <form class="podpiska__form">
          <div class="d-flex flex-wrap jcc aic">
            <label for="">Ваш e-mail</label>

            <input
              type="email"
              class="form-control"
              autocomplete="false"
              placeholder="Example@mail.ru"
            />
            <input
              type="submit"
              class="podpiska_btn btn_blue"
              value="Подписаться на рассылку"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact",
});
</script>
