<template>
  <div class="container">
    <div class="title">
      <h1>O que faço</h1>
      <img src="../assets/healthicons-factory-worker-outline@2x.svg"/>
    </div>
    <p>
        Ajudo empersas e profissionais a solucionarem seus problemas por meio de metodologias consolidadas,
        experiência, e, principalmente, agregando as competências necessárias através de uma rede de relacionamentos,
        focada na inovação tecnológica
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Oque extends Vue {
  
}
</script>

<style scoped lang="scss">
  $small: 640px;
  $medium: 940px;
  div.container {
      display: flex;
      flex-direction: column;
      background: #C1d37f;
      width: 100%;
      height: 370px;
      overflow-x: auto;
      overflow-y: hidden;
      @media screen and (min-width: $small) {
          height: 276px;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
      }
      &:before {
          content: "";
        position: absolute;
        width: 100%;
        height: 370px;
        z-index: 1;
        background: url('../assets/graphic.png'), #C1d37f;
        background-repeat: no-repeat, repeat;
        background-blend-mode: multiply, normal;
        background-size: 180%;
        background-position-y: 20%;
        filter: opacity(0.2);
        @media screen and (min-width: $small) {
            height: 276px;
        }
      }  

      div.title {
        margin-top: 10px;
        z-index: 2;
        text-align: center;
        width: 100%;
        max-width: 400px;
        h1 {
            font-size: 36px;
        }
        img {
            width: 96px;
        }
      }
      p {
          z-index: 2;
          width: calc(100% - 2*4vw);
          max-width: 40vw;
          margin: 10px 4vw;
        //   padding: 10px 4vw;
      }
  }
</style>
