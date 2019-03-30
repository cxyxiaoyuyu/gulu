<template>
    <button class="g-button" :class="iconPosition" @click="$emit('click')">
        <g-icon v-if="loading" icon-name="loading" class="loading"></g-icon>
        <g-icon v-if="iconName && !loading" :icon-name="iconName"></g-icon>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        //props: ['iconName','iconPosition']
        props:{
            loading: {
                type: Boolean,
                default: false
            },
            iconName: {},
            iconPosition: {
                type: String,
                default: 'icon-left',
                validator(value){
                    return value === 'icon-left' || value === 'icon-right'
                }
            }
        }
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
        & > .loading {
            animation: loading 2s infinite linear;
        }
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button.icon-right {
        flex-direction: row-reverse;
        &>.icon {
            margin-left: .2em;
        }
    }
    .g-button.icon-left .icon {
        margin-right: .2em;
    }
</style>

