import React, { ChangeEvent, PropsWithChildren, useState } from "react";
import { TableInstance, useAsyncDebounce } from "react-table";
import { Button } from "@nfort/holism-ui";
import { Input } from "@nfort/holism-ui";
import { SearchIcon, PropertiesIcon, ArrowUpIcon } from "@holism/icons";
import styled from "styled-components";
import { baseBorderRadius, baseBorderWidth } from "../../../styles/base";
import { ReturnedTypeUseToggle, useToggle } from "../../../hooks/useToggle";
import { FadeDown } from "../../../atoms/animations/FadeDown";

type Props = PropsWithChildren<
  Pick<TableInstance<any>, "columns" | "preGlobalFilteredRows" | "setGlobalFilter" | "globalFilter">
>;

export function Filter({ globalFilter, setGlobalFilter, columns, children }: Props) {
  const [value, setValue] = useState(globalFilter);
  const [showAllFilters, toggleAllFilters] = useToggle();
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  const hasFilters = columns.some((column) => !column.disableFilters);
  const amountFilters = columns.reduce((acc, f) => {
    if (f.filterValue) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <Styled>
      <div className="main-row">
        <div className="search-input">
          <Input
            value={value || ""}
            placeholder="Поиск по всем полям"
            onChange={(e) => {
              const input = e as ChangeEvent<HTMLInputElement>;
              setValue(input.target.value);
              onChange(input.target.value);
            }}
            icon={<SearchIcon size={20} />}
            dimension="small"
          />
        </div>
        <div>
          {children}
          <FiltersControlButton
            hasFilter={hasFilters}
            opened={showAllFilters}
            onToggle={toggleAllFilters}
            amountFilters={amountFilters}
          />
        </div>
      </div>
      <FadeDown in={showAllFilters}>
        <div className="content">
          {columns
            .map((column) => (!column.disableFilters ? column : null))
            .filter(Boolean)
            .map((column) => (
              <div key={column?.id}>{column?.render("Filter")}</div>
            ))}
        </div>
      </FadeDown>
    </Styled>
  );
}

function FiltersControlButton({
  onToggle,
  hasFilter,
  opened,
  amountFilters,
}: {
  hasFilter: boolean;
  opened: ReturnedTypeUseToggle[0];
  onToggle: ReturnedTypeUseToggle[1];
  amountFilters: number;
}) {
  if (hasFilter) {
    return (
      <div style={{ position: "relative" }}>
        <Button type="button" isWithIcon={true} color="tertiary" onClick={onToggle} dimension="medium">
          {opened ? <ArrowUpIcon size={20} /> : <PropertiesIcon size={20} />}
        </Button>
        {!opened && amountFilters ? <AmountFilters>{Math.min(amountFilters, 9)}</AmountFilters> : null}
      </div>
    );
  }
  return null;
}

const AmountFilters = styled.div`
  position: absolute;
  top: -9px;
  right: -9px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 2px;

  background-color: rgb(227, 229, 236);
  color: rgb(38, 44, 64);
  font-size: 14px;
  text-align: center;
`;

const Styled = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
  border-style: solid;
  border-width: ${baseBorderWidth};
  border-radius: ${baseBorderRadius};
  border-color: rgb(230, 234, 240);
  background-color: white;
  box-shadow: 0 5px 40px 8px rgba(230, 234, 240, 0.5);

  .main-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 1rem;
    }
  }

  .search-input {
    width: 350px;
  }

  .content {
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    column-gap: 1rem;
    padding-bottom: 1.5rem;
  }
`;
