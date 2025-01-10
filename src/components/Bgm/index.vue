<template>
    <div class="music-icon-container" @click="toggleMusic">
        <img v-if="isPlaying"  class="playing" src="@/assets/svg/music.svg" alt="播放BGM" />
        <img v-else src="@/assets/svg/music-stop.svg" alt="暂停BGM" />
    </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import bgm from '@/tools/music';

const isPlaying = ref(false);

const toggleMusic = () => {
    if (isPlaying.value) {
        bgm.pause();
    } else {
        bgm.play();
    }
    isPlaying.value = !isPlaying.value;
};

onUnmounted(() => {
    bgm.pause();
});

defineExpose({
    toggleMusic
})
</script>

<style scoped>
.music-icon-container {
    /* position: fixed;
    top: 20px;
    right: 20px; */
    margin-left: 10px;
    cursor: pointer;
}

.music-icon-container img {
    width: 20px;
    height: 20px;
    transition: transform 0.6s linear;
}

.music-icon-container img.playing {
    animation: spin 4s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>