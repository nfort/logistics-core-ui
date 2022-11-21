import { Row, UseTableInstanceProps } from "react-table";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import React from "react";
import styled from "styled-components";

type Props = Pick<
  UseTableInstanceProps<any>,
  "getTableProps" | "getTableBodyProps" | "rows" | "prepareRow" | "headerGroups"
> & { onRowClick?(row: Row<any>): void };

export function Table({
  getTableBodyProps,
  getTableProps,
  rows,
  prepareRow,
  headerGroups,
  onRowClick,
}: Props) {
  return (
    <Styles>
      <ScrollSync>
        <div {...getTableProps()} className="table">
          <ScrollSyncPane group="horizontal">
            <div className="thead">
              {headerGroups.map((headerGroup) => (
                <div {...headerGroup.getHeaderGroupProps()} className="tr">
                  {headerGroup.headers.map((column) => (
                    <div
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="th"
                    >
                      {column.render("Header")}
                      <span
                        className={
                          column.isSorted
                            ? column.isSortedDesc
                              ? "desc"
                              : "asc"
                            : ""
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </ScrollSyncPane>
          <ScrollSyncPane group="horizontal">
            <div {...getTableBodyProps()} className="tbody">
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <div
                    {...row.getRowProps((props) => ({
                      ...props,
                      onClick: () => onRowClick && onRowClick(row),
                    }))}
                    className={`tr ${onRowClick && "clickable"}`}
                  >
                    {row.cells.map((cell) => (
                      <div {...cell.getCellProps()} className="td">
                        {cell.render("Cell")}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </ScrollSyncPane>
        </div>
      </ScrollSync>
    </Styles>
  );
}

const Styles = styled.div`
  .table {
    border-spacing: 0;
    background-color: white;
    text-align: left;
    line-height: 1;
    font-family: "Proxima Nova", sans-serif;

    .thead .tr,
    .tbody .tr {
    }

    .thead {
      font-size: 13px;
      line-height: 20px;
      font-weight: bold;
      background-color: #f7faff;
      text-transform: uppercase;
      position: sticky;
      top: 0;
      overflow-x: auto;

      .desc::after {
        content: " \\A71C";
        display: inline-block;
        position: absolute;
        font-size: 1.5rem;
        margin-top: -0.2rem;
      }

      .asc::after {
        content: " \\A71B";
        display: inline-block;
        position: absolute;
        font-size: 1.5rem;
        margin-top: -0.2rem;
      }
    }

    /* hide scrollbar but allow scrolling */
    .thead {
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll;
    }

    .thead::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

    .tbody {
      overflow-x: auto;
      font-size: 15px;
      line-height: 20px;
      min-height: 250px;

      .tr {
        align-items: stretch;
      }

      .tr.clickable:hover {
        cursor: pointer;
        background-color: #f6f6f9;
      }
    }

    .tr {
      border-color: rgb(246, 246, 249);
      background-color: transparent;
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th {
      position: relative;
    }

    .th,
    .td {
      margin: 0;
      padding: 1rem;
      word-break: break-all;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-color: inherit;
      background-color: inherit;
      display: flex;
      align-items: center;
    }
  }
`;
