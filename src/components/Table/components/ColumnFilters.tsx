import { FilterProps } from "react-table";
import { Input } from "@nfort/holism-ui";
import * as React from "react";
import { ChangeEvent } from "react";

export function DefaultColumnFilter({
  column: { filterValue, setFilter, render },
}: FilterProps<any>) {
  const header = render("Header");
  let placeholder = "Фильтр";

  if (typeof header === "string") {
    placeholder = header;
  }

  return (
    <Input
      value={filterValue || ""}
      dimension="small"
      placeholder={placeholder}
      onChange={(e) => {
        setFilter(
          (e as ChangeEvent<HTMLInputElement>).target.value || undefined
        ); // Set undefined to remove the filter entirely
      }}
    />
  );
}
