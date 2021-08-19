<template>
  <Alert v-if="success" />
  <v-card v-else class="mx-auto primary mb-6" max-width="400" tile>
    <v-list-item v-for="file in list" :key="file.name">
      <v-list-item-content>
        <v-list-item-title>{{ file.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import Alert from "./Alert";
export default {
  props: ["list", "success"],
  components: { Alert },
};
</script>
