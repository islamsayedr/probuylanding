import Btn from "./base/Btn";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>
              Transforming SMEs with Flexible <i>Financing Solutions</i>
            </h1>
            <p>
              Are you an SME facing liquidity challenges? ProBuy is here to
              revolutionize the way you manage your finances. Introducing our
              innovative Buy Now, Pay Later (BNPL) solution designed exclusively
              for small and medium-sized enterprises.
            </p>
          </div>
          <div className={styles.actions}>
            <Btn type="p" size="lg">
              Register Now
            </Btn>
            <Btn type="s" size="lg">
              Learn More
            </Btn>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src="./assets/web/heroImg.svg" />
        </div>
      </div>

      <img src="./assets/web/heroBGart.svg" className={styles.heroBG} />
      <img src="./assets/web/heroBGart-m.svg" className={styles.heroBG_m} />
    </section>
  );
}
