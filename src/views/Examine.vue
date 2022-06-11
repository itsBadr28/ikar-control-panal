<template>
<!-- eslint-disable -->
    <SideBar />
    <div class=" transition-all " :style="{ 'margin-left': sidebarWidth }" :class=" isDark ? 'dark' : '' ">
          <Nav />
          <div class="dark:bg-[#F1F0FE] bg-[#212529]">
             <div class="flex mx-auto w-full p-5  z-0">
               <div class="w-[60%] h-[600px]">
            <div  v-scrollanimation  class=" translate-y-24 mr-2.5 bg-[#171818] dark:bg-white  w-full h-[550px] duration-800 mb-4">
                <div v-show="isCameraOpen && isLoading" class="camera-loading">
                  <ul class="loader-circle">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
  
                 <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
                     <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
                     <video class="mx-auto" v-show="!isPhotoTaken" ref="camera" :width="730" :height="250" autoplay></video>
                     <canvas class="mx-auto" v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="730" :height="250"></canvas>
                 </div>
  
            </div>
            <div class="flex w-full justify-center"> 
              <button type="button" class="button is-rounded mx-2 bg-[#3b82f6] py-2 px-4 rounded-md" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
                   <span v-if="!isCameraOpen" class=" text-white font-body font-bold">Open Camera</span>
                   <span v-else class=" text-white font-body font-bold">Close Camera</span>
               </button>
               <div v-if="isCameraOpen && !isLoading" class=" ">
                     <button type="button" class="button mx-2 bg-[#3b82f6] py-2 px-4 rounded-md" @click="takePhoto">
                       <span  class=" text-white font-body font-bold">Get Info</span>
                     </button>
                  </div>
            <!-- <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
               <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
                 Download
              </a>
           </div> -->
            </div>
             
    </div>
          <div v-scrollanimation class="w-[37%] ml-auto h-screen translate-y-24 duration-800 bg-[#171818] dark:bg-white rounded flex flex-wrap justify-between">
            <div class="p-4 relative">
                
              </div>
            </div>
              <div class="h-10 left-[91rem] top-24 w-10 rounded-sm shadow-lg  shadow-[#0000005c] absolute flex hover:bg-[#175fd4] bg-[#3b82f6] ">
                <font-awesome-icon class="text-white m-auto text-xl" icon="pen" />
              </div>
    
        </div>
          <Signature />
          </div>
    </div>
</template>

<script>
import { sidebarWidth } from '../SideBar/sideBar';
import Nav from '../components/Nav.vue';
import SideBar from '../components/Sidebar.vue';
import Signature from '../components/Signature.vue';

export default {
  name: 'Examine-',
  components: {
    Nav,
    SideBar,
    Signature,
  },
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
    };
  },
  setup() {
    return { sidebarWidth };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
  },
  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    createCameraElement() {
      this.isLoading = true;
      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        this.isLoading = false;
        this.$refs.camera.srcObject = stream;
      })
        .catch(error => {
          this.isLoading = false;
          alert("May the browser didn't support or there is some errors.");
        });
    },
    stopCameraStream() {
      const tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    },
    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;
        const FLASH_TIMEOUT = 50;
        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      this.isPhotoTaken = !this.isPhotoTaken;
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    },
  },
};
</script>

<style lang="scss" scoped>
.before-enter{
  opacity: 0;
  /* transform: translateY(100px); */
}
.enter{
opacity: 1;
transform: translateY(0px);
}

.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 700px;
  .camera-button {
    margin-bottom: 2rem;
  }
  .camera-box {
    .camera-shutter {
      opacity: 0;
      width: 450px;
      height: 337.5px;
      background-color: #fff;
      position: absolute;
      &.flash {
        opacity: 1;
      }
    }
  }
  .camera-shoot {
    margin: 1rem 0;
    button {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      img {
        height: 35px;
        object-fit: cover;
      }
    }
  }
  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;
    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }
    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;
      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;
        &:nth-child(2) {
          animation-delay: .2s;
        }
        &:nth-child(3) {
          animation-delay: .4s;
        }
      }
    }
  }

  @keyframes preload {
    0% {
      opacity: 1
    }
    50% {
      opacity: .4
    }
    100% {
      opacity: 1
    }
  }
}
</style>
