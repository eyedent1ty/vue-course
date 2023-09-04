import { ref, computed } from 'vue';

export default function useSort(items, sortProp) {
  const sorting = ref(null);
  const displayedItems = computed(function () {
    if (!sorting.value) {
      return items.value;
    }
    return items.value.slice().sort((item1, item2) => {
      if (sorting.value === 'asc' && item1[sortProp] > item2[sortProp]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && item1[sortProp] > item2[sortProp]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode;
  }

  return {
    sorting,
    displayedItems,
    sort
  };
}