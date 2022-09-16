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

import {request, gql} from 'graphql-request';

import { DirectusLogin, DirectusPassWord, DirectusLink } from '../server/io/client.json';

export default {
    methods: {
        directusToken : async() => {
            const data = await request(`${DirectusLink}/system`, gql`
                mutation {
                    auth_login(email: "${DirectusLogin}", password: "${DirectusPassWord}") {
                        access_token
                        refresh_token
                    }
                }
            `).then(function(r) {return r})

            return await (data.auth_login)
        },


        GraphQLPost : async(quest) =>{
            const data = await this.directusToken().then(r => {
                return request(`${DirectusLink}?access_token=${r.access_token}`, quest).then((r) => {return r})
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
        this.discordData = (await this.GraphQLPost(gql`
        query {
            incroyaux{
                    key
                    value
            }
        }`))
        console.log(this.discordData)
        this.$store.commit('discordDataChange', this.discordData)
        console.log(this.$store.discordData)
    },
}
</script>