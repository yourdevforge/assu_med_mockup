<template>
  <div class="home-page">
    <header class="site-header">
      <div class="top-bar">
        <div class="top-bar__inner">
          <div class="contact-links" aria-label="Contact details">
            <a href="mailto:info@assumed.co.za">info@assumed.co.za</a>
            <a href="#location">Find our location</a>
          </div>
          <strong>24 HOUR AMBULANCE SERVICES - CALL CENTRE 021 879 4716</strong>
        </div>
      </div>

      <nav class="main-nav" aria-label="Primary navigation">
        <NuxtLink class="brand" to="/" aria-label="Assu-Med home">
          <img class="brand__logo" src="/images/logo4.png" alt="Assu-Med" />
          <span class="brand__slogan">YOUR HEALTH IS OUR CONCERN</span>
        </NuxtLink>

        <button class="menu-button" type="button" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links">
          <li>
            <NuxtLink to="/" exact-active-class="is-active">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/who-we-are" active-class="is-active"
              >Who We Are</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/services-offered" active-class="is-active"
              >Services Offered</NuxtLink
            >
          </li>
          <li><NuxtLink to="/blog" active-class="is-active">Blog</NuxtLink></li>
          <li>
            <NuxtLink to="/gallery" active-class="is-active">Gallery</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/vacancies" active-class="is-active"
              >Vacancies</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" active-class="is-active"
              >Contact Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" active-class="is-active">About Us</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <slot />

    <footer class="site-footer" id="contact">
      <div class="site-footer__inner">
        <div class="footer-col footer-col--emergency">
          <h3 class="footer-col__title">Emergency</h3>
          <p class="footer-col__sub">Contact Centre &amp; Road Operations</p>
          <div class="footer-emergency">
            <div class="footer-emergency__icon" aria-hidden="true">
              <SvgIcon name="phone" />
            </div>
            <div class="footer-emergency__hours">24 HOUR</div>
          </div>
          <p class="footer-emergency__label">Call Centre</p>
          <p class="footer-emergency__number">021 879 4716</p>
        </div>

        <div class="footer-col">
          <h3 class="footer-col__title">Head Office</h3>
          <address class="footer-col__address">
            Assu-Med Ambulance Services<br />
            Watergate Boulevard<br />
            Watergate Villa, Lentegeur<br />
            Mitchell's Plain<br />
            Western Cape, 7785
          </address>
          <p class="footer-col__address">
            <strong>Company Reg:</strong> 2020/252344/07<br />
            <strong>Tax Ref:</strong> 9019328286
          </p>
        </div>

        <div class="footer-col">
          <p class="footer-contact"><strong>Tel:</strong> 021 879 4716</p>
          <p class="footer-contact">
            <strong>E-mail:</strong>
            <a href="mailto:info@assumed.co.za">info@assumed.co.za</a>
          </p>
          <p class="footer-social">
            <a href="#facebook"
              >Follow us on Facebook
              <span aria-hidden="true"><SvgIcon name="facebook" /></span
            ></a>
          </p>
          <p class="footer-social">
            <a href="#twitter"
              >Follow us on Twitter
              <span aria-hidden="true"><SvgIcon name="twitter" /></span
            ></a>
          </p>
        </div>

        <div class="footer-col">
          <h3 class="footer-col__title">Newsletter</h3>
          <p class="footer-col__sub">
            Stay informed - sign up to our Newsletter.
          </p>
          <form class="newsletter" @submit.prevent>
            <input
              type="email"
              class="newsletter__input"
              placeholder="Your Email Address"
              aria-label="Your Email Address"
            />
            <button
              type="submit"
              class="newsletter__submit"
              aria-label="Subscribe"
            >
              <SvgIcon name="lock" />
            </button>
          </form>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>
          &copy; 2025 Assu-Med Ambulance Services Pty (Ltd). All Rights
          Reserved.
        </p>
        <a class="back-to-top" href="#top" aria-label="Back to top">
          <SvgIcon name="arrow-up" />
        </a>
      </div>
    </footer>
  </div>
</template>
