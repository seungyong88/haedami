<template>
  <base-layout page-title="Add a Memory">
    <create-memory-form @save-memory="saveMemory" />
  </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/menu/CreateMemoryForm.vue';
import BaseLayout from '../components/base/BaseLayout.vue';

export default {
  components: { 
    CreateMemoryForm,
    BaseLayout
  },
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/tabs/menu');
    }
  }
}
</script>