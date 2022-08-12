<template lang="pug">
.map
    iframe(src="http://node.miridiagame.fr:37019" width="80%" height="100%")
</template>
<style lang="sass" scoped>
.map 
    height: 100vh
    width: 100vw
    @include flex
</style>