<template>
  <div class="text-center pt-7">
    <v-btn @click="uploadFile" class="mx-2" fab x-large color="primary">
      <img src="@/assets/Folder.svg" width="45" alt="folder" />
    </v-btn>

    <form @submit.prevent="send">
      <input @change="onFileChange" id="file" type="file" hidden />
      <v-btn
        :loading="loading"
        type="submit"
        rounded
        class="d-block mx-auto mt-6"
        depressed
        color="accent"
      >
        <img class="pr-1" src="@/assets/Send.svg" alt="send" />
        Enviar archivos
      </v-btn>
    </form>

    <v-container v-if="fileUpload" class="mt-5">
      <div class="d-flex mb-5">
        <v-progress-linear color="accent" v-model="knowledge" height="25">
          <strong
            >{{ Math.ceil(knowledge) }}% -
            {{ files[files.length - 1].name.slice(0, 18) }}...</strong
          >
        </v-progress-linear>
      </div>
    </v-container>
    <v-container>
      <List :list="files" :success="success" class="mt-7" />
    </v-container>
  </div>
</template>

<script>
import List from "./List";
export default {
  components: { List },
  data() {
    return {
      files: [],
      knowledge: 0,
      fileUpload: false,
      loading: false,
      success: false,
    };
  },

  methods: {
    uploadFile() {
      document.getElementById("file").click();
    },
    send(e) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.success = true;
        this.files = [];
        setTimeout(() => {
          this.success = false;
        }, 2000);
      }, 3000);
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.files.push(files[0]);

      let progress = setInterval(() => {
        this.fileUpload = true;
        this.knowledge += 1;

        if (this.knowledge === 100) {
          this.fileUpload = false;
          clearInterval(progress);
          this.knowledge = 0;
        }
      }, 200);
    },
  },
};
</script>
