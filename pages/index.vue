<template lang="pug">
.content
    .map

    .desc
        h2 
            span Les Incroyaux 
            |  c'est quoi ?
        .grid
            li 
                span Un serveur semi-RP sur le thème medieval dans sa version 1.1
                img(src="/spawn.jpg" width="250" height="250")
            li#staff
                span {{staff}} membre{{staff <= 1 ? '' : 's'}} du staff à votre écoute
            li 
                span Des mods et un launcher pour ne pas s'ennuyer
            li 
                span Des multiples évents réalisables
            li 
                span Facile à prendre en main

    .discord

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
    

    mounted(){
         document.querySelector("#staff").addEventListener('mouseenter', async () => {
            for(let i = 0; i <= 44; i++){
                await staffWait()
                console.log(this.staff)
                this.staff = i
            }
        })
    },
    data () {
        return {
            staff: 44
        }
    },
  
  

}
</script>


<style lang="sass" scoped>
.desc
    width: 100vw
    display: flex
    flex-direction: column
    align-items: stretch
    padding: 0 5rem
    font-size: 1.25rem
    h2
        font-size: 2rem
        margin: 0 auto
        span
            @include light
                color: $primary
            @include dark
                color: $primary--2
    .grid
        padding: 3rem 0
        display: flex
        justify-content: center
        flex-wrap: wrap
        gap: 2rem
        li
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

            &::after
                content: ''
                display: block
                position: absolute
                left: 0
                top: 0
                width: 100%
                height: 3px
                z-index: -1
                background: white
                transition: .5s
                filter: blur(3px)
                opacity: 0
            span
                text-align: justify
                width: max-content
                margin: auto 1rem
            
            &:hover
                transform: scale(1.2) 
                
                &::after
                    animation-duration: .7s
                    animation-name: hoverImg


@keyframes hoverImg 
  from 
    opacity: 0
    top: 0%
  
  75% 
    opacity: .45
    top: 75%
  

  to 
    opacity: 0
    top: 100%
</style>

