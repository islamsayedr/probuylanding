import Btn from "./base/Btn";
import styles from "./Header.module.css";

export default function Header({ lang, handleLang }) {
  const arStyle = {
    direction: "rtl"
  }
  const enStyle = {
    direction: "ltr"
  }
  return (
    <header className={styles.header} style={lang ==="AR" ? arStyle:enStyle}>
      <div className="container">
        <img
          src="./assets/web/logo.png"
          alt="probuy logo"
          className={styles.logo}
        />
        <div className={styles.actions}>
          <Btn type="p" size="m">
            {lang ==="AR" ? "تواصل معنا": "Contact Us"}
            
          </Btn>
          <Btn
            type="t"
            size="m"
            handlelClick={() => handleLang(lang === "AR" ? "EN" : "AR")}
          >
            <img src="./assets/web/lang.svg" />
            <span>{lang}</span>
          </Btn>
        </div>
      </div>
    </header>
  );
}
