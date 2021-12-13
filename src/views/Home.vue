<template>
  <div>
    <formacao></formacao>
    <header-page></header-page>
    <oque></oque>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderPage from '@/components/Header.vue';
import Oque from '@/components/Oque.vue';
import Formacao from '@/components/Formacao.vue';

@Component({
  components: {
    HeaderPage,
    Oque,
    Formacao,
  },
})
export default class Home extends Vue {}
</script>
