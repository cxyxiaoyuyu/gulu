<template>
    <div class="input-wrap">
        <input class="input"/>  
    </div>
    
</template>
<script>
    import Icon from './icon'
    export default {
        props: ['iconName']
    }
</script>

<style lang="scss">
    $height: 32px;
    $border-radius: 4px;
    $font-size: 14px;
    .input-wrap {
        font-size: $font-size;
        & .input {
            height: $height;
            border-radius: $border-radius;
            font-size: 14px;
            padding: 0 8px;
        }
    }
    
</style>
