<template>
    <div class="button-group" :class="iconPosition" @click="$emit('click')">
        <g-button class="button" icon-name="left" icon-position="icon-left">按钮</g-button>
        <g-button class="button" icon-name="right" icon-position="icon-right">设置</g-button>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style lang="scss">
    .button-group {
        display: inline-flex;
        vertical-align: middle;
        &>.button:first-child{
            margin-right: -1px;
            border-radius: 0;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        &>.button:last-child{
            border-radius: 0;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
</style>

