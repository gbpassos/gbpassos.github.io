<template>
  <div>
    <header-page></header-page>
    <oque></oque>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderPage from '@/components/Header.vue';
import Oque from '@/components/Oque.vue';

@Component({
  components: {
    HeaderPage,
    Oque,
  },
})
export default class Home extends Vue {}
</script>
