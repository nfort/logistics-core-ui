import React, { ChangeEvent, PropsWithChildren, useState } from "react";
import { TableInstance, useAsyncDebounce } from "react-table";
import { Input, Button } from "@holism/components";
import { SearchIcon, PropertiesIcon, ArrowUpIcon } from "@holism/icons";
import styled from "styled-components";
import { baseBorderRadius, baseBorderWidth } from "../../../styles/base";
import { TableFilterField } from "./TableFilterField";
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

  return (
    <Styled>
      <div className="main-row">
        <div className="search-input">
          <TableFilterField label="Поиск по доступным полям">
            <Input
              value={value || ""}
              onChange={(e) => {
                const input = e as ChangeEvent<HTMLInputElement>;
                setValue(input.target.value);
                onChange(input.target.value);
              }}
              icon={<SearchIcon />}
              dimension="small"
            />
          </TableFilterField>
        </div>
        <div>
          {children}
          <FiltersControlButton hasFilter={hasFilters} opened={showAllFilters} onToggle={toggleAllFilters} />
        </div>
      </div>
      <FadeDown in={showAllFilters}>
        <div className="content">
          {columns
            .map((column) => (!column.disableFilters ? column : null))
            .filter(Boolean)
            .map((column) => (
              <div key={column?.id}>
                <TableFilterField label={column?.Header as string}>{column?.render("Filter")}</TableFilterField>
              </div>
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
}: {
  hasFilter: boolean;
  opened: ReturnedTypeUseToggle[0];
  onToggle: ReturnedTypeUseToggle[1];
}) {
  if (hasFilter) {
    return (
      <Button type="button" isWithIcon={true} color="tertiary" onClick={onToggle} dimension="medium">
        {opened ? <ArrowUpIcon /> : <PropertiesIcon />}
      </Button>
    );
  }
  return null;
}

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
    width: 450px;
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
