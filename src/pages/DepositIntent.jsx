import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./DepositIntent.module.scss";
import { useTranslation } from "../contexts/TranslationContext";
import QRCode from "react-qr-code";
import { Copy } from "lucide-react";

const DepositIntent = () => {
  const { t } = useTranslation();
  const [mt5Login, setMt5Login] = useState("");
  const [intent, setIntent] = useState(null);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState("");

  const createIntent = async () => {
    setError("");
    setIntent(null);

    if (!mt5Login) {
      setError(t("pleaseEnterMT5Login"));
      return;
    }

    try {
      const response = await fetch("https://api.data-fx.net/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mt5_login: Number(mt5Login),
          reserve_ttl_min: 30,
          min_deposit_usdt: 10,
          min_confirmations: 20,
        }),
      });

      if (!response.ok) throw new Error("API failed");

      const data = await response.json();
      setIntent(data);
      startTimer(data.expires_at_utc);
    } catch (err) {
      try {
        const errorJson = await err.response.json();

        if (errorJson?.detail?.[0]?.msg) {
          setError(errorJson.detail[0].msg);
        } else {
          setError(t("somethingWentWrong"));
        }
      } catch {
        setError(t("somethingWentWrong"));
      }
    }
  };

  // -------------------------
  // Timer Countdown
  // -------------------------
  const startTimer = (expires) => {
    const expireTime = new Date(expires).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = expireTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimer(t("expired"));
        return;
      }

      const m = Math.floor(distance / 1000 / 60);
      const s = Math.floor((distance / 1000) % 60);

      setTimer(`${m}m ${s}s`);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(intent?.address ?? "");
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>{t("createDepositIntent")}</h1>
            <p className={styles.heroSubtitle}>
              {t("enterMT5AndGetDepositAddress")}
            </p>

            <div className={styles.formContainer}>
              <input
                type="number"
                className={styles.input}
                placeholder={t("enterMt5Login")}
                value={mt5Login}
                onChange={(e) => setMt5Login(e.target.value)}
              />

              <button className={styles.button} onClick={createIntent}>
                {t("generateAddress")}
              </button>

              {error && <p className={styles.error}>{error}</p>}
            </div>
          </div>
        </section>

        {intent && (
          <section className={styles.intentSection}>
            <div className={styles.intentContainer}>
              <h2 className={styles.intentTitle}>{t("paymentAddress")}</h2>

              <div className={styles.qrWrapper}>
                <QRCode value={intent.address} size={180} />
              </div>

              <div className={styles.addressBox}>
                <span className={styles.addressText}>{intent.address}</span>
                <Copy onClick={copyToClipboard} className={styles.copyIcon} />
              </div>

              <p className={styles.timerText}>
                {t("expiresIn")}: <strong>{timer}</strong>
              </p>

              <p className={styles.warning}>{t("addressWillExpireWarning")}</p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DepositIntent;
