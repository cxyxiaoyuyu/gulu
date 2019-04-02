<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${iconName}`"></use>
    </svg> 
</template>

<script>
    import './svg'
    export default {
        props: ['iconName']
    }
</script>

<style lang="scss" scoped>
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
