import { useForm } from "@formspree/react";
import styles from "./Supform.module.css";

export default function SupForm({ lang }) {
  const [state, handleSubmit] = useForm("mdorqpne");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <span></span>
      <input name="User Name" type="text" placeholder="your name..."></input>
      <input
        name="Company name"
        type="text"
        placeholder="company name..."
      ></input>
      <input name="CR Number" type="number" placeholder="CR Number..."></input>
      <select name="Yaers of Operations">
        <option value="">Select Yaers of Operations</option>
        <option value="less than 6 months">less than 6 months</option>
        <option value="6 months - 1 year">6 months - 1 year</option>
        <option value="1 year - 3 years">1 year - 3 years</option>
        <option value="more than 3 years">more than 3 years</option>
      </select>
      <select name="Sector">
        <option value="">Select Sector</option>
        <option value="Healthcare">Healthcare</option>
        <option value="F&B HORECA">F&B HORECA</option>
        <option value="Furniture">Furniture</option>
        <option value="Cars spare-part">Cars spare-part</option>
        <option value="Various e-commerce commodities">
          Various e-commerce commodities
        </option>
        <option value="else">else</option>
      </select>

      <input
        name="email"
        type="email"
        placeholder="example@mail.com..."
      ></input>
      <input
        name="phone number"
        type="phone"
        placeholder="phone number..."
      ></input>
      <select name="Monetary Value">
        <option value="">Monetary Value</option>
        <option value="less than 7,000 SAR">less than 7,000 SAR</option>
        <option value="7,000 - 13,000 SAR">7,000 - 13,000 SAR</option>
        <option value="more than 13,000 SAR">more than 13,000 SAR</option>
      </select>
      <select name="Number of invoices per month">
        <option value="">Number of invoices per month</option>
        <option value="less than 1000 SAR">less than 1000 SAR</option>
        <option value="1,000 - 7,000 SAR">1,000 - 7,000 SAR</option>
        <option value="more than 7000 SAR">more than 7000 SAR</option>
      </select>
      <select name="Preferred method of payments">
      <option value="">Preferred method of payments</option>
        <option value="yes">Bank transfer</option>
        <option value="no">Cash</option>
        <option value="no">Others</option>
        <option value="no">No problems with all the payments above</option>
      </select>
      <button className={styles.btn} type="submit" disabled={state.submitting}>
        {lang === "AR" ? "ارسال" : "Submit"}
      </button>
    </form>
  );
}
