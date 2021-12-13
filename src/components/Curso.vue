<template>
    <div class="container">
        <span class="iconify" v-bind:data-icon="icon"></span>
        <div class="descricao">{{ ano }}</div>
        <div class="descricao">{{ descricao }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Curso extends Vue {
  @Prop() private descricao!: string;
  @Prop() private ano!: string;
  @Prop() private icon!: string;
}
</script>

<style lang="scss" scoped>
    div.container {
        display: felxbox;
        flex-direction: column;
        div.descricao {
            text-align: center;
        }
    }
</style>