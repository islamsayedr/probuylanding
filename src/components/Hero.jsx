import Btn from "./base/Btn";
import styles from "./Hero.module.css";

export default function Hero({ lang }) {
  const arStyle = {
    direction: "rtl",
  };
  const enStyle = {
    direction: "ltr",
  };
  const enText = {
    header: `Transforming SMEs with Flexible <i>Financing Solutions</i>`,
    action01: "Rigister Now",
    action02: "Learn More",
    paragraph:
      "Are you an SME facing liquidity challenges when procuring? ProBuy is here to revolutionise the way you manage your procurement payments. Introducing our innovative products designed exclusively for small and medium-sized enterprises.",
  };
  const arText = {
    header: "تحويل الشركات الصغيرة والمتوسطة من خلال <i> حلول تمويل مرنة</i>",
    action01: "سجِّل الآن",
    action02: "تعرَّف أكثر",
    paragraph:
      "هل أنت شركة صغيرة أو متوسطة تواجه تحديات في السيولة عند التوريد؟ ProBuy هنا لتحدث ثورة في كيفية إدارتك لمدفوعات التوريد. نقدم منتجاتنا المبتكرة المصممة حصرياً للشركات الصغيرة والمتوسطة.",
  };
  const arBG = {
    left: 0,
    right: "auto",
    transform: "scalex(-1)",
  };
  const enBG = {
    left: "auto",
    right: 0,
  };

  return (
    <section className={styles.hero} style={lang === "AR" ? arStyle : enStyle}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1
              dangerouslySetInnerHTML={{
                __html: lang === "AR" ? arText.header : enText.header,
              }}
            />
            <p> {lang === "AR" ? arText.paragraph : enText.paragraph}</p>
          </div>
          <div className={styles.actions}>
            <Btn type="p" size="lg">
              {lang === "AR" ? arText.action01 : enText.action01}
            </Btn>
            <Btn type="s" size="lg">
              {lang === "AR" ? arText.action02 : enText.action02}
            </Btn>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src="./assets/web/heroImg.svg" />
        </div>
      </div>

      <img
        src="./assets/web/heroBGart.svg"
        className={styles.heroBG}
        style={lang === "AR" ? arBG : enBG}
      />
      <img src="./assets/web/heroBGart-m.svg" className={styles.heroBG_m} />
    </section>
  );
}
