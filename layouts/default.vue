<template lang="pug">
.layout
    layoutNavbar
    nuxt.page
    layoutBottombar
</template>

<style lang="sass" scoped>
.page
    padding: 10rem 0
    min-height: 90vh 
</style>

<script>
export default {
    data () {
        return {
            discordData: {}
        }
    },
    async mounted() {
        this.socket = this.$nuxtSocket({
            // nuxt-socket-io opts: 
            name: 'home', // Use socket "home"
            channel: '/index', // connect to '/index'

            // socket.io-client opts:
            reconnection: false
        })
        this.discordData = (await this.socket.emitP('dataDisord')).incroyaux
        console.log(this.discordData)
        this.$store.commit('discordDataChange', this.discordData)
        console.log(this.$store.discordData)
    },
}
</script>