<template>
  <div>
    <h4>Upload file thingy</h4>
    <input type="file" @change="upload">
    <img style="width:100px" :src="preview"/>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js';

export default {
  name: 'FileUpload',
  computed: {
    preview(){
      return this.$store.state.fileUploadPreview;
    }
  },
  methods:{
    upload(e){
      if(!e.target.files || !e.target.files[0].type.match('image.*')){
        return; // skip
      }
      let file = e.target.files[0];
      let reader = new FileReader(file);
      reader.onload = (e) => {
        //this.$store.dispatch('fileUpload', {name: file.name, result: e.target.result})
        this.$store.commit('fileUploaded', e.target.result)
      }
      reader.readAsDataURL(file);
    }
  }
}
</script>