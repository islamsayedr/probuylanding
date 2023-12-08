import styles from "./Btn.module.css";

export default function Btn({ children, type, size, link }) {
  return (
    <a href={link} className={`${styles.btn} ${styles[type]} ${styles[size]}`}>
      {children}
    </a>
  );
}
