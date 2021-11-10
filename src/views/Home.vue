<template>
  <div>
    <header-page/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderPage from '@/components/Header.vue';

@Component({
  components: {
    HeaderPage,
  },
})
export default class Home extends Vue {}
</script>
