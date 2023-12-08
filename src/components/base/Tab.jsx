import styles from './Tab.module.css' 

export default function Tab({ children, onTab, active, id }) {
  return (
    <button
      onClick={() => onTab(id)}
      className={`${styles.tab} ${active === id ? styles.active : ""}`}
    >
      {children}
    </button>
  );
}
