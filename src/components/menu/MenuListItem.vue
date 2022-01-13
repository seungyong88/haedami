<template>
  <ion-item :router-link="`/tabs/order/${item.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="`${item.image}`" :alt="item.title" />
    </ion-thumbnail>
    <ion-label>
      {{ item.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';
export default {
  props: ['item'],
  components: {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    }
  }
}
</script>

<style scoped>
  ion-toolbar {
    --background: var(--ion-color-primary);
    --color: var(--ion-color-primary-contrast);
  }
</style>