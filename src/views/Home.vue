<template>
  <div>
    <top></top>
    <header-page></header-page>
    <oque></oque>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderPage from '@/components/Header.vue';
import Oque from '@/components/Oque.vue';
import Top from '@/components/Top.vue';

@Component({
  components: {
    HeaderPage,
    Oque,
    Top,
  },
})
export default class Home extends Vue {}
</script>
