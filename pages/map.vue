<template lang="pug">
.map
    iframe(src="https://dynmap.rplesincroyaux.fr/" width="80%" height="100%")
</template>
<style lang="sass" scoped>
.map 
    height: 100vh
    width: 100vw
    @include flex
</style>