import { IItunesSearchResult } from "@/lib/IItunesSearchRes";
import { computed, Ref, ref } from "vue";

export default function usePaginationRepo(albums: Ref<IItunesSearchResult[]>) {
  const pageSize = 10;
  const curPage = ref(1);

  const showPagination = computed(() => albums.value.length > pageSize);
  const totalPages = computed(() => Math.ceil(albums.value.length / pageSize));
  const curAlbums = computed(() =>
    albums.value.slice(
      (curPage.value - 1) * pageSize,
      (curPage.value - 1) * pageSize + pageSize
    )
  );

  return {
    curPage,
    showPagination,
    totalPages,
    curAlbums,
  };
}
