<template>
  <div class="container">
    <div class="title">
      <span class="iconify" data-icon="fluent:hat-graduation-20-regular"></span>
      <h1>Formação</h1>
    </div>
    <div class="lista">
      <curso ano="2013" icon="la:industry" descricao="Mestre em Engenharia da Produção UFPR"></curso>
      <curso ano="2010" icon="carbon:ai-results" descricao="Especialização em Gestão Estratégica de Tecnologia e Inovação UTFPR"></curso>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Curso from './Curso.vue';

@Component({
  components: {
    Curso,
  },
})
export default class Formacao extends Vue {
  
}
</script>

<style scoped lang="scss">
  $small: 640px;
  $medium: 940px;
  div.container {
      display: flex;
      flex-direction: column;
      background: #F0E2A3;
      width: 100%;
      height: 370px;
      overflow-x: auto;
      overflow-y: hidden;
      div.title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        align-items: center;
        svg.iconify {
          font-size: 300%;
        }
        h1 {
            font-size: 36px;
        }
        img {
            width: 96px;
        }
      }
      div.lista {
        display: flexbox;
        flex-direction: column;
      }
  }
</style>
