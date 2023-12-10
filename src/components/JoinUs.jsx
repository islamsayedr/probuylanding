import { useState } from "react";
import Tab from "./base/Tab";
import SMEform from "./base/SMEform";
import SupForm from "./base/SupForm";
import styles from "./JoinUs.module.css";

export default function JoinUs({ lang }) {
  const [active, setActive] = useState("sme");

  const arStyle = {
    direction: "rtl",
  };
  const enStyle = {
    direction: "ltr",
  };
  const arText =
    "<i>انضم إلينا</i> في تشكيل مستقبل تمويل الشركات الصغيرة والمتوسطة!";
  const enText = "<i>Join Us</i> in Shaping the Future of SME Financing!";
  return (
    <section className={styles.join} style={lang === "AR" ? arStyle : enStyle}>
      <div className="container joincont" style={{ gap: "40px" }}>
        <div className={styles.content} style={{ flex: 1 }}>
          <h1
            dangerouslySetInnerHTML={{
              __html: lang === "AR" ? arText : enText,
            }}
            style={{ paddingBottom: "16px" }}
          />
          <p>
            {lang === "AR"
              ? "سجل اهتمامك اليوم وكن جزءًا من مجتمع يمكن الشركات الصغيرة من التفوق. معًا، دعونا نعيد تعريف كيفية إدارة الشركات الصغيرة لسيولتها واحتياجتها التمويلية"
              : "Register your interest today and be part of a community that empowers small businesses to thrive. Together, let's redefine the way SMEs manage their liquidity and their financing needs. As a registered user, you'll have priority access to our platform when we launch with free funds waiting for you in your wallet. Be at the forefront of Procurement Revolution for the SMEs. Join Us in Shaping the Future of SME Financing!"}
          </p>
        </div>
        <div style={{ flex: 1 }} className={styles.formContainer}>
          <div className={styles.tabs}>
            <Tab id="sme" active={active} onTab={() => setActive("sme")}>
              {lang === "AR" ? "مقدم خدمات" : "I’m an SME"}
            </Tab>
            <Tab id="supp" active={active} onTab={() => setActive("supp")}>
              {lang === "AR" ? "مورد" : "I’m a supplier"}
            </Tab>
          </div>
          {active === "sme" ? <SMEform /> : <SupForm />}
        </div>
      </div>
    </section>
  );
}
