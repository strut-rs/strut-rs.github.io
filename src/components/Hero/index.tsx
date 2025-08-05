import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Terminal from "@site/src/components/Terminal";
import {Prog} from "@site/src/components/Terminal/Highlight";

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
                        <Prog.Special>#[strut::main]</Prog.Special>
                        {"\n"}<Prog.Keyword>async fn</Prog.Keyword>{" "}<Prog.Function>main</Prog.Function>{"() {"}
                        {"\n    "}<Prog.Comment>// [x] async (tokio)</Prog.Comment>
                        {"\n    "}<Prog.Comment>// [x] external config</Prog.Comment>
                        {"\n    "}<Prog.Comment>// [x] graceful shutdown</Prog.Comment>
                        {"\n"}
                        {"\n    "}<Prog.Comment>// + optionally:</Prog.Comment>
                        {"\n    "}<Prog.Comment>// [ ] logging / tracing</Prog.Comment>
                        {"\n    "}<Prog.Comment>// [ ] database (sqlx)</Prog.Comment>
                        {"\n    "}<Prog.Comment>// [ ] rabbitmq (lapin)</Prog.Comment>
                        {"\n    "}<Prog.Comment>// [ ] sentry</Prog.Comment>
                        {"\n    "}<Prog.Comment>// [ ] custom integrations</Prog.Comment>
                        {"\n}"}
                    </Terminal>
                </div>
            </div>
        </section>
    );
}
