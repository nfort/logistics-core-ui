import { useFormikContext } from "formik";
import cloneDeep from "lodash.clonedeep";

export function useDeleteFieldFormik() {
  const { setFormikState } = useFormikContext<{ [key: string]: string | number | string[] | number[] }>();

  const remove = (fieldOrFields: string | string[]) => {
    setFormikState((state) => {
      const newState = cloneDeep(state);
      if (Array.isArray(fieldOrFields)) {
        fieldOrFields.forEach((field) => {
          delete newState.values[field];
          delete newState.touched[field];
          delete newState.errors[field];
        });
      } else {
        delete newState.values[fieldOrFields];
        delete newState.touched[fieldOrFields];
        delete newState.errors[fieldOrFields];
      }
      return newState;
    });
  };

  return remove;
}
