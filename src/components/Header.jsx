import Btn from "./base/Btn";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <img
          src="./assets/web/logo.png"
          alt="probuy logo"
          className={styles.logo}
        />
        <div className={styles.actions}>
          <Btn type="p" size="m">
            Contact Us
          </Btn>
          <Btn type="t" size="m">
            <img src="./assets/web/lang.svg" />
            <span>EN</span>
          </Btn>
        </div>
      </div>
    </header>
  );
}
