import Form from "./base/Form";
import styles from "./JoinUs.module.css";

export default function JoinUs() {
  return (
    <section className={styles.join}>
      <div className="container joincont" style={{ gap: "40px" }}>
        <div className={styles.content}>
          <h1 style={{ paddingBottom: "16px" }}>
            <i>Join Us</i> in Shaping the Future of SME Financing!
          </h1>
          <p>
            Register your interest today and be part of a community that
            empowers small businesses to thrive. Together, let's redefine the
            way SMEs manage their liquidity and their financing needs. As a
            registered user, you'll have priority access to our platform when we
            launch with free funds waiting for you in your wallet. Be at the
            forefront of Procurement Revolution for the SMEs. Join Us in Shaping
            the Future of SME Financing!
          </p>
        </div>

        <Form />
      </div>
    </section>
  );
}
