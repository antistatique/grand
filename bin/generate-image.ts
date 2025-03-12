// bun bin/generate-image.ts

/* Require:
 * - ImageMagick (https://imagemagick.org/)
 * - rename (for macOS https://formulae.brew.sh/formula/rename)
 *
 * More on image sizes/formats for the web on https://antistatique.github.io/placeholders/
 */
import { $ } from 'bun';

process.env.LC_ALL = 'en_US.UTF-8';

const widths = [256, 384, 640, 750, 828, 1080, 1200, 1653];
const ratios = ['original'];
const formats = [
  ['jpg', 65],
  ['avif', 55],
];

await $`rm -rf ./public/images`;
await $`mkdir -p ./public/images`;
await $`mkdir -p ./public/images/tmp`;

for (const ratio of ratios) {
  await $`mkdir -p ./public/images/tmp/${ratio}`;

  for (const width of widths) {
    const path = `./public/images/tmp/${ratio}/${width}`;
    await $`mkdir -p ${path}`;

    for (const format of formats) {
      const [ext, quality] = format;

      await $`mogrify -format ${ext} -quality ${quality} -resize ${width} -gravity Center -path ${path} src/assets/images/*.jpg`;
      await $`rename -s .${ext} '_${width}.${ext}' ${path}/*`;

      await $`mv ${path}/*.${ext} ./public/images/`;
    }
  }
}

await $`rm -rf ./public/images/tmp`;
