<template>
  <div class="container">
    <div class="title">
      <h1>Gilberto Passos Lima</h1>
      <h2>Inovação &amp; Solução de problemas</h2>
      <h3>Praticidade &amp; Sistemas &amp; Automação</h3>
    </div>
    <img src="../assets/IMG_20190505_212405544 1.png"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeaderPage extends Vue {
  
}
</script>

<style scoped lang="scss">
  $small: 640px;
  $medium: 940px;
  div.container {
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    overflow: hidden;
    background: url('../assets/jigsaw.png');
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (min-width: $small) {
      height: 360px;
      flex-direction: row;
      justify-content: space-around;
      align-content: space-around;
      align-items: none;
    }
    @media screen and (min-width: $medium) {
      height: 395px;
    }
    // &:before {
    //   content: "";
    //   position: absolute;
    //   width: 200%;
    //   height: 200%;
    //   top: -50%;
    //   left: -50%;
    //   z-index: -1;
    //   background-repeat: repeat;
    //   background-blend-mode: multiply, normal;
    //   background-size: 80%;
    //   filter: opacity(0.5);
    // }
    div.title {
      min-width: 326px;
      font-family: 'Libre Franklin', sans-serif;
      font-style: normal;
      font-weight: bold;
      color: #641034;
      display: flex;
      flex-direction: column;
      padding: 0px 1vh;
      text-align: center;
      font-size: 24px;
      order: 2;
      @media screen and (min-width: $small) {
        font-size: min(32px,3.5vw);
        order: 1;
      }
      @media screen and (min-width: $medium) {
        top: calc(50% - 395px/2);
        font-size: 42px;
        order: 1;
      }
      h1, h2, h3 {
        margin: 0;
      }
      h1 {
        font-size: 100%;
      }
      h2 {
        font-size: 80%;
      }
      h3 {
        font-size: 70%;
      }
    }
    img {
      order: 1;
      height: 205px;
      border-radius: 100%;
      background: #E2D58B;
      @media screen and (min-width: $small) {
        height: 80%;
        align-self: flex-end;
        border-radius: 0px;
        background: none;
      }

    }
    div.background {
      position: absolute;
      width: 1761.16px;
      height: 624.01px;
      left: -294.35px;
      top: 23.49px;
      z-index: -1;

      background: url('../assets/jigsaw.png'), #E2D58B;
      background-blend-mode: multiply, normal;
      transform: rotate(-8deg);
    }
  }
</style>
