<template>
  <ItunesSearch />
  <ItunesAlbums />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItunesSearch from "@/components/ItunesSearch.vue";
import ItunesAlbums from "@/components/ItunesAlbums.vue";

export default defineComponent({
  name: "Home",
  components: {
    ItunesSearch,
    ItunesAlbums,
  },
});
</script>
