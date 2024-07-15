import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_Bc31avQS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_DCKKof7K.mjs';

const $$Banana = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Banana Game" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p id="greeting"></p> <div> <span id="counter"> count = Loading... </span> <button id="banana">🍌</button> </div> ` })} `;
}, "G:/webDev/Traning/Backend-API/astro-banana-game-task-1/src/pages/banana.astro", void 0);

const $$file = "G:/webDev/Traning/Backend-API/astro-banana-game-task-1/src/pages/banana.astro";
const $$url = "/banana";

export { $$Banana as default, $$file as file, $$url as url };
