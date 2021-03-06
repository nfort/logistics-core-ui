import { Row, UseTableInstanceProps } from "react-table";
import React from "react";
import styled from "styled-components";

type Props = Pick<
  UseTableInstanceProps<any>,
  "getTableProps" | "getTableBodyProps" | "rows" | "prepareRow" | "headerGroups"
> & { onRowClick?(row: Row<any>): void };

export function Table({ getTableBodyProps, getTableProps, rows, prepareRow, headerGroups, onRowClick }: Props) {
  return (
    <Styles>
      <div className="tableWrap">
        <div {...getTableProps()} className="table">
          <div className="thead">
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                    {column.render("Header")}
                    <span className={column.isSorted ? (column.isSortedDesc ? "desc" : "asc") : ""} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="tbody">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <div
                  {...row.getRowProps((props) => ({ ...props, onClick: () => onRowClick && onRowClick(row) }))}
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
        </div>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;

  .tableWrap {
    min-width: 1366px;
  }

  .table {
    border-spacing: 0;
    background-color: white;
    text-align: left;
    line-height: 1;
    font-family: "Proxima Nova", sans-serif;

    .thead .tr,
    .tbody .tr {
      border-bottom: 1px solid rgb(246, 246, 249);
    }

    .thead {
      font-size: 13px;
      line-height: 20px;
      font-weight: bold;
      background-color: #f7faff;
      text-transform: uppercase;
      overflow-y: auto;
      overflow-x: hidden;

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

    .tbody {
      overflow-y: scroll;
      overflow-x: hidden;
      font-size: 15px;
      line-height: 20px;
      min-height: 500px;
      max-height: 1024px;

      .tr {
        align-items: center;
      }

      .tr.clickable {
        transition: background-color 150ms ease-in-out 0s;
      }

      .tr.clickable:hover {
        cursor: pointer;
        box-shadow: rgb(38 44 64 / 12%) 0 12px 40px -6px, rgb(38 44 64 / 2%) 0px 0px 8px 0px;
        background-color: rgb(255, 255, 255);
      }
    }

    .tr {
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
    }
  }
`;
