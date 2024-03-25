<script setup>
import Header from "~/components/GlobalComponents/Header.vue";
import Footer from "~/components/GlobalComponents/Footer.vue";

const theme = 'light';
</script>

<template>
  <Header :theme="theme"/>
  <NuxtPage/>
  <Footer/>
</template>

<style scoped lang="scss">

</style>