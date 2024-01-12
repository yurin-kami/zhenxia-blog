<template>
    <div>
        <img src="../images/zhenxia.jpg" alt="" id="rotatedImage">
        <audio src=""></audio>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#rotatedImage {
    border-radius: 50%;
    position: absolute;
    margin-top: -10%;
    margin-left: 3%;
    width: 100px;
    height: 100px;
    overflow: hidden;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

#rotatedImage {
    animation: rotate 5s linear infinite;
    /* 5s表示动画时长，linear表示线性过渡，infinite表示无限循环 */
}
</style>