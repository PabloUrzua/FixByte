import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as maybeRenderHead, i as renderComponent, p as addAttribute, u as renderTemplate, x as createAstro, y as unescapeHTML } from "./server_DVmJkfu_.mjs";
import { t as createComponent } from "./compiler_D0p0pDok.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_CmWF_Flm.mjs";
//#region src/components/ServiceCard.astro
createAstro("https://astro.build");
var $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ServiceCard;
	const { title, description, icon, delay = 0 } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="service-card"${addAttribute(`animation-delay: ${delay}s`, "style")} data-astro-cid-3vpt37q6><div class="card-glow" data-astro-cid-3vpt37q6></div><div class="card-content" data-astro-cid-3vpt37q6><div class="icon-wrapper" data-astro-cid-3vpt37q6>${unescapeHTML(icon)}</div><h3 data-astro-cid-3vpt37q6>${title}</h3><p data-astro-cid-3vpt37q6>${description}</p></div></div>`;
}, "D:/TRABAJO/FixByte/src/components/ServiceCard.astro", void 0);
//#endregion
//#region src/components/PricingCard.astro
createAstro("https://astro.build");
var $$PricingCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PricingCard;
	const { title, price, description, features, isPopular = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`pricing-card ${isPopular ? "popular" : ""}`, "class")} data-astro-cid-4nlvgvc4>${isPopular && renderTemplate`<div class="badge-popular" data-astro-cid-4nlvgvc4>Más Elegido</div>`}<div class="card-header" data-astro-cid-4nlvgvc4><h3 data-astro-cid-4nlvgvc4>${title}</h3><p data-astro-cid-4nlvgvc4>${description}</p><div class="price" data-astro-cid-4nlvgvc4><span class="amount" data-astro-cid-4nlvgvc4>${price}</span></div></div><ul class="features" data-astro-cid-4nlvgvc4>${features.map((feature) => renderTemplate`<li data-astro-cid-4nlvgvc4><div class="check-circle" data-astro-cid-4nlvgvc4><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" data-astro-cid-4nlvgvc4><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" data-astro-cid-4nlvgvc4></path></svg></div>${feature}</li>`)}</ul><a href="#contacto"${addAttribute(`btn-plan ${isPopular ? "btn-popular" : "btn-outline"}`, "class")} data-astro-cid-4nlvgvc4>Comenzar Ahora</a></div>`;
}, "D:/TRABAJO/FixByte/src/components/PricingCard.astro", void 0);
//#endregion
//#region src/components/ProjectCard.astro
createAstro("https://astro.build");
var $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProjectCard;
	const { title, category, image, delay = 0 } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="project-card reveal"${addAttribute(`animation-delay: ${delay}s`, "style")} data-astro-cid-y2vllrex><div class="image-wrapper" data-astro-cid-y2vllrex><img${addAttribute(image, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-y2vllrex><div class="overlay" data-astro-cid-y2vllrex><a href="#contacto" class="view-btn" data-astro-cid-y2vllrex>Ver Detalles</a></div></div><div class="project-info" data-astro-cid-y2vllrex><span class="category" data-astro-cid-y2vllrex>${category}</span><h3 data-astro-cid-y2vllrex>${title}</h3></div></div>`;
}, "D:/TRABAJO/FixByte/src/components/ProjectCard.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const codeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`;
	const webIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`;
	const consultIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>`;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "FixByte - Creamos el Futuro Digital",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="navbar" data-astro-cid-lcdefpme><div class="container nav-container" data-astro-cid-lcdefpme><a href="/" class="logo" data-astro-cid-lcdefpme>FIX<span class="logo-accent" data-astro-cid-lcdefpme>BYTE</span></a><button class="mobile-menu-btn" aria-label="Abrir menú" id="mobileMenuBtn" data-astro-cid-lcdefpme><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-lcdefpme><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-lcdefpme></path></svg></button><nav class="nav-links" id="navLinks" data-astro-cid-lcdefpme><a href="#inicio" data-astro-cid-lcdefpme>INICIO</a><a href="#servicios" data-astro-cid-lcdefpme>SERVICIOS</a><a href="#proyectos" data-astro-cid-lcdefpme>PROYECTOS</a><a href="#precios" data-astro-cid-lcdefpme>PRECIOS</a><div class="mobile-actions" data-astro-cid-lcdefpme><a href="/login" class="btn-secondary" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;" data-astro-cid-lcdefpme><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-lcdefpme><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" data-astro-cid-lcdefpme></path></svg>INICIAR SESIÓN</a><a href="#contacto" class="btn-primary" style="width: 100%; text-align: center;" data-astro-cid-lcdefpme>COTIZA TU PROYECTO</a></div></nav><div class="nav-actions" style="display: flex; align-items: center; gap: 1rem;" data-astro-cid-lcdefpme><a href="/login" class="btn-secondary" style="display: flex; align-items: center; gap: 8px;" data-astro-cid-lcdefpme><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-lcdefpme><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" data-astro-cid-lcdefpme></path></svg>INICIAR SESIÓN</a><a href="#contacto" class="btn-primary" data-astro-cid-lcdefpme>COTIZA TU PROYECTO</a></div></div></header><main data-astro-cid-lcdefpme><!-- Hero Section --><section id="inicio" class="hero" data-astro-cid-lcdefpme><!-- Partículas de fondo --><div class="particles" data-astro-cid-lcdefpme><div class="particle p1" data-astro-cid-lcdefpme></div><div class="particle p2" data-astro-cid-lcdefpme></div><div class="particle p3" data-astro-cid-lcdefpme></div><div class="particle p4" data-astro-cid-lcdefpme></div><div class="particle p5" data-astro-cid-lcdefpme></div><div class="particle p6" data-astro-cid-lcdefpme></div><div class="particle p7" data-astro-cid-lcdefpme></div><div class="particle p8" data-astro-cid-lcdefpme></div></div><!-- Blobs animados de fondo --><div class="blob blob-1" data-astro-cid-lcdefpme></div><div class="blob blob-2" data-astro-cid-lcdefpme></div><div class="blob blob-3" data-astro-cid-lcdefpme></div><!-- Grid decorativo --><div class="grid-overlay" data-astro-cid-lcdefpme></div><div class="container hero-container" data-astro-cid-lcdefpme><div class="hero-content" data-astro-cid-lcdefpme><h1 data-astro-cid-lcdefpme>Creamos tu <span class="text-gradient" data-astro-cid-lcdefpme>Presencia Digital</span> de otro nivel</h1><p data-astro-cid-lcdefpme>Diseño web de vanguardia, software a medida y tiendas online. Tecnología rápida, escalable y visualmente impactante.</p><div class="hero-buttons" data-astro-cid-lcdefpme><a href="#contacto" class="btn-primary" data-astro-cid-lcdefpme>COTIZA TU PROYECTO</a><a href="#servicios" class="btn-text" data-astro-cid-lcdefpme>Descubre cómo &rarr;</a></div><!-- Stats rápidos --><div class="hero-stats" data-astro-cid-lcdefpme><div class="stat" data-astro-cid-lcdefpme><span class="stat-number" data-astro-cid-lcdefpme>50+</span><span class="stat-label" data-astro-cid-lcdefpme>Proyectos</span></div><div class="stat-divider" data-astro-cid-lcdefpme></div><div class="stat" data-astro-cid-lcdefpme><span class="stat-number" data-astro-cid-lcdefpme>100%</span><span class="stat-label" data-astro-cid-lcdefpme>Satisfacción</span></div><div class="stat-divider" data-astro-cid-lcdefpme></div><div class="stat" data-astro-cid-lcdefpme><span class="stat-number" data-astro-cid-lcdefpme>24/7</span><span class="stat-label" data-astro-cid-lcdefpme>Soporte Especializado</span></div></div></div><div class="hero-visual" data-astro-cid-lcdefpme><div class="hero-animation-wrapper" data-astro-cid-lcdefpme><!-- Canvas de partículas 3D --><canvas id="particleCanvas" class="particle-canvas" data-astro-cid-lcdefpme></canvas><!-- Ventana de código animada --><div class="code-window" data-astro-cid-lcdefpme><div class="code-header" data-astro-cid-lcdefpme><span class="dot red" data-astro-cid-lcdefpme></span><span class="dot yellow" data-astro-cid-lcdefpme></span><span class="dot green" data-astro-cid-lcdefpme></span><span class="code-title" data-astro-cid-lcdefpme>index.tsx</span></div><div class="code-body" data-astro-cid-lcdefpme><div class="code-line" style="--delay: 0.2s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>1</span><span class="kw" data-astro-cid-lcdefpme>import</span> <span class="str" data-astro-cid-lcdefpme>React</span> <span class="kw" data-astro-cid-lcdefpme>from</span> <span class="str" data-astro-cid-lcdefpme>'react'</span>;</div><div class="code-line" style="--delay: 0.5s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>2</span><span class="kw" data-astro-cid-lcdefpme>import</span> ${renderTemplate`<span class="fn" data-astro-cid-lcdefpme>motion</span>`} <span class="kw" data-astro-cid-lcdefpme>from</span> <span class="str" data-astro-cid-lcdefpme>'framer-motion'</span>;</div><div class="code-line" style="--delay: 0.8s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>3</span></div><div class="code-line" style="--delay: 1.1s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>4</span><span class="kw" data-astro-cid-lcdefpme>const</span> <span class="fn" data-astro-cid-lcdefpme>App</span> = () => ${"{"}</div><div class="code-line" style="--delay: 1.4s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>5</span>&nbsp;&nbsp;<span class="kw" data-astro-cid-lcdefpme>return</span> (</div><div class="code-line" style="--delay: 1.7s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>6</span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="fn" data-astro-cid-lcdefpme>motion.div</span> <span class="attr" data-astro-cid-lcdefpme>animate</span>=${"{{"}scale: 1${"}}"}</div><div class="code-line highlight-line" style="--delay: 2s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="attr" data-astro-cid-lcdefpme>className</span>=<span class="str" data-astro-cid-lcdefpme>"hero"</span>&gt;</div><div class="code-line" style="--delay: 2.3s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="fn" data-astro-cid-lcdefpme>h1</span>&gt;FixByte&lt;/<span class="fn" data-astro-cid-lcdefpme>h1</span>&gt;</div><div class="code-line" style="--delay: 2.6s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>9</span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="fn" data-astro-cid-lcdefpme>motion.div</span>&gt;</div><div class="code-line" style="--delay: 2.9s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>10</span>&nbsp;&nbsp;);</div><div class="code-line" style="--delay: 3.2s" data-astro-cid-lcdefpme><span class="line-num" data-astro-cid-lcdefpme>11</span>${"}"};</div><div class="cursor-blink" data-astro-cid-lcdefpme></div></div></div><!-- Mini ventana de terminal animada --><div class="terminal-window" data-astro-cid-lcdefpme><div class="terminal-header" data-astro-cid-lcdefpme><span class="dot red small" data-astro-cid-lcdefpme></span><span class="dot yellow small" data-astro-cid-lcdefpme></span><span class="dot green small" data-astro-cid-lcdefpme></span><span class="terminal-title" data-astro-cid-lcdefpme>Terminal</span></div><div class="terminal-body" data-astro-cid-lcdefpme><div class="term-line" style="--delay: 3.5s" data-astro-cid-lcdefpme><span class="term-prompt" data-astro-cid-lcdefpme>$</span> npm run build</div><div class="term-line" style="--delay: 4s" data-astro-cid-lcdefpme><span class="term-success" data-astro-cid-lcdefpme>✓</span> Compiled successfully</div><div class="term-line" style="--delay: 4.5s" data-astro-cid-lcdefpme><span class="term-success" data-astro-cid-lcdefpme>✓</span> <span class="term-highlight" data-astro-cid-lcdefpme>Deployed to production</span></div><div class="term-cursor" data-astro-cid-lcdefpme></div></div></div><!-- Orbitales decorativos --><div class="orbit-ring" data-astro-cid-lcdefpme></div><div class="orbit-ring orbit-ring-2" data-astro-cid-lcdefpme></div><div class="glow-dot glow-1" data-astro-cid-lcdefpme></div><div class="glow-dot glow-2" data-astro-cid-lcdefpme></div><div class="glow-dot glow-3" data-astro-cid-lcdefpme></div></div></div></div></section><!-- Script del Canvas de Partículas -->${renderScript($$result, "D:/TRABAJO/FixByte/src/pages/index.astro?astro&type=script&index=0&lang.ts")}<!-- Services Section --><section id="servicios" class="services reveal" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="section-title" data-astro-cid-lcdefpme><h2 data-astro-cid-lcdefpme>Nuestros <span class="text-gradient-purple" data-astro-cid-lcdefpme>Servicios</span></h2><p data-astro-cid-lcdefpme>Soluciones integrales de desarrollo adaptadas a las necesidades del mundo moderno.</p></div><div class="services-grid" data-astro-cid-lcdefpme>${renderComponent($$result, "ServiceCard", $$ServiceCard, {
		"title": "Páginas Web Rápidas",
		"description": "Sitios web optimizados, responsivos y con un diseño impecable que convierte visitantes en clientes.",
		"icon": webIcon,
		"delay": 0,
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "ServiceCard", $$ServiceCard, {
		"title": "Software a Medida",
		"description": "Desarrollo de aplicaciones web y herramientas internas robustas para automatizar tus procesos.",
		"icon": codeIcon,
		"delay": .1,
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "ServiceCard", $$ServiceCard, {
		"title": "Consultoría IT",
		"description": "Te guiamos en la digitalización de tu negocio, eligiendo las mejores arquitecturas y tecnologías.",
		"icon": consultIcon,
		"delay": .2,
		"data-astro-cid-lcdefpme": true
	})}</div></div></section><!-- Portfolio Section --><section id="proyectos" class="portfolio reveal" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="section-title" data-astro-cid-lcdefpme><h2 data-astro-cid-lcdefpme>Casos de <span class="text-gradient" data-astro-cid-lcdefpme>Éxito</span></h2><p data-astro-cid-lcdefpme>Explora algunos de nuestros proyectos recientes y descubre la calidad de nuestro trabajo.</p></div><div class="portfolio-grid" data-astro-cid-lcdefpme>${renderComponent($$result, "ProjectCard", $$ProjectCard, {
		"title": "Dashboard de E-commerce",
		"category": "Plataforma Web",
		"image": "/ecommerce.png",
		"delay": 0,
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "ProjectCard", $$ProjectCard, {
		"title": "Landing Page Corporativa",
		"category": "Diseño UI / UX",
		"image": "/landing.png",
		"delay": .1,
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "ProjectCard", $$ProjectCard, {
		"title": "Dashboard de Gestión",
		"category": "Desarrollo Web",
		"image": "/dashboard.png",
		"delay": .2,
		"data-astro-cid-lcdefpme": true
	})}</div></div></section><!-- Pricing Section --><section id="precios" class="pricing reveal" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="section-title" data-astro-cid-lcdefpme><h2 data-astro-cid-lcdefpme>Nuestros <span class="text-gradient" data-astro-cid-lcdefpme>Precios</span></h2><p data-astro-cid-lcdefpme>Elige el paquete que mejor se adapte a tu etapa de crecimiento.</p></div><div class="pricing-grid" data-astro-cid-lcdefpme>${renderComponent($$result, "PricingCard", $$PricingCard, {
		"title": "Web Corporativa",
		"price": "$350.000",
		"description": "Presencia online profesional para tu negocio o marca personal.",
		"features": [
			"Diseño vibrante y responsivo",
			"Hasta 5 secciones completas",
			"Formulario y enlaces a RRSS",
			"Optimización SEO y velocidad"
		],
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "PricingCard", $$PricingCard, {
		"title": "Tienda Online",
		"price": "$650.000",
		"description": "Vende tus productos 24/7 con una plataforma segura.",
		"features": [
			"Todo lo del plan Corporativa",
			"Pasarelas de pago integradas",
			"Panel administrador de ventas",
			"Carga de primeros 50 productos"
		],
		"isPopular": true,
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "PricingCard", $$PricingCard, {
		"title": "Proyecto a Medida",
		"price": "Consultar",
		"description": "Soluciones avanzadas para necesidades específicas.",
		"features": [
			"Sistemas de bases de datos",
			"Conexión con APIs y ERPs",
			"Múltiples roles de usuarios",
			"Arquitectura serverless"
		],
		"data-astro-cid-lcdefpme": true
	})}</div></div></section><!-- Contact Section --><section id="contacto" class="contact reveal" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="contact-box" data-astro-cid-lcdefpme><div class="contact-info" data-astro-cid-lcdefpme><h2 data-astro-cid-lcdefpme>¿Tienes un proyecto en mente?</h2><p data-astro-cid-lcdefpme>Escríbenos y nuestro equipo te preparará una propuesta técnica espectacular.</p></div><form class="contact-form" onsubmit="event.preventDefault(); alert('Enviado');" data-astro-cid-lcdefpme><input type="text" placeholder="Tu Nombre o Empresa" required data-astro-cid-lcdefpme><input type="email" placeholder="Correo Electrónico" required data-astro-cid-lcdefpme><textarea placeholder="Cuéntanos brevemente de qué trata tu idea..." rows="4" required data-astro-cid-lcdefpme></textarea><button type="submit" class="btn-primary w-full" data-astro-cid-lcdefpme>Enviar Mensaje</button></form></div></div></section></main><footer class="footer" data-astro-cid-lcdefpme><div class="container footer-content" data-astro-cid-lcdefpme><a href="/" class="logo" data-astro-cid-lcdefpme>FIX<span class="logo-accent" data-astro-cid-lcdefpme>BYTE</span></a><nav class="footer-nav" data-astro-cid-lcdefpme><a href="#inicio" data-astro-cid-lcdefpme>INICIO</a><a href="#servicios" data-astro-cid-lcdefpme>SERVICIOS</a><a href="#portfolio" data-astro-cid-lcdefpme>PORTFOLIO</a><a href="#precios" data-astro-cid-lcdefpme>PRECIOS</a></nav><p data-astro-cid-lcdefpme>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} FIXBYTE. Todos los derechos reservados.</p></div></footer>` })}`;
}, "D:/TRABAJO/FixByte/src/pages/index.astro", void 0);
var $$file = "D:/TRABAJO/FixByte/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
