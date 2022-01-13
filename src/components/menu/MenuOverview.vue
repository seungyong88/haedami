<template>
  <ion-img :src="item.image" :alt="item.title"></ion-img>
  <ion-list>
    <ion-item>
      <ion-text>
        <h2 class="ion-text-left ion-no-margin ion-margin-top">{{item.title}} <ion-badge :color="item.temperature==='hot' ? 'danger' : 'primary'">{{item.temperature}}</ion-badge></h2>
        <p class="ion-text-left ion-no-margin">
          {{item.title_eng}}
        </p>
        <p class="ion-text-left">
          {{item.description}}
        </p>
        <h2 class="ion-text-left">
          {{numberFormat(item.price)}} 원
        </h2>
      </ion-text>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonImg, IonList, IonItem, IonBadge } from '@ionic/vue';
import { numberFormat } from "@/utils/filter.js";

export default {
  props: ['item'],
  components: {
    IonImg, IonList, IonItem, IonBadge
  },
  created() {
  },
  unmounted() {

  },
  methods: {
    numberFormat
  }
}
</script>