<template>
    <div class="camera-modal">
        <video ref="video" class="camera-stream"/>
        <div class="camera-modal-container">
            <span @click="capture" class="take-picture-button take-picture-button">
               <b-icon icon="camera">camera_alt</b-icon>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mediaStream: null
    }
  },
  mounted () {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        this.$refs.video.srcObject = mediaStream
        this.$refs.video.play()
        this.mediaStream = mediaStream
      })
      .catch(error => console.error('getUserMedia() error:', error))
  },
  destroyed () {
    const tracks = this.mediaStream.getTracks()
    tracks.map(track => track.stop())
  },
  methods: {
    capture () {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(mediaStreamTrack)
      return imageCapture.takePhoto().then(blob => {
        console.log(blob)
      })
    }
  }
}
</script>

<style scoped>
    .camera-modal {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: white;
        z-index: 10;
    }
    .camera-stream {
        width: 100%;
        max-height: 100%;
    }
    .camera-modal-container {
        position: absolute;
        bottom: 0;
        width: 100%;
        align-items: center;
        margin-bottom: 24px;
    }
    .take-picture-button {
        display: flex;
    }
</style>