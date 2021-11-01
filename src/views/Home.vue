<template>
  <div>
    <div class="search-section">
      <ItunesSearch />
    </div>
    <div class="albums">
      <ItunesAlbums />
    </div>
  </div>
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

<style scoped>
.search-section {
  padding: 10px;
}

.albums {
  /* width: 100%; */
  display: flex;
  justify-content: center;
}
</style>
