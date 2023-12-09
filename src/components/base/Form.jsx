import { useState } from "react";
import Tab from "./Tab";
import styles from "./Form.module.css";

export default function Form({ onSubmition }) {
  const [active, setActive] = useState("sme");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bName, setBname] = useState("");
  const [bSector, setBsector] = useState("");
  const [finance, setFinance] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (!active) {
      return alert("add your name");
    }
    if (!email) {
      return alert("add email");
    }
    if (!phone) {
      return alert("add email");
    }
    if (!bName) {
      return alert("add business name");
    }
    if (!bName) {
      return alert("add business name");
    }
    if (!bSector) {
      return alert("add business sector");
    }
    if (!finance) {
      return alert("choose you finance value");
    }

    const response = {
      active,
      userName,
      email,
      phone,
      bName,
      bSector,
      finance,
    };
    onSubmition(response);
    setUserName("");
    setEmail("");
    setPhone("");
    setBname("");
    setBsector("");
    setFinance("");
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.tabs}>
        <Tab id="sme" active={active} onTab={() => setActive("sme")}>
          I’m an SME
        </Tab>
        <Tab id="supp" active={active} onTab={() => setActive("supp")}>
          I’m a supplier
        </Tab>
      </div>
      <form className="" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="your name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="example@mail.com..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="phone"
          placeholder="phone number..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="business name..."
          value={bName}
          onChange={(e) => setBname(e.target.value)}
        ></input>
        <div>
          <input
            type="text"
            placeholder="business sector.."
            value={bSector}
            onChange={(e) => setBsector(e.target.value)}
          ></input>
          <select value={finance} onChange={(e) => setFinance(e.target.value)}>
            <option value="">اختر الحجم</option>
            <option value="less-than-4k">اقل من ٤ الاف</option>
            <option value="4k-to-7k">٤-٧ الاف</option>
            <option value="8k-to-12k">٨-١٢ الف</option>
            <option value="more-than-12k">اكثر من ١٢ الف</option>
          </select>
        </div>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}
