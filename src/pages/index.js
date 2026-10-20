import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const paths = [
  {n: '01', title: 'Meet DAM Client', text: 'Our first product brings a native folder experience to work with AEM assets.', to: '/products/dam-client', action: 'Explore the product'},
  {n: '02', title: 'Explore the documentation', text: 'Understand connection choices, folder workflows, and the current development scope.', to: '/docs', action: 'Browse the guides'},
  {n: '03', title: 'See what is taking shape', text: 'Follow the product direction with a clear view of current evidence and remaining work.', to: '/docs/dam-client/status', action: 'Read the development status'},
];
export default function Home() {
  return <Layout title="Your work, in a better flow" description="Sambafied is coming soon. Discover DAM Client, our first product: a native desktop folder experience for local AEM and AEM as a Cloud Service.">
    <main>
      <section className="home-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">SAMBAFIED · COMING SOON</p>
            <h1>Your work.<br/><span className="text-accent">In a better flow.</span></h1>
            <p className="hero-lead">Tools that bring digital work closer to the way you work. We’re starting with DAM Client: a native desktop folder experience for AEM assets.</p>
            <div className="actions"><Link className="button button--primary button--lg" to="/products/dam-client">Meet DAM Client <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/docs">Explore the docs <span aria-hidden="true">→</span></Link></div>
            <p className="preview-line"><span className="status-dot" aria-hidden="true"></span>Coming soon <span aria-hidden="true">/</span> Thoughtfully built. Taking shape.</p>
          </div>
          <div className="umbrella-hero-art"><img className="homepage-banner" src="/img/sambafied-banner@2x.png" alt="Sambafied chrome emblem and wordmark over a striped sunset and neon grid" width="2048" height="1152"/></div>
        </div>
      </section>
      <section className="section container" aria-labelledby="quick-paths">
        <div className="section-heading"><div><p className="eyebrow">START HERE</p><h2 id="quick-paths">Find your next step.</h2></div><p>Meet the product.<br/>Explore the thinking behind it.</p></div>
        <div className="quick-grid">{paths.map(p => <Link className="quick-card" to={p.to} key={p.n}><span className="card-number">{p.n} <span aria-hidden="true">↗</span></span><h3>{p.title}</h3><p>{p.text}</p><span className="card-action">{p.action} <span aria-hidden="true">→</span></span></Link>)}</div>
      </section>
      <section className="section container product-strip">
        <div className="product-strip-identity"><img src="/img/product-icon.svg" alt="DAM Client orange-ring emblem" width="128" height="128" loading="lazy"/><strong>DAM Client</strong><small>BY SAMBAFIED</small></div>
        <div><p className="eyebrow">OUR FIRST PRODUCT · COMING SOON</p><h2>Multiple AEM instances.<br/>Separate folders. One desktop experience.</h2><p>DAM Client is being built for local AEM and AEM as a Cloud Service, with familiar desktop folders at the center of the workflow.</p><Link className="text-link" to="/products/dam-client">Discover DAM Client <span aria-hidden="true">→</span></Link></div>
      </section>
    </main>
  </Layout>;
}
