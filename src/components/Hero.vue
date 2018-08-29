<template>
    <div class="hero" v-if="hero.id">
        <h1>this json is the hero</h1>
        {{hero}}
    </div>
</template>

<script>
export default {
    name: 'Hero',
    computed: {
        hero(){
            return this.$store.state.hero
        }
    }
}
</script>

<style>

</style>