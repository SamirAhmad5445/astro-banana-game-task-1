import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_Bc31avQS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_DCKKof7K.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Banana Game." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form id="join-form"> <input type="text" name="name"> <button>Join</button> <p id="error-message"></p> </form> ` })} `;
}, "G:/webDev/Traning/Backend-API/astro-banana-game-task-1/src/pages/index.astro", void 0);

const $$file = "G:/webDev/Traning/Backend-API/astro-banana-game-task-1/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
