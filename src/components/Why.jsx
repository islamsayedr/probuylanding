import Tab from "./base/Tab";
import { useState } from "react";
import styles from "./Why.module.css";

export default function Why() {
  const [active, setActive] = useState("sme");
  return (
    <section className={styles.section}>
      <div className="container">
        <div>
          <h2>
            Why Choose <i>ProBuy?</i>
          </h2>
          <div>
            <Tab id="sme" active={active} onTab={() => setActive("sme")}>
              I’m an SME
            </Tab>
            <Tab id="supp" active={active} onTab={() => setActive("supp")}>
              I’m a supplier
            </Tab>
          </div>
        </div>

        {sme.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const sme = [
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
