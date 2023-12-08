import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.content}>
          <img src="./assets/web/logo.png" alt="logo" />
          <p>
            ProBuy offers its solutions to a wide span across multiple
            industries. Whether you’re an e-commerce business, offline business,
            or market-places.
          </p>
        </div>
      </section>
      <div className={styles.copyrights}>©All right received ProBuy 2023</div>
    </>
  );
}
