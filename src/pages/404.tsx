import Link from "next/link";
import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className={styles.bg}>
                <h1 className="text-center ">404</h1>
              </div>

              <div className={styles.contant}>
                <h3 className="h2">Look like you&aposre lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link href="/" className={styles.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
