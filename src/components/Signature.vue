<template>
<div >
    <div class="max-w-4xl mx-auto  my-auto flex-initial items-center">
        <div class="">
          <VueSignaturePad
            id="signature"
            width="50%"
            height="700px"
            ref="signaturePad"
            :options="options"
            class="bg-[#ccc] mx-auto my-auto w-1/2 h-40"
          />
        </div>
        <div class="mx-auto flex justify-center">
          <button class="py-2 px-4  bg-black text-white rounded-sm text-lg font-body uppercase m-2" @click="undo">Undo</button>
          <button class="py-2 px-4 bg-black text-white rounded-sm text-lg font-body uppercase m-2" @click="save">Save</button>
        </div>
        <div class="mx-auto w-1/2">
          <img :src="`${img}`" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import VueSignaturePad from "vue3-signature-pad";

export default {
  name: 'signature-pad',
  components: {
    VueSignaturePad,
  },
  data() {
    return {
      img: '',
      options: {
        penColor: "#ff1000",
      },
    };
  },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      alert("Open DevTools see the save data.");
      this.img = data;
    },
  },
};
</script>
