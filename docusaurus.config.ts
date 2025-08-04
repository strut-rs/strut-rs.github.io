import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Strut',
    tagline: 'Backend in Rust: convenient and configurable with Strut',
    favicon: 'img/favicon.ico',

    // https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true,
    },

    url: 'https://strut-rs.github.io',
    baseUrl: '/',

    organizationName: 'strut-rs',
    projectName: 'strut-rs.github.io',
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/strut-rs/strut-rs.github.io/edit/main',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },

                    editUrl: 'https://github.com/strut-rs/strut-rs.github.io/edit/main',

                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: [
                        './src/css/announcement-bar.css',
                    ],
                },
            } satisfies Preset.Options,
        ],
    ],

    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap',
    ],

    themeConfig: {
        image: 'img/social-card.png',

        announcementBar: {
            id: 'pre-release-notice',
            content: 'This is a pre-release page; development is in progress',
            isCloseable: false,
        },

        // announcementBar: {
        //     id: 'rust-conf-2025',
        //     content: 'Join us at <a target="_blank" rel="noopener noreferrer" href="https://rustconf.com/">#RustConf2025</a>',
        //     isCloseable: false,
        // },

        navbar: {
            title: 'Home',
            logo: {
                alt: 'Strut Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    label: 'Quickstart',
                    to: 'docs/quickstart',
                    position: 'left',
                },
                {
                    label: 'Docs',
                    to: 'docs',
                    position: 'left',
                },
                {
                    label: 'Blog',
                    to: 'blog',
                    position: 'left',
                },
                {
                    label: 'Crates.io',
                    href: 'https://crates.io/crates/strut',
                    position: 'right',
                },
                {
                    label: 'Docs.rs',
                    href: 'https://docs.rs/strut/latest',
                    position: 'right',
                },
                {
                    label: 'GitHub',
                    href: 'https://github.com/strut-rs/strut',
                    position: 'right',
                },
                {
                    label: 'Discord',
                    href: 'https://discord.gg/KNkJuMkY',
                    position: 'right',
                },
            ],
        },

        footer: {
            links: [
                {
                    title: 'Reference',
                    items: [
                        {
                            label: 'Quickstart',
                            to: '/docs/quickstart',
                        },
                        {
                            label: 'Docs',
                            to: '/docs',
                        },
                    ],
                },
                {
                    title: 'Repositories',
                    items: [
                        {
                            label: 'Crates.io',
                            href: 'https://crates.io/crates/strut',
                        },
                        {
                            label: 'Docs.rs',
                            href: 'https://docs.rs/strut/latest',
                        },
                        {
                            label: 'Github',
                            href: 'https://github.com/strut-rs/strut',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'Issues',
                            href: 'https://github.com/strut-rs/strut/issues',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/KNkJuMkY',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Strut.`,
        },

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: [
                'bash',
                'yaml',
                'toml',
            ]
        },

    } satisfies Preset.ThemeConfig,
};

export default config;
