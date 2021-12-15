<template>
  <div>
    <top></top>
    <formacao></formacao>
    <header-page></header-page>
    <oque></oque>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderPage from '@/components/Header.vue';
import Oque from '@/components/Oque.vue';
import Top from '@/components/Top.vue';
import Formacao from '@/components/Formacao.vue';

@Component({
  components: {
    HeaderPage,
    Oque,
    Top,
    Formacao,
  },
})
export default class Home extends Vue {}
</script>
