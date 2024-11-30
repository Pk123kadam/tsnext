"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import ChildComponent from "./components/child/page";

export default function Home() {
  const [inc, setInc] = useState<number>(0);

  return (
    <main className={styles.main}>
      <ChildComponent setInc={setInc} inc={inc} data="prathamesh" numbers = {1}>
        count is {inc}
        </ChildComponent>   

    </main>
  );
}
