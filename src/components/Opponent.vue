<template>
    <div class="opponent" v-if="opponent.id">
        <h1>this json is the opponent</h1>
        {{opponent}}
    </div>
</template>

<script>
export default {
    name: 'Opponent',
    computed: {
        opponent(){
            return this.$store.state.opponent
        }
    }
}
</script>

<style>

</style>