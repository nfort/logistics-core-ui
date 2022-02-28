/// <reference path="../../../types/react-table-config.d.ts" />

import * as React from "react";
import { DefaultTable } from "../../../src";
import { Column, useFlexLayout, usePagination, useSortBy, useTable } from "react-table";
import { DefaultColumnFilter } from "../../../src/components/Table/components/ColumnFilters";
import { Button, DropMenu, Paragraph } from "@holism/components";
import { LoadingContainer } from "../../../src";
import { Table } from "../../../src/components/Table/components/Table";
import { Pagination } from "../../../src/components/Table/components/Pagination";
import { Content } from "../../../src";
import { ComponentMeta } from "@storybook/react";

const meta = {
  title: "components/Table",
  component: DefaultTable,
} as ComponentMeta<typeof DefaultTable>;

export default meta;

export interface EmployeeDTO {
  email: string | null;
  login: string | null;
  name: string;
}

const data: EmployeeDTO[] = [
  {
    name: "Иванов Иван Иванович",
    login: "js@mail.ru",
    email: "еееее@mail.ru",
  },
  {
    name: "Петров Сергей Иванович",
    login: "ts@mail.ru",
    email: "ex@mail.ru",
  },
];

const columns: Column<EmployeeDTO>[] = [
  {
    Header: "ФИО",
    accessor: "name",
    Filter: DefaultColumnFilter,
  },
  {
    Header: "Логин",
    accessor: "login",
    Filter: DefaultColumnFilter,
  },
  {
    Header: "Email",
    accessor: "email",
    Filter: DefaultColumnFilter,
  },
];

export const Default = () => (
  <DefaultTable<EmployeeDTO>
    data={data}
    columns={columns}
    loading={false}
    reload={() => console.log("reload")}
    onRowClick={(row) => console.log(row)}
  />
);

export const CustomTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    canNextPage,
    canPreviousPage,
    previousPage,
    nextPage,
    gotoPage,
    rows,
    pageCount,
    page,
    pageOptions,
    state,
    prepareRow,
    headerGroups,
  } = useTable(
    {
      data,
      columns,
    },
    useFlexLayout,
    useSortBy,
    usePagination,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        ...columns,
        {
          accessor: "actions" as any,
          width: 50,
          Cell: () => {
            return (
              <DropMenu
                options={[
                  { label: "Отказ", id: "cancel" },
                  { label: "В процессе", id: "in-progress" },
                  { label: "Не поступил", id: "not-received" },
                  { label: "Поступил", id: "received" },
                  { label: "Активация", id: "active" },
                ]}
                onClick={() => {}}
              >
                <Button dimension="xsmall" color="secondary" isWithIcon={true}>
                  ✏️
                </Button>
              </DropMenu>
            );
          },
        },
      ]);
    }
  );
  return (
    <LoadingContainer loading={false}>
      <Content fillSpace={true} padding="0">
        <Content.Header>
          <Paragraph size={22} fontWeight="bold">
            Список продуктов
          </Paragraph>
          <Button dimension="small" isWithIcon={true} onClick={() => {}}>
            🌕<span>&nbsp;Добавить</span>
          </Button>
        </Content.Header>
        <div>
          <Table
            headerGroups={headerGroups}
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            rows={rows}
            prepareRow={prepareRow}
          />
        </div>
        <Content.Footer>
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
          />
        </Content.Footer>
      </Content>
    </LoadingContainer>
  );
};
