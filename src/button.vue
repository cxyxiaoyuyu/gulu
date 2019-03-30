<template>
    <button class="g-button" :class="iconName">
        <g-icon v-if=iconName :icon-name="iconName"></g-icon>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: ['iconName']
        /*props:{
            iconName: {},
            iconPosition: {
                type: String,
                default: 'left',
                Validator(value){
                    console.log(value)
                }
            }
        }*/
    }
</script>

<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover); 
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        &.icon-left .icon {
            margin-right: .2em;
        }
        &>.icon-right .icon {
            margin-left: .2em;
        }
    }
</style>

