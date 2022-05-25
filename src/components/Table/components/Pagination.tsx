import { Button, Paragraph } from "@holism/components";
import React from "react";
import styled from "styled-components";
import { RefreshIcon, DoubleArrowLeftIcon, ArrowLeftIcon, DoubleArrowRightIcon, ArrowRightIcon } from "@holism/icons";
import { UsePaginationInstanceProps, UsePaginationState } from "react-table";

type Props = Omit<UsePaginationInstanceProps<any>, "setPageSize"> &
  Omit<UsePaginationState<any>, "pageSize"> & { reload?: () => void };

export function Pagination({
  pageOptions,
  pageIndex,
  gotoPage,
  pageCount,
  reload,
  nextPage,
  canPreviousPage,
  canNextPage,
  previousPage,
}: Props) {
  return (
    <Styled>
      <div>
        <Paragraph size={14} lineHeight={20}>{`Страница ${pageIndex + 1} из ${pageOptions.length}`}</Paragraph>
      </div>
      <div className="right-block">
        {typeof reload === "function" && (
          <Button dimension="xsmall" color="secondary" onClick={reload} isWithIcon={true}>
            <RefreshIcon size={20} />
            Обновить
          </Button>
        )}
        <Button
          color="tertiary"
          dimension="xsmall"
          onClick={() => gotoPage(0)}
          isDisabled={!canPreviousPage}
          isWithIcon={true}
        >
          <DoubleArrowLeftIcon size={20} />
        </Button>
        <Button
          color="tertiary"
          dimension="xsmall"
          onClick={previousPage}
          isWithIcon={true}
          isDisabled={!canPreviousPage}
        >
          <ArrowLeftIcon size={20} />
        </Button>
        <Button color="tertiary" dimension="xsmall" onClick={nextPage} isWithIcon={true} isDisabled={!canNextPage}>
          <ArrowRightIcon />
        </Button>
        <Button
          color="tertiary"
          dimension="xsmall"
          onClick={() => gotoPage(pageCount - 1)}
          isWithIcon={true}
          isDisabled={!canNextPage}
        >
          <DoubleArrowRightIcon size={20} />
        </Button>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 100%;

  .right-block {
    display: inline-flex;
    gap: 0.5rem;
  }

  .pagination-line {
    display: inline-flex;
  }

  .pagination-line > button {
    margin-left: 0.3rem;
  }

  .pagination-line > div:last-child {
    margin-right: 0;
  }

  .pagination-line > div:last-child:before {
    content: "... ";
  }
`;
