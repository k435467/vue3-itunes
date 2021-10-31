<template>
  <div class="blocks-container">
    <el-pagination
      v-if="showPagination"
      layout="prev, pager, next"
      :page-count="totalPages"
      v-model:currentPage="curPage"
    ></el-pagination>
    <div v-for="album in curAlbums" :key="album.collectionId">
      <a :href="album.collectionViewUrl" target="_blank">
        <div class="info-container border-block">
          <div class="img-block">
            <el-image
              style="width: 100px; height: 100px"
              :src="album.artworkUrl100"
              fit="contain"
            ></el-image>
          </div>
          <div>
            <div class="sec-text pb-2 pt-2">{{ album.collectionType }}</div>
            <div class="black-text">{{ album.collectionName }}</div>
            <div class="sec-text">{{ album.artistName }}</div>
            <div class="sec-text pt-4">
              {{
                album.collectionPrice ? album.collectionPrice + " " + album.currency : ""
              }}
            </div>
          </div>
        </div>
      </a>
    </div>
    <el-pagination
      v-if="showPagination"
      layout="prev, pager, next"
      :page-count="totalPages"
      v-model:currentPage="curPage"
    ></el-pagination>
  </div>
</template>

<script lang="ts">
import { IItunesSearchRes, IItunesSearchResult } from "@/lib/IItunesSearchRes";
import { itunesSearch } from "@/lib/iTunesAPI";
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

const pageSize = 10;

export default defineComponent({
  name: "ItunesAlbums",
  setup() {
    const route = useRoute();
    const searchKeyword = ref(route.query.searchKeyword as string);
    const albums = ref<IItunesSearchResult[]>([]);
    const curPage = ref(1);

    const fetchData = async () => {
      if (searchKeyword.value) {
        const tmp: IItunesSearchRes = await itunesSearch(searchKeyword.value);
        albums.value = tmp.results ?? [];
      }
    };

    fetchData(); // fetch data on created

    const showPagination = computed(() => albums.value.length > pageSize);
    const totalPages = computed(() => Math.ceil(albums.value.length / pageSize));
    const curAlbums = computed(() =>
      albums.value.slice(
        (curPage.value - 1) * pageSize,
        (curPage.value - 1) * pageSize + pageSize
      )
    );

    watch(route, (to) => {
      console.log("enter watcher");
      searchKeyword.value = to.query.searchKeyword as string;
      curPage.value = 1;
      fetchData();
    });

    return { curPage, showPagination, totalPages, curAlbums };
  },
});
</script>

<style scoped>
.blocks-container {
  display: flex;
  flex-direction: column;
}

.info-container {
  display: flex;
  padding: 10px;
  max-width: 800px;
  min-width: 200px;
}

.border-block {
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  border: 1px solid transparent;
}

.border-block:hover {
  border: 1px solid #d9d9d9;
  transform: scale(1.15);
  box-shadow: 3px 3px 3px #b3b3b3;
}

.img-block {
  padding: 10px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  width: 140px;
  height: 120px;
}

.black-text {
  color: black;
}

.sec-text {
  font-size: small;
  color: grey;
}

a,
a:hover,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}
</style>
