import styles from "./How.module.css";

export default function Why({ lang }) {
  const arStyle = {
    direction: "rtl",
  };
  const enStyle = {
    direction: "ltr",
  };
  const Data = lang === "AR" ? ar : en;
  const arText = "كيف يعمل  <i>ProBuy؟</i>";
  const enText = "How <i>ProBuy</i> Works?";

  const arBG = {
    left: 0,
    right: "auto",
    transform: "scalex(-1)",
  };
  const enBG = {
    left: "auto",
    right: 0,
  };
  const arc = {
    left: "auto",
    right: 0,
    transform: "scalex(-1)",
  };
  const enc = {
    left: 0,
    right: "auto",
  };
  const arm = {
    left: "auto",
    right: 0,
    transform: "scalex(-1)",
  };
  const enm = {
    left: 0,
    right: "auto",
  };
  return (
    <section
      className={styles.section}
      style={lang === "AR" ? arStyle : enStyle}
    >
      <div className="container">
        <div className={styles.head}>
          <h2
            dangerouslySetInnerHTML={{
              __html: lang === "AR" ? arText : enText,
            }}
          />
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
      <img
        src="./assets/web/howBGart.svg"
        className={styles.howBG}
        style={lang === "AR" ? arBG : enBG}
      />
      <img
        src="./assets/web/howBGcircle.svg"
        className={styles.howBG_c}
        style={lang === "AR" ? arc : enc}
      />
      <img
        src="./assets/web/howBGcircle_m.svg"
        className={styles.howBG_m}
        style={lang === "AR" ? arm : enm}
      />
    </section>
  );
}

const en = [
  {
    id: 1,
    icon: "./assets/web/how01.svg",
    title: "Register Your Interest",
    des: "Sign up now to express your interest in our platform. Be among the first to experience the future of SME procurement funding.",
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
    des: "As a registered user, you'll have priority access to our platform when we launch with free funds waiting for you in your wallet, Be at the forefront of Procurement Revolution for the SMEs.",
  },
];

const ar = [
  {
    id: 1,
    icon: "./assets/web/how01.svg",
    title: "سجل اهتمامك",
    des: "سجل الآن للتعبير عن اهتمامك. كن من الأوائل الذين يختبرون مستقبل تمويل الشراء للشركات الصغيرة والمتوسطة.",
  },
  {
    id: 2,
    icon: "./assets/web/how02.svg",
    title: "ابق على اطلاع",
    des: "احصل على تحديثات حصرية ولمحات سريعة والوصول المبكر. سنبقيك على اطلاع في كل خطوة حتى الانطلاقة الرسمية",
  },
  {
    id: 3,
    icon: "./assets/web/how03.svg",
    title: "استمتع بالأولية",
    des: "باعتبارك من اوائل المهتمين بخدماتنا، ستحصل على الأولية إلى منصتنا عند الإطلاق مع أموال مجانية في انتظارك في محفظتك",
  },
];
