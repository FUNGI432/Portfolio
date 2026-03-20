import fs from 'fs';
import path from 'path';
import http from 'http';

const assetsDir = './public/mcp';
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

async function download(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(assetsDir, filename));
    http.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(assetsDir, filename), () => reject(err));
    });
  });
}

const assets = [
  { url: 'http://localhost:3845/assets/0a23c1aeb0152baaa1e4c011ad2176ec84015898.png', name: 'mobile_hero_bg.png' },
  { url: 'http://localhost:3845/assets/698b96bc8b2df6aa800b83437e86c4b7d93ac823.svg', name: 'mobile_hero_vector.svg' },
  { url: 'http://localhost:3845/assets/ce6b8b412f3d78e69ea89b63d8b850f2bbf0354c.svg', name: 'mobile_hero_arrow.svg' }
];

async function run() {
  for (const asset of assets) {
    console.log(`Downloading ${asset.url}...`);
    await download(asset.url, asset.name);
  }
  console.log('Done!');
}

run();
