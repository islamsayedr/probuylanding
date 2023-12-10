import styles from "./Footer.module.css";

export default function Footer({ lang }) {
  const arStyle = {
    direction: "rtl",
  };
  const enStyle = {
    direction: "ltr",
  };
  return (
    <>
      <section
        className={styles.footer}
        style={lang === "AR" ? arStyle : enStyle}
      >
        <div className={styles.content}>
          <img src="./assets/web/logo.png" alt="logo" />
          <p>
            {lang === "AR"
              ? "or market-places. حلول إدارية مالية وسيولة تمويلية عبر عدد من القطاعات. سواء كنت تجارتك  متجرك إلكتروني، أو أعمالًا تقليدية(محلات تجارية تقليدية)، أو منصات تجارية مركزة  قنوات بيع"
              : "ProBuy offers its solutions to a wide span across multiple industries. Whether you’re an e-commerce business, offline business,"}
          </p>
        </div>
      </section>
      <div className={styles.copyrights}>
        {" "}
        {lang === "AR"
          ? "جميع الحقوق محفوظه ProBuy©"
          : "©All right received ProBuy 2023"}
      </div>
    </>
  );
}
