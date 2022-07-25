/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "77875dc560fb9e458654380bd449011e"
  },
  {
    "url": "assets/css/0.styles.1241a0f9.css",
    "revision": "300c567dfb071fc7832a83fb906d5e4b"
  },
  {
    "url": "assets/img/1.c4899934.png",
    "revision": "c48999346e69607ab127a7aa34e609d5"
  },
  {
    "url": "assets/img/2.ef144eb5.png",
    "revision": "ef144eb51b9fc9cda0c9e24c10e98502"
  },
  {
    "url": "assets/img/3.b0c99292.png",
    "revision": "b0c99292eb4027b4530bde167ee25e1d"
  },
  {
    "url": "assets/img/5.1e943bb5.jpg",
    "revision": "1e943bb5db2afd4acacdd81fb07cef1f"
  },
  {
    "url": "assets/img/7.7ca42d12.png",
    "revision": "7ca42d12ab8f0f186a9c4c23f0d3c5b1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.28561c77.js",
    "revision": "b44ca3897eb942037dfed2b5b8e966ef"
  },
  {
    "url": "assets/js/11.4202badb.js",
    "revision": "e9aa51f95cd95ae5a5dc7905e21d7e7a"
  },
  {
    "url": "assets/js/12.1bf66f52.js",
    "revision": "46229f1aa80c4913694ca25f73c58fb5"
  },
  {
    "url": "assets/js/13.50652e0f.js",
    "revision": "cf503468e951da5d2ecbf3ceeea1317c"
  },
  {
    "url": "assets/js/14.6b8035f7.js",
    "revision": "07054a6478fdb094078a22c9d01afe47"
  },
  {
    "url": "assets/js/15.7e11616f.js",
    "revision": "77ed017d595416c04f5072c5895bf972"
  },
  {
    "url": "assets/js/16.0fdf73bd.js",
    "revision": "38ea50d8fdfd60205239807bdb7be383"
  },
  {
    "url": "assets/js/17.d06b048a.js",
    "revision": "725d619178a293b3281a00a42e52eaef"
  },
  {
    "url": "assets/js/18.732b4495.js",
    "revision": "1a3d793bdbb9a02051e787e96d233461"
  },
  {
    "url": "assets/js/19.db5b440b.js",
    "revision": "8c000b28446ccc0a943de0480585462b"
  },
  {
    "url": "assets/js/2.0cf83296.js",
    "revision": "a98a7788e087d40737bbabd4a499de3d"
  },
  {
    "url": "assets/js/20.f4927380.js",
    "revision": "17f18b345ec1bc3fe20663218690d949"
  },
  {
    "url": "assets/js/21.eeeca3bf.js",
    "revision": "bdae7b880976eb55b9ada5a4e7f0d777"
  },
  {
    "url": "assets/js/22.876e8b86.js",
    "revision": "8bcc20baa09de9867a616be084f4f48d"
  },
  {
    "url": "assets/js/23.571233b9.js",
    "revision": "a351ebfae2311f227b310d8c82082b5f"
  },
  {
    "url": "assets/js/24.99ade368.js",
    "revision": "c4ca7e92ef60f81e21f16042f5ad3f95"
  },
  {
    "url": "assets/js/25.61d0cee1.js",
    "revision": "fd4ad666c9693f010c6b0f3b73d47f22"
  },
  {
    "url": "assets/js/26.23caf067.js",
    "revision": "90abd10af97f3b3ab9e6391d2f1d59bd"
  },
  {
    "url": "assets/js/27.5292f675.js",
    "revision": "5b41320ee052c0e93a53263c1bd41ddb"
  },
  {
    "url": "assets/js/28.01546bdb.js",
    "revision": "7d8dce3aed4c7c36cbffa97c2d2a8b23"
  },
  {
    "url": "assets/js/29.9c339301.js",
    "revision": "517cebce872e1db5bee7eb95221002ae"
  },
  {
    "url": "assets/js/3.19bcfec2.js",
    "revision": "a6352ea9315e8c838e716a23d75c264e"
  },
  {
    "url": "assets/js/30.ceadf5e6.js",
    "revision": "60a4964d5e52c0194749727db76e07e7"
  },
  {
    "url": "assets/js/31.3abcaedb.js",
    "revision": "4b4cd4c87ab96a9a70b02fa940e7b12d"
  },
  {
    "url": "assets/js/32.84b87a85.js",
    "revision": "6cf46ae6deb5721794cd7d0c83e50a5b"
  },
  {
    "url": "assets/js/33.9268c50d.js",
    "revision": "cce7acd6bc744e37d8b63cc56fb57b0b"
  },
  {
    "url": "assets/js/34.97ca6230.js",
    "revision": "acbe88413c1e2be4c0eef61f9e84e245"
  },
  {
    "url": "assets/js/4.03108c36.js",
    "revision": "83fdd8268292cf4a8bed6aca98c6ebf4"
  },
  {
    "url": "assets/js/5.6b651daa.js",
    "revision": "12bae230fc3f2a1e4190f57edc1656e1"
  },
  {
    "url": "assets/js/6.44f6a208.js",
    "revision": "b48ea79ecafca965396012f814f973bf"
  },
  {
    "url": "assets/js/7.60ca881e.js",
    "revision": "f2f32ff8b3e224f2f1e3d8c911ceffb1"
  },
  {
    "url": "assets/js/8.a0279623.js",
    "revision": "7ea019506e8a3db7cab8bc995f46b267"
  },
  {
    "url": "assets/js/9.ba1a1d2e.js",
    "revision": "0a1e95d4130ffb66b5f2dc134e0a183a"
  },
  {
    "url": "assets/js/app.8a7815ed.js",
    "revision": "8c6ec2d34e145be075cee6cca08cb75e"
  },
  {
    "url": "config/index.html",
    "revision": "036fed6c49dbd2b2c714272f135d7dfe"
  },
  {
    "url": "guide/css/1.html",
    "revision": "2f130be0376dd6a8e5a0d7694d7b5147"
  },
  {
    "url": "guide/html/html.html",
    "revision": "3543fb525b5bfcb4838de3d12735f574"
  },
  {
    "url": "guide/index.html",
    "revision": "2af9cbc9da0297241d0ea36185915c8d"
  },
  {
    "url": "guide/js/1.html",
    "revision": "0039d5117e97ca7037beb6ac6c1dd670"
  },
  {
    "url": "guide/js/2.html",
    "revision": "f0ed7fccfad08790b89e63e1ea870fc1"
  },
  {
    "url": "guide/js/3.html",
    "revision": "a006132a2daa1707d599e0ee204abf93"
  },
  {
    "url": "guide/js/4.html",
    "revision": "20bd38b1dbb6c4d6cc2b62bb9366dc42"
  },
  {
    "url": "guide/js/5.html",
    "revision": "4c7e76d16fb12ded1706542efa38683e"
  },
  {
    "url": "guide/js/6.html",
    "revision": "02495055d0163587fa590ad799fa6bbc"
  },
  {
    "url": "guide/js/7.html",
    "revision": "da5623b666c3974ae838af40f6ce53b5"
  },
  {
    "url": "guide/start.html",
    "revision": "626d84e4604730125ef809739a2dde9b"
  },
  {
    "url": "guide/start/1.html",
    "revision": "a6a409f8a4d31ce1aab24e0a5b69f293"
  },
  {
    "url": "guide/start/2.html",
    "revision": "27ab9e81408e66dead3609a77eae17d1"
  },
  {
    "url": "guide/start/3.html",
    "revision": "9b15e6af74e91ef0aa1f17735a01a5f6"
  },
  {
    "url": "guide/start/4.html",
    "revision": "5980022cb633ee85fb1a1629b0c9890c"
  },
  {
    "url": "guide/test-vue.html",
    "revision": "e01be5964bcc8c98b61f48f72c4d0f2d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e0a2d2f9d7f5eb25ffd47ddfdeee8417"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "e82ff26f322646c9e2e16483340790a0"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "302c91b4b51443d094e5bb4c3b5b26c4"
  },
  {
    "url": "react/index.html",
    "revision": "88bdbd3176b3b41506c8cc57ed32d65d"
  },
  {
    "url": "react/test-vue.html",
    "revision": "4673cb447ca88ced572d257fda003b0e"
  },
  {
    "url": "react/using-vue.html",
    "revision": "c6e76bf541a93c263f2736368467577c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
