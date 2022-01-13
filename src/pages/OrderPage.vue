<template>
  <base-laylout page-title="Order">
    <template v-slot:actions-end>
      <ion-button router-link="/tabs/menu/add">
        <ion-icon slot="icon-only" :icon="add" router-link="/tabs/menu/add"></ion-icon>
      </ion-button>
    </template>
    <menu-list :menu="menu" />
  </base-laylout>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from "ionicons/icons";
import MenuList from '@/components/menu/MenuList.vue';

export default {
  components: {
    IonButton,
    IonIcon,
    MenuList,
  },
  data() {
    return { add };
  },
  computed: {
    menu() {
      return this.$store.getters.menu;
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