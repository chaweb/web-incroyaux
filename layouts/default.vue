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

import { DirectusLogin, DirectusPassWord } from '../server/io/client.json';

export default {
    methods: {
        async directusToken () {
            const data = await this.$axios.$post(`/api/auth/login`,
            {
                "email": "${DirectusLogin}",
                "password": "${DirectusPassWord}"
            })

            return await (data.auth_login)
        },


        async GraphQLPost(quest) {
            const data = await this.directusToken().then(r => {
                return this.$axios.$post(`/api/?access_token=${r.access_token}`, quest)
            })
            return data
        }
    },
    data () {
        return {
            discordData: {}
        }
    },
    async mounted() {
        this.discordData = await this.GraphQLPost(`
        query {
            incroyaux{
                    key
                    value
            }
        }`)
        console.log(this.discordData)
        this.$store.commit('discordDataChange', this.discordData)
        console.log(this.$store.discordData)
    },
}
</script>