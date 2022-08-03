export const state = () => ({
    discordData: [
        {key : "staff", value :0}, 
        {key : "connect", value: 0}
    ]
})
  
export const mutations = {
    discordDataChange(state, data) {
        state.discordData = data
    }
}