import { Filters, GlobalFilter, SortBy } from "./DefaultTable";
import { useStorage } from "../../hooks/useStorage";

const initialValueFilter: Filters = [];
const initialValueSortBy: SortBy = [];

/**
 * @param {string} key - Должен быть задан в формате UUID для исключению пересений
 */
export function useStorageTableFilter(key: string) {
  const [globalFilter, setGlobalFilter] = useStorage<GlobalFilter>(
    `${key}__gf`
  );
  const [filters, setFilters] = useStorage<Filters>(
    `${key}__f`,
    initialValueFilter
  );
  const [sortBy, setSortBy] = useStorage<SortBy>(
    `${key}__sb`,
    initialValueSortBy
  );

  function updateTableFilter(
    globalFilter: GlobalFilter,
    filters: Filters,
    sortBy: SortBy
  ) {
    setGlobalFilter(globalFilter);
    setFilters(filters);
    setSortBy(sortBy);
  }

  return [{ globalFilter, filters, sortBy }, updateTableFilter] as const;
}
