import styles from "./Btn.module.css";

export default function Btn({ children, type, size, link, handlelClick }) {
  return (
    <a
      href={link}
      onClick={handlelClick}
      className={`${styles.btn} ${styles[type]} ${styles[size]}`}
    >
      {children}
    </a>
  );
}
