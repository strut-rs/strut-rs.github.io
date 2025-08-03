import React from "react";
import styles from "./styles.module.css";
import terminal from "./terminal.module.css";
import Link from "@docusaurus/Link";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.left}>
                    <h1 className={styles.title}>
                        Backend in Rust
                    </h1>
                    <p className={styles.subtitle}>
                        Convenient and configurable with{" "}
                        <span className={styles.subtitleHighlight}>Strut</span>.
                    </p>
                    <div className={styles.buttons}>
                        <Link className={styles.button} to="/docs/quickstart">
                            Quickstart
                        </Link>
                        <Link className={styles.button} to="/docs">
                            Docs
                        </Link>
                    </div>
                </div>
                <div className={terminal.body}>
                    <div className={terminal.window}>
                        <div className={terminal.windowHeader}>
                            <span className={`${terminal.windowBtn} ${terminal.btnRed}`}/>
                            <span className={`${terminal.windowBtn} ${terminal.btnYellow}`}/>
                            <span className={`${terminal.windowBtn} ${terminal.btnGreen}`}/>
                        </div>
                        <pre className={terminal.codeBlock}>
                            <span className={terminal.hlBlue}>#[strut::main]</span>
                            {"\n"}
                            <span className={terminal.hlPurple}>async</span>{" "}
                            <span className={terminal.hlPurple}>fn</span>{" "}
                            <span className={terminal.hlYellow}>main</span>()
                            {" {"}
                            {"\n    "}
                            <span className={terminal.hlComment}>// [x] async (tokio)</span>
                            {"\n    "}
                            <span className={terminal.hlComment}>// [x] external config</span>
                            {"\n    "}
                            <span className={terminal.hlComment}>// [x] graceful shutdown</span>
                            {"\n\n    "}
                            <span className={terminal.hlComment}>// + optionally:</span>
                            {"\n    "}
                            <span className={terminal.hlComment}>// [ ] logging / tracing</span>
                            {"\n    "}
                            <span className={terminal.hlComment}>// [ ] database (sqlx)</span>
                            {"\n    "}
                            <span className={terminal.hlComment}>// [ ] rabbitmq (lapin)</span>
                            {"\n    "}
                            <span className={terminal.hlComment}>// [ ] sentry</span>
                            {"\n    "}
                            <span className={terminal.hlComment}>// [ ] custom integrations</span>
                            {"\n"}
                            {"}"}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}
