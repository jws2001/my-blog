<template>
    <div class="tai-ji-container">
        <canvas ref="canvas" class="tai-ji-container-canvas"></canvas>
    </div>
</template>

<script setup>
import { defineProps, onMounted, getCurrentInstance, computed } from 'vue';
const props = defineProps({
    size: {
        type: Number,
        default: 150
    }
});
const size = computed(() => props.size + 'px')
const currentInstance = getCurrentInstance();
const devicePixelRatio = window.devicePixelRatio;
const transformScale = `scale(${1 / devicePixelRatio})`
onMounted(() => {
    const canvas = currentInstance.refs.canvas;
    // 设置宽度
    const size = props.size * devicePixelRatio;
    const center = size / 2;
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');

    // 给画布画一半白 一半黑
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, center, size);
    ctx.fillStyle = '#000000';
    ctx.fillRect(center, 0, size, size);

    // 大画圆
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(center, center / 2, center / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.arc(center, center + center / 2, center / 2, 0, Math.PI * 2);
    ctx.fill();

    // 画小圆
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.arc(center, center / 2, center / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(center, center + center / 2, center / 4, 0, Math.PI * 2);
    ctx.fill();
})
console.log(props)
</script>

<style lang="less" scoped>
.tai-ji-container {
    width: v-bind(size);
    height: v-bind(size);
    display: flex;
    justify-content: center;
    align-items: center;
}

.tai-ji-container-canvas {
    border-radius: 50%;
    transform: v-bind(transformScale);
    transform-origin: center center;
}
</style>