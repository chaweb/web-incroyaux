<template lang="pug">
.container
    h1 {{error.statusCode}}
    h1(v-if="error.statusCode === 404") La page n'a pas été trouver
    h1(v-else) erreur récurante (si cela se produit regulièrement, contacter un membre du staff sur le 
        a(href="https://discord.gg/ZVQnJtYteq") discord
        |)
    nuxtLink(to="/").list__item
                fa(icon="fa-solid fa-home")
                | menu
</div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style lang="sass" scoped>
.container
    width: 100vw
    height: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 1rem
    h1
        font-size: 2rem
    a
        font-size: 1.5rem

</style>
