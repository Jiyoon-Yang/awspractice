"use client";

import { FieldValues, FormState } from "react-hook-form";
// import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

interface IProps {
  formState: FormState<FieldValues>;
  children: React.ReactNode;
}

export default function MyButto(props: IProps) {
  //  const { formState } = useFormContext();

  return (
    <button className={styles.mybutton} disabled={!props.formState.isValid}>
      {props.children}
    </button>
  );
}
