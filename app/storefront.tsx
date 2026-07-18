import Link from "next/link";
import ProductCatalog from "./product-catalog";
import { products } from "./products";

const disclosure =
  "Atlas500 Global Picks participates in affiliate programs, including Amazon Associates, Shopify and CJ Dropshipping. We may earn a commission from qualifying purchases at no additional cost to you.";

const cjServiceUrl =
  "https://www.cjdropshipping.com/ouroffers?token=b62c87a8-14ec-4d84-b44e-636b68a6791d";

const cjRegistrationUrl =
  "https://www.cjdropshipping.com/register.html?token=b62c87a8-14ec-4d84-b44e-636b68a6791d";

const highSignalCount = products.filter((product) => product.signalLevel === "high").length;

export default function Storefront() {
  return (
    <main>
      <div className="notice">LIVE AFFILIATE CATALOG · VERIFIED AMAZON ASINS · CJ REFERRAL CONNECTED</div>
      <header className="site-header">
        <Link className="brand" href="/">Atlas500 <span>Global Picks</span></Link>
        <nav aria-label="Main navigation">
          <a href="#products">Verified picks</a>
          <a href="#business-tools">Business tools</a>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">Independent product discovery · worldwide</p>
        <h1>Verified picks.<br /><em>Ready to shop.</em></h1>
        <p className="lead">Explore real Amazon listings selected from observable demand signals and matched to official ASIN pages. Every Amazon button includes the Atlas500 Associates tracking ID.</p>
        <a className="hero-button" href="#products">Shop verified products ↓</a>
        <div className="status-row">
          <span>Amazon listings matched: <b>{products.length}</b></span>
          <span>Strong demand signals: <b>{highSignalCount}</b></span>
          <span>Prices displayed: <b>0</b></span>
          <span>CJ referral route: <b>connected</b></span>
        </div>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <p className="eyebrow">Verified picks</p>
          <h2>Amazon products you can shop now</h2>
          <p>Demand badges record the strongest observable Amazon signals found during review. They are not permanent rank guarantees. Products without a badge are still matched to a real official Amazon listing.</p>
        </div>
        <ProductCatalog />
      </section>

      <section className="section tools" id="business-tools">
        <div className="section-heading">
          <p className="eyebrow">Business tools</p>
          <h2>Start an online store</h2>
          <p>Platforms for entrepreneurs are kept separate from retail products.</p>
        </div>
        <div className="tool-grid">
          <article className="tool-card">
            <span className="tool-tag">E-commerce platform</span>
            <h3>Shopify</h3>
            <p>Start your online store with Shopify.</p>
            <div className="pending">Official Shopify/Impact referral link required</div>
            <small>No purchase button is published until the official Impact tracking URL is supplied.</small>
          </article>
          <article className="tool-card">
            <span className="tool-tag">Dropshipping platform</span>
            <h3>CJ Dropshipping</h3>
            <p>A sourcing and fulfillment platform for merchants—not a verified product listing in this catalog.</p>
            <div className="connected">Official CJ referral route connected</div>
            <div className="tool-actions">
              <a className="tool-button" href={cjServiceUrl} target="_blank" rel="sponsored nofollow noopener">Explore CJ services →</a>
              <a className="tool-button secondary" href={cjRegistrationUrl} target="_blank" rel="sponsored nofollow noopener">Create a CJ account →</a>
            </div>
            <small>The supplied CJ account-generated token route is used. It promotes CJ merchant services, not unverified retail products.</small>
          </article>
        </div>
      </section>

      <section className="section disclosure-box">
        <p className="eyebrow">Affiliate disclosure</p>
        <p>{disclosure}</p>
        <p><strong>As an Amazon Associate, Atlas500 Global Picks earns from qualifying purchases.</strong></p>
        <Link className="text-link" href="/affiliate-disclosure">Read the full affiliate disclosure →</Link>
      </section>

      <footer>
        <div><strong>Atlas500 Global Picks</strong><p>{products.length} verified Amazon listings · CJ referral connected.</p></div>
        <nav aria-label="Legal navigation">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link href="/about">About Us</Link>
        </nav>
        <p className="verification">Impact-Site-Verification: 7e62f615-7224-474d-96de-8d3a7423a411</p>
      </footer>
    </main>
  );
}
