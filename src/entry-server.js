/* eslint-disable tsdoc/syntax */
import { createRenderer } from "vue-server-renderer";
import { createApp } from "./main";

/**
 * Render by Server
 *
 * @param {import('vue-router').RawLocation} url - URL
 * @param {*} manifest - Manifest file.
 * @param {string} template - Template file.
 */
export function render(url, manifest, template) {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp("abstract");
    router.push(url);

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // no matched routes
      if (!matchedComponents.length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ code: 404 });
      }
      const renderer = createRenderer({
        manifest,
        template,
      });
      const context = {
        title: import.meta.env.VITE_APP_TITLE || "Vue APP",
        meta: `<meta name="description" content="${
          import.meta.env.VITE_APP_DESCRIPTION
        }"/>`,
      };

      return renderer
        .renderToString(app, context)
        .then((vueHtml) => {
          return resolve(vueHtml);
        })
        .catch((err) => {
          reject(err);
        });
    }, reject);
  });
}
