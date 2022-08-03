<template lang="pug">
.btmbar
    .btmbar__col
        h2.btmbar__title reseaux
        a(href="https://discord.gg/ZVQnJtYteq").btmbar__elem discord
        a(href="https://www.instagram.com/rples_incroyaux/").btmbar__elem instagram
    
    .btmbar__col
        h2.btmbar__title telechargement
        a(href="/luncher.exe" download="incroyaux-luncher.exe").btmbar__elem minecraft launcher
            .subtitle (white list par discord)
    
    .btmbar__col
        h2.btmbar__title droit ©
        p tout droit sont réserver à Alexandre Louër
</template>

<style lang="sass" scoped>
.btmbar
    width: 100vw
    padding: 1rem 2rem

    min-height: 10rem
    z-index: 1

    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: 3rem

    width: 100vw
    
    font-size: 1rem
    @include light
        background-color: darken($light-bg, 20%)
    @include dark
        background-color: lighten($dark-bg, 40%)

    &__title
        font-size: 1.5rem 
        margin-bottom: 1rem
    &__col
        display: flex
        flex-direction: column
        margin: 0 6rem 0 1rem
</style>