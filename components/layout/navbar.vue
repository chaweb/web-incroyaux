<template lang="pug">
navbar.navbar
    .navbar__burger(:id="`${opened ? 'opened' : ''}`")
        button(@click="opened = !opened" )
            fa.navbar__burger__icon(icon="fa-solid fa-bars")
        .list
            nuxtLink(to="/").list__item
                fa(icon="fa-solid fa-home")
                | menu
            a(href="http://www.alsacreations.com/astuce/lire/Article_HTML5_download.txt" download="luncher").list__item
                fa(icon="fa-solid fa-download")
                | download
    h1.navbar__title
        les Incroyaux
    button(@click="changeColors()" ).navbar__color
        p {{$colorMode.preference === 'system' ? 'système' : ($colorMode.preference === 'dark' ? 'noir' : 'blanc') }}
        fa(:icon="$colorMode.preference === 'system' ? 'fa-desktop' : ($colorMode.preference === 'dark' ? 'fa-moon' : 'fa-sun')").fa-fw

</template>


<script>
export default {
    methods: {
        changeColors(){
            this.$colorMode.preference = this.themes[(this.themes.indexOf(this.$colorMode.preference)+1)%(this.themes.length)]
        }
    },
    data () {
        return {
            themes: ["system", "dark", "light"],
            opened: false,
            mounted: false
        }
    },
}
</script>

<style lang="sass" scoped>

.navbar
    *
        margin: 0
    position: fixed
    top: 0
    left: 0
    z-index: 99

    display: flex
    flex-direction: row

    width: 100vw
    
    padding: 1rem 2rem
    
    font-size: 1.5rem
    @include light
        background-color: darken($light-bg, 10%)
    @include dark
        background-color: lighten($dark-bg, 20%)
    &__title 
        margin: 0 2rem
    &__color
        display: flex
        flex-direction: row
        margin-left: auto
        justify-content: center
        align-items: center
        justify-content: space-between  
        width: 12rem
    &__burger
        button
            transform: scale(1)
            &:hover
                transform: scale(1.1)
                svg
                    filter: drop-shadow(0 0 1rem #fff)
        .list
            position: absolute
            top: 100%
            left: 0
            z-index:0 
            display: flex
            flex-direction: column
            opacity: 0
            transform: translateY(-50%) scaleY(0)
            height: 0
            transition: .3s
            width: max-content
            padding: 1rem 0
            @include light
                background-color: darken($light-bg, 10%)
            @include dark
                background-color: lighten($dark-bg, 20%)
            &__item
                padding: .5rem 1rem
                margin: .5rem 1rem
                border-radius: 20px
                svg
                    margin-right: 1rem
                &:hover
                    @include light
                        color: $light-text
                        background-color: darken($light-bg, 15%)
                    @include dark
                        color: $dark-text
                        background-color: lighten($dark-bg, 25%)
        & button:focus-visible +, &#opened
            .list
                opacity: 1
                height: auto
                transform:  translateY(0) scaleY(1)
                transition: .3s
</style>