<template>
  <ion-list>
    <menu-list-item 
      v-for="item in menu"
      :key="item.id"
      :item="item"
    ></menu-list-item>
  </ion-list>  
</template>

<script>
import { IonList } from "@ionic/vue";
import MenuListItem from "./MenuListItem.vue";

export default {
  props: ["menu"],
  components: {
    IonList,
    MenuListItem
  }
}
</script>