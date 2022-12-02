<template>
  <div>
        <Navbar />

    <slot />


  </div>
</template>

<script setup lang="ts">

const navbarOpen = ref<boolean>(false)

const toggleNavbar = () => { navbarOpen.value = !navbarOpen.value }

</script>

<style>
nav.navbar {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
}
</style>
