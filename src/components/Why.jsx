import Tab from "./base/Tab";
import { useState } from "react";
import styles from "./Why.module.css";

export default function Why() {
  const [active, setActive] = useState("sme");
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2>
            Why Choose <i>ProBuy?</i>
          </h2>
          <div className={styles.tabs}>
            <Tab id="sme" active={active} onTab={() => setActive("sme")}>
              I’m an SME
            </Tab>
            <Tab id="supp" active={active} onTab={() => setActive("supp")}>
              I’m a supplier
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

const smeData = [
  {
    id: 1,
    icon: "./assets/web/SIMwhy01.svg",
    title: "Tailored for SMEs",
    des: "We understand the unique financial needs of small businesses. Our BNPL solution is crafted to address liquidity issues specific to SMEs.",
  },
  {
    id: 2,
    icon: "./assets/web/SIMwhy02.svg",
    title: "Flexible Financing",
    des: "Say goodbye to rigid repayment schedules. Our platform offers flexible payment terms, ensuring you have the financial freedom to grow your business.",
  },
  {
    id: 3,
    icon: "./assets/web/SIMwhy03.svg",
    title: "Fast and Easy Approval",
    des: "No more lengthy approval processes. Experience quick and hassle-free approval, allowing you to access the funds you need when you need them.",
  },
  {
    id: 4,
    icon: "./assets/web/SIMwhy04.svg",
    title: "Transparent Terms",
    des: "We believe in transparency. Our terms are straightforward, with no hidden fees. You&apos;ll always know what to expect.",
  },
];
const suppData = [
  {
    id: 1,
    icon: "./assets/web/whysupp01.svg",
    title: "Payments Upfront!",
    des: "Say goodbye to collection headaches, and collect your money with every purchase made through our platform. For a discount fee on each transaction.",
  },
  {
    id: 2,
    icon: "./assets/web/whysupp02.svg",
    title: "Your Personal Relationship Manager",
    des: "ProBuy will handle the payments, returns, and collections on your-behalf, allowing you to concrete on growing your business.",
  },
  {
    id: 3,
    icon: "./assets/web/whysupp03.svg",
    title: "Increase Your Customers Base",
    des: "Reach a wide range of clients with our platform.",
  },
  {
    id: 4,
    icon: "./assets/web/whysupp04.svg",
    title: "",
    des: "Probuy is here to help you manage your liquidity.",
  },
];
