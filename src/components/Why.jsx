import Tab from "./base/Tab";
import { useState } from "react";
import styles from "./Why.module.css";

export default function Why({ lang }) {
  const [active, setActive] = useState("sme");
  const arStyle = {
    direction: "rtl",
  };
  const enStyle = {
    direction: "ltr",
  };
  const arText = "لماذا  <i>ProBuy؟</i>";
  const enText = "Why Choose <i>ProBuy?</i>";
  const smeData = lang === "AR" ? arSME : enSME;
  const suppData = lang === "AR" ? arSupp : enSupp;

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
          <div className={styles.tabs}>
            <Tab id="sme" active={active} onTab={() => setActive("sme")}>
              {lang === "AR" ? "مقدم خدمات" : "I’m an SME"}
            </Tab>
            <Tab id="supp" active={active} onTab={() => setActive("supp")}>
              {lang === "AR" ? "مورد" : "I’m a supplier"}
            </Tab>
          </div>
        </div>
        <div className={styles.why}>
          {active === "sme" &&
            smeData.map((item) => (
              <div key={item.id} className={styles.whycard}>
                <img src={item.icon} />
                <div className={styles.cardtext}>
                  <h3>{item.title}</h3>
                  <p>{item.des}</p>
                </div>
              </div>
            ))}
          {active === "supp" &&
            suppData.map((item) => (
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
    </section>
  );
}

const enSME = [
  {
    id: 1,
    icon: "./assets/web/SIMwhy01.svg",
    title: "Tailored for SMEs",
    des: "We understand the unique financial needs of small businesses, when it comes to procurement payments and liquidity accessibility. Our products are crafted to address liquidity issues specific to SMEs, tailored to match the needs by industry.",
  },
  {
    id: 2,
    icon: "./assets/web/SIMwhy02.svg",
    title: "Flexible Financing",
    des: "Say goodbye to rigid, strict, and unfriendly repayment schedules. Our platform offers flexible payment terms, ensuring you have the financial freedom to grow your business and manage your liquidity by your own terms.",
  },
  {
    id: 3,
    icon: "./assets/web/SIMwhy03.svg",
    title: "Fast and Easy Approval",
    des: "Experience quick registration and hassle-free approval, allowing you to access the funds you need when you need them for your procurements.",
  },
  {
    id: 4,
    icon: "./assets/web/SIMwhy04.svg",
    title: "Transparent Terms",
    des: "We believe in transparency. Our terms are straightforward, with no hidden fees. You'll always know what to expect.",
  },
];

const arSME = [
  {
    id: 1,
    icon: "./assets/web/SIMwhy01.svg",
    title: " حلول مالية مصممة خصيصًا للشركات الصغيرة والمتوسطة",
    des: "نحن نفهم احتياجاتك المالية الفريدة كمنشآة صغيرة او متوسطة, إدارة الأمور المالية والسيولة عملية ليست سهلة. لذلك, صممنا منتجاتنا لمساعدتك في الامور المالية،..",
  },
  {
    id: 2,
    icon: "./assets/web/SIMwhy02.svg",
    title: "دفعات مرنة",
    des: "مع ProBuy قل وداعاُ لمواعيد السداد الصارمة. نقدم لك شروط دفع مرنة، مما يضمن لك الحرية المالية لتنمية عملك وإدارة سيولتك وفقًا لشروطك واحتياجاتك الخاصة.",
  },
  {
    id: 3,
    icon: "./assets/web/SIMwhy03.svg",
    title: " موافقة سريعة وسهلة",
    des: "استمتع بتسجيل سريع وموافقة سهلة، يتيح لك الوصول الى السيولة (تمويل) الذي تحتاجه عندما تحتاجه",
  },
  {
    id: 4,
    icon: "./assets/web/SIMwhy04.svg",
    title: "شروط شفافة",
    des: "نؤمن بالشفافية. شروطنا واضحة، دون رسوم خفية. ستعرف دائمًا ما يمكن توقعه",
  },
];

const enSupp = [
  {
    id: 1,
    icon: "./assets/web/whysupp01.svg",
    title: "Payments Upfront!",
    des: "Say goodbye to collection headaches, and collect your money with every purchase made through our platform. For a discount fee on each transaction.",
  },
  {
    id: 2,
    icon: "./assets/web/whysupp03.svg",
    title: "Increase Your Customers Base",
    des: "Reach a wide range of clients with our platform.",
  },
  {
    id: 3,
    icon: "./assets/web/whysupp02.svg",
    title: "Your Personal Relationship Manager",
    des: "ProBuy will handle the payments, returns, and collections on your-behalf, allowing you to concrete on growing your business.",
  },
  {
    id: 4,
    icon: "./assets/web/whysupp04.svg",
    title: "",
    des: "Probuy is here to help you manage your liquidity.",
  },
];

const arSupp = [
  {
    id: 1,
    icon: "./assets/web/whysupp01.svg",
    title: " إستلم دفعاتك مقدما!",
    des: "قل وداعًا لمشاكل التحصيل، واحصل على دفعاتك مقدماً مع كل عملية شراء تتم عبر منصتنا. تتطبق رسوم التحصيل المبكر لكل عملية شراء لتتمكن من الحصول على دفعاتك مقدماً",
  },
  {
    id: 2,
    icon: "./assets/web/whysupp03.svg",
    title: "زد عملائك",
    des: "أستحوذ على عملاء جدد من خلال منصتنا",
  },
  {
    id: 3,
    icon: "./assets/web/whysupp02.svg",
    title: "مدير العلاقة الشخصي الخاص بك",
    des: "ستتعامل ProBuy مع المدفوعات والمرتجعات والتحصيلات نيابةً عنك، مما يتيح لك العمل بشكل فعال والتركيز على تنمية أعمالك",
  },
  {
    id: 4,
    icon: "./assets/web/whysupp04.svg",
    title: "",
    des: "Probuy هنا لمساعدتك في إدارة السيولة الخاصة بك.",
  },
];
