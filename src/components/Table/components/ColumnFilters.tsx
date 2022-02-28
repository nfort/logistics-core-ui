import {FilterProps} from "react-table";
import {Input} from "@holism/components";
import * as React from "react";
import {ChangeEvent} from "react";

export function DefaultColumnFilter({ column: {filterValue, setFilter}}: FilterProps<any>) {
  return (
    <Input
      value={filterValue || ''}
      dimension="small"
      onChange={e => {
        setFilter((e as ChangeEvent<HTMLInputElement>).target.value || undefined) // Set undefined to remove the filter entirely
      }}
    />
  )
}
