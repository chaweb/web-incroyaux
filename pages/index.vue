<template lang="pug">
.content
    .map
        iframe(src="http://node.miridiagame.fr:37019" width="100%" height="100%" scrolling="no")

    .middle
        h2 
            span Les Incroyaux 
            |  c'est quoi ?
        .desc
            .grid
                a 
                    span Un serveur semi-RP sur le thème medieval dans sa version 1.1
                    img(src="/spawn.jpg" width="250" height="250")
                a#staff
                    span {{staff}} membre{{staff <= 1 ? '' : 's'}} du staff à votre écoute
                a 
                    span(src="/spawn.jpg" width="250" height="250") Des mods et un launcher pour ne pas s'ennuyer
                    img(:src="`/arene.jpg`" width="250" height="250") 
                a 
                    span(src="/spawn.jpg" width="250" height="250") Des multiples évents réalisables
                    img(:src="`/port.jpg`" width="250" height="250") 
                a 
                    span(src="/spawn.jpg" width="250" height="250") Facile à prendre en main
                    img(:src="`/house.jpg`" width="250" height="250") 

        .discord
            iframe(:src="`https://discordapp.com/widget?id=720668979928236063&theme=${$colorMode.value}`"
                        width="350" height="500" allowtransparency="true" frameborder="0" )
    .instagram
        script(src="https://apps.elfsight.com/p/platform.js" defer)
        .elfsight-app-e5f1204f-8f44-4b77-bf6c-ea4830fb5167
</template>

<script>
function staffWait() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 500/44);
    });
}
export default {
    computed: {
        staff () {
            return this.$store.state.discordData.filter(elem => elem.key == "staff")[0].value
        }
    },
        

    mounted(){
         document.querySelector("#staff").addEventListener('mouseenter', async () => {
            for(let i = 0; i <= 44; i++){
                await staffWait()
                this.staff = i
            }
        })
    },
    data () {
        return {
        }
    },
  
  

}
</script>


<style lang="sass" scoped>
.map 
    height:30vh
    width: 100vw
    @include flex

    margin-top: -3.25rem
    margin-bottom: 2rem

    iframe
        overflow: hidden

.middle
    width: 100vw
    display: flex
    justify-content: center
    flex-wrap: wrap
    gap: 2rem
    .discord
        margin: auto
  
    h2
        font-size: 2rem
        margin: 0 auto
        span
            @include light
                color: $primary
            @include dark
                color: $primary--2

.desc
    
    width: 80vw
    display: flex
    flex-direction: column
    align-items: stretch
    padding: 0 5rem
    font-size: 1.25rem
        
    .grid
        padding: 3rem 0
        display: flex
        justify-content: center
        flex-wrap: wrap
        gap: 2rem
        a
            position: relative
            list-style: none
            width: 250px
            height: 250px
            margin: 10px
            
            display: flex
            align-content: center
            justify-content: center
            img
                position: absolute
                top: 0 
                left: 0
                z-index: -2
                @include dark
                    filter: brightness(.75)
                @include light
                    filter: brightness(1.65)

            &::before
                content: ''
                display: block
                position: absolute
                left: 0
                top: 0
                width: 100%
                height: 100%
                z-index: -1
                transition: .5s
                filter: blur(2px)
                opacity: 0
                transform: scaleY(0)
                @include dark
                    background: black
                @include light
                    background: white
                
            span
                text-align: justify
                width: max-content
                margin: auto 1rem
            
            &:hover, &:active
                @include light
                    color: $light-text
                @include dark
                    color: $dark-text

                transform: scale(1.2) 
                
                &::before
                    opacity: .7
                    transform: scaleY(0.4)
            &#staff
                background-image: url("/discordChat_light.jpg")
                background-position: top
                background-repeat: no-repeat
                background-size: cover
                @include dark
                    background-image: url("/discordChat_dark.jpg")
                &:hover
                    background-position: bottom
                    
</style>

