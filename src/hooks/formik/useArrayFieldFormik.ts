import { useFormikContext } from "formik";

export function useFieldArrayFormik<Values extends { [key: string]: string[] }>(name: string) {
  const { values, setFieldValue, setFieldTouched } = useFormikContext<Values>();
  let value: string[];

  if (values) {
    value = values[name];
  } else {
    throw new Error("Field in formik doesn't exist");
  }

  const updater = (newValue: string) => {
    const copyValue = [...value];
    if (copyValue.includes(newValue)) {
      copyValue.splice(copyValue.indexOf(newValue));
    } else {
      copyValue.push(newValue);
    }
    setFieldValue(name, copyValue, false);
    setFieldTouched(name, true, false);
  };

  return [value, updater] as const;
}
