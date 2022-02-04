<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>SettingPage</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-label>
            dark mode theme
          </ion-label>
          <ion-toggle @ionChange="onToggleColorTheme($event)"></ion-toggle>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonLabel, IonList, IonItem } from '@ionic/vue';

export default  {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonToggle, IonLabel, IonList, IonItem },
  methods: {
    onToggleColorTheme(e) {
      document.body.classList.toggle('dark', e.detail.checked);

      localStorage.setItem("darkMode", e.detail.checked);
    }

  }
}
</script>