<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" v-if="tabsFlag">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/order">
          <ion-icon :icon="cafe" />
          <ion-label>주문</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/setting">
          <ion-icon name="settings-sharp"></ion-icon>
          <ion-label>설정</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, settingsOutline, triangle, cafe } from 'ionicons/icons';

export default {
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  data() {
    return {
      tabsFlag: true,
    }
  },
  setup() {
    return {
      ellipse, 
      settingsOutline, 
      triangle,
      cafe
    }
  },
  created() {
    this.tabsFlag = (this.$route.matched[1].path !== "/tabs/order/:id");

    const darkModeFlag = localStorage.getItem("darkMode"); 
    console.log(darkModeFlag);
  },
  watch: {
    '$route'(currentRoute) {
      this.tabsFlag = (currentRoute.matched[1].path !== "/tabs/order/:id");
    }
  },
}
</script>