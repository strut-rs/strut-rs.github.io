import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from "@site/src/components/Hero";

const Home: React.FC = () => {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description={siteConfig.tagline}
        >
            <main>
                <Hero/>
            </main>
        </Layout>
    );
};

export default Home;
