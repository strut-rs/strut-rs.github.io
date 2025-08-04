import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Terminal from "@site/src/components/Terminal";
import * as Hl from "@site/src/components/Highlight";

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
                <div className={styles.right}>
                    <Terminal size='m' width='360px'>
                        <Hl.ProgSpecial>#[strut::main]</Hl.ProgSpecial>
                        {"\n"}<Hl.ProgKeyword>async fn</Hl.ProgKeyword>{" "}<Hl.ProgFunction>main</Hl.ProgFunction>{"() {"}
                        {"\n    "}<Hl.ProgComment>// [x] async (tokio)</Hl.ProgComment>
                        {"\n    "}<Hl.ProgComment>// [x] external config</Hl.ProgComment>
                        {"\n    "}<Hl.ProgComment>// [x] graceful shutdown</Hl.ProgComment>
                        {"\n"}
                        {"\n    "}<Hl.ProgComment>// + optionally:</Hl.ProgComment>
                        {"\n    "}<Hl.ProgComment>// [ ] logging / tracing</Hl.ProgComment>
                        {"\n    "}<Hl.ProgComment>// [ ] database (sqlx)</Hl.ProgComment>
                        {"\n    "}<Hl.ProgComment>// [ ] rabbitmq (lapin)</Hl.ProgComment>
                        {"\n    "}<Hl.ProgComment>// [ ] sentry</Hl.ProgComment>
                        {"\n    "}<Hl.ProgComment>// [ ] custom integrations</Hl.ProgComment>
                        {"\n}"}
                    </Terminal>
                </div>
            </div>
        </section>
    );
}
