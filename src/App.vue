<template>
    <TopMenu></TopMenu>
    <main class="m-10">
      <Dashboard></Dashboard>
    </main>
    <FooterPage></FooterPage>
</template>
<script>
import TopMenu from './views/layout/TopMenu.vue';
import Dashboard from './views/Dashboard.vue';
import FooterPage from './views/layout/FooterPage.vue';
export default {
    components: { TopMenu, Dashboard, FooterPage }
}
</script>