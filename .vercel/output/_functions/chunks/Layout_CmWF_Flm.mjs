import { f as renderHead, m as createRenderInstruction, p as addAttribute, s as renderSlot, u as renderTemplate, x as createAstro } from "./server_DVmJkfu_.mjs";
import { t as createComponent } from "./compiler_D0p0pDok.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title, description = "FixByte - Creamos tu Presencia Digital de otro nivel. Diseño web, software a medida y tiendas online.", keywords = "desarrollo web, diseño web, software a medida, aplicaciones móviles, ecommerce, tiendas online, agencia digital, chile", image = "/favicon.svg" } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro.generator, "content")}><!-- SEO Básico --><title>${title} | FixByte Agencia Digital</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><meta name="author" content="FixByte"><meta name="robots" content="index, follow"><link rel="canonical"${addAttribute(Astro.url.href, "href")}><!-- Open Graph / Redes Sociales --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro.url.href, "content")}><meta property="og:title"${addAttribute(`${title} | FixByte`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro.url.href, "content")}><meta property="twitter:title"${addAttribute(`${title} | FixByte`, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro.url), "content")}><!-- Fuentes --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}${renderScript($$result, "D:/TRABAJO/FixByte/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/TRABAJO/FixByte/src/layouts/Layout.astro", void 0);
//#endregion
export { renderScript as n, $$Layout as t };
