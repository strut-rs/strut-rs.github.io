---
slug: inception
title: Inception
authors: [erik]
tags: [dev]
---

Strut was created to address real pain points.

When I began developing backend services in Rust, I quickly realized how much boilerplate stood between me and my first meaningful line of business logic.
Before I could build anything useful, I had to set up configuration, logging, and manually wire up persistence, messaging, and alerting.
That meant introducing an async runtime, and then worrying about how to gracefully shut down all those external connections when the application exited.
And once I finally had everything working, I found myself dreading the thought of repeating this setup for the next backend—copy-pasting all that code was hardly ideal.

<!-- truncate -->

Strut aims to make this process painless.
It’s a convenience and configuration layer—a crate that gathers and pre-configures popular crates commonly used in backend development.
The idea is simple: enable or disable backend features with minimal code.
Strut provides sensible defaults and promotes straightforward, intuitive conventions.

Importantly, Strut is not a _framework_.
Rust’s language design doesn’t mesh well with traditional dependency injection, and I didn’t want to force a framework where it wasn’t needed.
My focus was on eliminating repetitive configuration, not imposing too much structure.

The first public release of Strut includes the essentials:

- Asynchronous runtime ([`tokio`][tokio])
- Externalized configuration ([`config`][config])
- Logging ([`tracing`][tracing])
- Alerting ([`sentry`][sentry])
- Persistence ([`sqlx`][sqlx])
- Messaging ([`lapin`][lapin])

[tokio]: https://crates.io/crates/tokio
[config]: https://crates.io/crates/config
[tracing]: https://crates.io/crates/tracing
[sentry]: https://crates.io/crates/sentry
[sqlx]: https://crates.io/crates/sqlx
[lapin]: https://crates.io/crates/lapin

The async runtime and configuration are always included, while the rest are opt-in via feature flags.

Strut deliberately avoids plug-and-play support for alternative libraries.
For example, asynchrony is provided exclusively through `tokio`—there’s no option to swap in `async-std`, `smol`, or others.
This decision is intentional: Strut values consistency and simplicity over maximum flexibility.

Looking ahead, I plan to expand Strut’s component lineup as new needs emerge.
If you’d like to contribute, please check out [`CONTRIBUTING.md`][contributing].

[contributing]: https://github.com/strut-rs/strut/blob/master/CONTRIBUTING.md
