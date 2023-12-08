import styles from "./How.module.css";

export default function Why() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2>
            How <i>ProBuy</i> Works?
          </h2>
        </div>
        <div className={styles.why}>
          {Data.map((item) => (
            <div key={item.id} className={styles.whycard}>
              <img src={item.icon} />
              <div className={styles.cardtext}>
                <h3>{item.title}</h3>
                <p>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="./assets/web/howBGart.svg" className={styles.howBG} />
      <img src="./assets/web/howBGcircle.svg" className={styles.howBG_c} />
      <img src="./assets/web/howBGcircle_m.svg" className={styles.howBG_m} />
    </section>
  );
}

const Data = [
  {
    id: 1,
    icon: "./assets/web/how01.svg",
    title: "Register Your Interest",
    des: "Sign up now to express your interest in our platform. Be among the first to experience the future of SME financing.",
  },
  {
    id: 2,
    icon: "./assets/web/how02.svg",
    title: "Stay Informed",
    des: "Receive exclusive updates, sneak peeks, and early access notifications. We'll keep you in the loop every step of the way.",
  },
  {
    id: 3,
    icon: "./assets/web/how03.svg",
    title: "Enjoy Priority Access",
    des: "As a registered user, you'll have priority access to our platform when we launch. Be at the forefront of a financial revolution for SMEs.",
  },
];
