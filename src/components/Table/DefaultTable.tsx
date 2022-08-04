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
import React, { useMemo } from "react";
import { Filter } from "./components/Filter";
import { Pagination } from "./components/Pagination";
import { Table } from "./components/Table";
import { LoadingContainer } from "../../atoms/LoadingContainer";
import { Content } from "../../atoms/Content";

export interface Props<D extends object> extends UseTableOptions<D> {
  loading?: boolean;
  reload?(): void;
  pageSize?: number;
  onRowClick?(row: Row<D>): void;
}

export function DefaultTable<D extends object>({
  columns,
  data,
  onRowClick,
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
      initialState: {
        pageSize,
        pageIndex: 0,
      },
    },
    useFlexLayout,
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
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
