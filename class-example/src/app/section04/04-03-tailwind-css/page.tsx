import styles from "./styles.module.css";

export default function TailwindCssPage() {
  return (
    <>
      <button className={styles.버튼스타일}>버튼</button>
      <div className={styles.네모상자1스타일}>네모상자1</div>
      <div className={styles.네모상자2스타일}>네모상자2</div>
      <div className="lg:철수의상자">클 때는 초록색</div>
    </>
  );
}
