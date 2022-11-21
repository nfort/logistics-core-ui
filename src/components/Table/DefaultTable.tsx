import {
  Row,
  useFilters,
  useFlexLayout,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  UseTableOptions,
} from "react-table";
import React, { useEffect, useMemo } from "react";
import { Filter } from "./components/Filter";
import { Pagination } from "./components/Pagination";
import { Table } from "./components/Table";
import { LoadingContainer } from "../../atoms/LoadingContainer";
import { Content } from "../../atoms/Content";

export type Filters = {
  id: string;
  value: string | number | boolean;
}[];
export type GlobalFilter = string | number | boolean;
export type SortBy = { id: string; desc?: boolean | undefined }[];

export type InitialState = {
  pageSize: number;
  pageIndex: number;
  filters?: Filters;
  globalFilter?: GlobalFilter;
  sortBy?: SortBy;
};

export interface Props<D extends object> extends UseTableOptions<D> {
  loading?: boolean;
  reload?(): void;
  pageSize?: number;
  onRowClick?(row: Row<D>): void;
  onUpdateFilterOrSort?(
    globalFilter: GlobalFilter,
    filters: Filters,
    sortBy: SortBy
  ): void;
  filters?: Filters;
  globalFilter?: GlobalFilter;
  sortBy?: SortBy;
}

export function DefaultTable<D extends object>({
  columns,
  data,
  onRowClick,
  onUpdateFilterOrSort,
  filters,
  globalFilter,
  sortBy,
  loading = false,
  pageSize = 20,
  reload = () => {},
}: Props<D>) {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );
  // Use the state and functions returned from useTable to build your UI
  const initialState: InitialState = {
    pageSize,
    pageIndex: 0,
  };

  if (filters) {
    initialState.filters = filters;
  }

  if (globalFilter) {
    initialState.globalFilter = globalFilter;
  }

  if (sortBy) {
    initialState.sortBy = sortBy;
  }

  const {
    columns: _columns,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState,
    },
    useFlexLayout,
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    onUpdateFilterOrSort &&
      onUpdateFilterOrSort(state.globalFilter, state.filters, state.sortBy);
  }, [state.globalFilter, state.filters, state.sortBy, onUpdateFilterOrSort]);
  return (
    <>
      <LoadingContainer loading={loading}>
        <Filter
          globalFilter={state.globalFilter}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          columns={_columns}
        />
      </LoadingContainer>
      <LoadingContainer loading={loading}>
        <Content fillSpace={true} padding="0 0 2rem 0">
          <Content.Header>
            <Pagination
              canNextPage={canNextPage}
              page={page}
              previousPage={previousPage}
              nextPage={nextPage}
              canPreviousPage={canPreviousPage}
              gotoPage={gotoPage}
              pageIndex={state.pageIndex}
              pageOptions={pageOptions}
              pageCount={pageCount}
              reload={reload}
              count={data.length}
            />
          </Content.Header>
          <div>
            <Table
              getTableBodyProps={getTableBodyProps}
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              prepareRow={prepareRow}
              rows={page}
              onRowClick={onRowClick}
            />
          </div>
        </Content>
      </LoadingContainer>
    </>
  );
}
