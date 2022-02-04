<template>
  <base-layout 
    :page-title="loadedMenu ? loadedMenu.title : 'Loading...'" 
    page-default-back-link="/tabs/order"
  >
    <h2 v-if="!loadedMenu">상세 페이지를 찾을 수 없습니다.</h2>
    <menu-overview
      v-else
      :item="loadedMenu"
    >
    </menu-overview>
   
  </base-layout>
</template>

<script>
import BaseLayout from '../components/base/BaseLayout.vue';
import MenuOverview from "@/components/menu/MenuOverview.vue";
// import { IonTabBar, IonTabs } from '@ionic/vue'; 

export default {
  data() {
    return {
      menuId: this.$route.params.id,
    }
  },
  components: { 
    BaseLayout, 
    MenuOverview,
  },
  // watch: {
  //   '$route'(currentRoute) {
  //     console.log(currentRoute)
  //     this.memoryId = currentRoute.params.id;
  //   }
  // },
  computed: {
    loadedMenu() {
      console.log(this.menuId)
      return this.$store.getters.item(this.menuId);
    }
  }
}
</script>