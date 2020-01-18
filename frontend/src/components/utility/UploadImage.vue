<template>
  <div>
    <b-img :src="this.src" fluid alt="Responsive image"></b-img>
    <b-form-file
      v-model="file"
      @change="onFileChange"
      ref="file-input"
      class="my-2"
    ></b-form-file>
    <!-- <b-button @click="clearFiles" variant="info">Reset</b-button> -->
    <div class="d-flex align-items-center">
      <p class="mt-2 w-100 text-left">
        Selected file: <b>{{ file ? file.name : "" }}</b>
      </p>
      <button class="btn btn-success" @click="upload">upload</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String
  },
  data() {
    return {
      file: null,
      src: ""
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.src = URL.createObjectURL(file);
    },
    upload() {
      this.$emit("fileUploaded", this.src);
      this.$swal.fire({
        icon: "success",
        title: "Upload Success!",
        text: "Image uploaded successfuly"
        // footer: "<a href>Why do I have this issue?</a>"
      });
      this.$refs["file-input"].reset();
    }
  },
  created() {
    this.src = this.imageSrc;
  }
};
</script>

<style></style>
