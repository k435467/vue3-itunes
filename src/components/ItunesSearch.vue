<template>
  <div class="my-container">
    <el-input
      v-model="searchKeyword"
      placeholder="Please input"
      class="search-input ma"
      @keyup="pressEnter"
    />
    <el-button type="info" plain class="ma" @click="clickSearch" :loading="loading"
      >Search</el-button
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store/index";

export default defineComponent({
  name: "ItunesSearch",
  setup() {
    const searchKeyword = ref("");

    const route = useRoute();
    const router = useRouter();
    const clickSearch = () => {
      if (route.query !== { searchKeyword: searchKeyword.value }) {
        router.push({ name: "Home", query: { searchKeyword: searchKeyword.value } });
      }
    };

    const pressEnter = (e: KeyboardEvent) => {
      if (e.which === 13) {
        clickSearch();
      }
    };

    const store = useStore();
    const loading = computed(() => {
      return store.state.loading;
    });

    return { searchKeyword, clickSearch, pressEnter, loading };
  },
});
</script>

<style scoped>
.my-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
}

.search-input {
  max-width: 400px;
  min-width: 200px;
}

.ma {
  margin: 5px;
}
</style>
