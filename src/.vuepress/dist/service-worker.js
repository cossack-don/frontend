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
    "revision": "696d9b14c86d7b58222b5234ae2e0b0b"
  },
  {
    "url": "assets/css/0.styles.de088ff9.css",
    "revision": "a7fc1a8aff986037bae6e48e54f0b34f"
  },
  {
    "url": "assets/img/1.c4899934.png",
    "revision": "c48999346e69607ab127a7aa34e609d5"
  },
  {
    "url": "assets/img/10.e5aacc83.jpg",
    "revision": "e5aacc83ac91806b19d19e5ce91bce8f"
  },
  {
    "url": "assets/img/11.3ec95d83.png",
    "revision": "3ec95d8349c14e9b581dcbdbff4264e6"
  },
  {
    "url": "assets/img/111.18581644.jpg",
    "revision": "18581644cd45afe98eca88a6b3a521a7"
  },
  {
    "url": "assets/img/112.7241e636.png",
    "revision": "7241e636ab529b631e1906901326baba"
  },
  {
    "url": "assets/img/113.d046afec.jpg",
    "revision": "d046afecc5d8abaa83620e48b8a78be7"
  },
  {
    "url": "assets/img/12.a1928bd4.jpg",
    "revision": "a1928bd44a70644b730389adb95418c8"
  },
  {
    "url": "assets/img/13.da74cb00.jpg",
    "revision": "da74cb0023207418cd08113bc08a4fab"
  },
  {
    "url": "assets/img/14.2a4acdfc.jpg",
    "revision": "2a4acdfcf11824acb7df0fb0b74eba44"
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
    "url": "assets/img/8.194ece33.jpg",
    "revision": "194ece33ff6b0f53c86d94b0caba602a"
  },
  {
    "url": "assets/img/9.5f41d964.jpg",
    "revision": "5f41d964387e5999eb3273351a0c1278"
  },
  {
    "url": "assets/img/added-css.fa533033.png",
    "revision": "fa533033c403112cacaeb80b4f1c8516"
  },
  {
    "url": "assets/img/animate.4689a2f8.png",
    "revision": "4689a2f815e01311bcfa384be3120530"
  },
  {
    "url": "assets/img/atributes.c0f6a1d9.png",
    "revision": "c0f6a1d9112c4d9341bf88f24a8cf2b2"
  },
  {
    "url": "assets/img/bg-1.9f14447b.png",
    "revision": "9f14447b28973ee76c883f191c7e829a"
  },
  {
    "url": "assets/img/bg-2.f808b469.png",
    "revision": "f808b4693ecbd913f428cd2b21067de8"
  },
  {
    "url": "assets/img/box-model.8168cc2c.png",
    "revision": "8168cc2cc5f634864f74d6c64531d76f"
  },
  {
    "url": "assets/img/box-model2.2bb5f237.png",
    "revision": "2bb5f23767801f12f7a437bcac434855"
  },
  {
    "url": "assets/img/box-model3.bafe379a.png",
    "revision": "bafe379a0bd8f1ec5e9d3b5c6de856e0"
  },
  {
    "url": "assets/img/CSS3.c889c78a.jpeg",
    "revision": "c889c78a134eb4bbbb2f35253107c982"
  },
  {
    "url": "assets/img/example-pug.dfaeb316.jpg",
    "revision": "dfaeb3160331ddb114552939a7c5c1e7"
  },
  {
    "url": "assets/img/example.4d662d2e.png",
    "revision": "4d662d2e3ef1e48ef29e82bd0bf0ee90"
  },
  {
    "url": "assets/img/extends.b5cd8d53.png",
    "revision": "b5cd8d53096c8982f2bed3e34e20f73f"
  },
  {
    "url": "assets/img/fonts.05f7d1a1.png",
    "revision": "05f7d1a1fcdc70c40f722a5b1ce155c8"
  },
  {
    "url": "assets/img/form.dee233e8.jpg",
    "revision": "dee233e8aad92bf1b06d1118164a672d"
  },
  {
    "url": "assets/img/freams.5759477e.png",
    "revision": "5759477e65f35eb454167027ea2497d2"
  },
  {
    "url": "assets/img/git-2.77a1c781.png",
    "revision": "77a1c781c21136f230dc4ddc68220bb7"
  },
  {
    "url": "assets/img/git-3.a0654804.jpeg",
    "revision": "a06548047d34a834ad117bc061c2bb83"
  },
  {
    "url": "assets/img/git-4.56e52ee3.jpeg",
    "revision": "56e52ee34726dc97a3ca368883cab6a7"
  },
  {
    "url": "assets/img/git.f6a5fd17.png",
    "revision": "f6a5fd17d306b1629f726813391f413f"
  },
  {
    "url": "assets/img/github-1.d022a993.png",
    "revision": "d022a993433fabd946840a7f8deefa36"
  },
  {
    "url": "assets/img/github-2.ee9512ab.png",
    "revision": "ee9512ab3d4c17c3b2f04cb7c29e568d"
  },
  {
    "url": "assets/img/github-3.b10e9117.png",
    "revision": "b10e91171c43859dec33a6dad420dda3"
  },
  {
    "url": "assets/img/github.a2077591.jpg",
    "revision": "a2077591e0c06d5d2991defcddab9f40"
  },
  {
    "url": "assets/img/gradient.dcfc4684.png",
    "revision": "dcfc468432c0486751e88cbb48775fd9"
  },
  {
    "url": "assets/img/grid.96e598e0.png",
    "revision": "96e598e025853200fdb58a2f29eee718"
  },
  {
    "url": "assets/img/html-5.5021525a.jpg",
    "revision": "5021525ad3c5e8d152ea40003d7b9807"
  },
  {
    "url": "assets/img/html.fa99f9a1.jpg",
    "revision": "fa99f9a1c7156854d69b8a3fc311be97"
  },
  {
    "url": "assets/img/html5-2.86841b26.png",
    "revision": "86841b260a10df24b941bf7e024f6d78"
  },
  {
    "url": "assets/img/html5.299be034.png",
    "revision": "299be034b91aa60b9080ee53750b8500"
  },
  {
    "url": "assets/img/img.1255a2d7.png",
    "revision": "1255a2d77df56c5ccead072ae8e09ec0"
  },
  {
    "url": "assets/img/img1.ee3b816e.png",
    "revision": "ee3b816eb2ee8166493bf08da3f7b309"
  },
  {
    "url": "assets/img/img111.f540dfb6.png",
    "revision": "f540dfb61eb0a941f315233f4a92ba36"
  },
  {
    "url": "assets/img/img3.c4f69624.png",
    "revision": "c4f6962476586a4152bff49b508a1d46"
  },
  {
    "url": "assets/img/img313.754fe7b6.png",
    "revision": "754fe7b6ae86f8aeb3ab8fbe4705cfce"
  },
  {
    "url": "assets/img/img3333.d0713491.png",
    "revision": "d071349178c26f4184d5b4d8ea93b580"
  },
  {
    "url": "assets/img/imgqqq.10598129.png",
    "revision": "10598129227aa85f9302c5d1c5e65394"
  },
  {
    "url": "assets/img/inline-block-1.07c7b717.png",
    "revision": "07c7b7171c323860c4677f1952186301"
  },
  {
    "url": "assets/img/inline-block-2.b7094143.png",
    "revision": "b7094143f36452f53415ba0cc0da455f"
  },
  {
    "url": "assets/img/inline-block-3.0b75dda2.png",
    "revision": "0b75dda21995c2606692038c98d42759"
  },
  {
    "url": "assets/img/inline-block-4.a1fd4ec4.png",
    "revision": "a1fd4ec497b1b4fd3eed30efb9428334"
  },
  {
    "url": "assets/img/inline-block-5.8632754f.png",
    "revision": "8632754fd3665d7b682e7cd2eeb2ee28"
  },
  {
    "url": "assets/img/kaskad.0249a1a7.png",
    "revision": "0249a1a79c1cb26dcdd92223f16f644f"
  },
  {
    "url": "assets/img/links-css.31ab0ef2.png",
    "revision": "31ab0ef23f8095cd742ff8cc5675cc8b"
  },
  {
    "url": "assets/img/mixins.dba0e19f.png",
    "revision": "dba0e19fe16d6c6d6b1a21d93371ab67"
  },
  {
    "url": "assets/img/module.4b8f5491.png",
    "revision": "4b8f5491c8b8a1823b7f90006162bb6d"
  },
  {
    "url": "assets/img/new-tags.bb498a1d.png",
    "revision": "bb498a1d617ee8ecb1b26cef49da22bf"
  },
  {
    "url": "assets/img/nexin.aeaa1ec4.png",
    "revision": "aeaa1ec43fb509125fb3554fad26cc31"
  },
  {
    "url": "assets/img/normalaze.838b2847.png",
    "revision": "838b284786dcd3be08593e6bc4cc5127"
  },
  {
    "url": "assets/img/operators.82b98c85.png",
    "revision": "82b98c85ca646d67a841b1ff8525dd46"
  },
  {
    "url": "assets/img/prioritet_kaskad.dae75d07.png",
    "revision": "dae75d07429c1d9f3ef0c627b3e2eb46"
  },
  {
    "url": "assets/img/psevdo.f2d8aab0.png",
    "revision": "f2d8aab07780d0cda526745a7571737d"
  },
  {
    "url": "assets/img/psevdo2.8e1c344d.png",
    "revision": "8e1c344d68b7f2c5fd29f822595ad0b7"
  },
  {
    "url": "assets/img/pug.b2172987.jpg",
    "revision": "b2172987ebc5fe66483f9595b41779a8"
  },
  {
    "url": "assets/img/save.c7f39e70.png",
    "revision": "c7f39e702c4980e77f8c5e1072d34872"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selectors.0b49cba4.png",
    "revision": "0b49cba4b282202d6396dffefdc55aa9"
  },
  {
    "url": "assets/img/sintacsis.cd55b036.png",
    "revision": "cd55b0367eab9a2bae112cb505704fe6"
  },
  {
    "url": "assets/img/spevc.5f25f5e8.png",
    "revision": "5f25f5e871673b82e6c053da867e53d2"
  },
  {
    "url": "assets/img/styleelint.d6362614.png",
    "revision": "d6362614a07c95ec72aefe854a86fe56"
  },
  {
    "url": "assets/img/transform.c8a43241.png",
    "revision": "c8a432419bad4359abf2c3a121cff122"
  },
  {
    "url": "assets/img/vars.3cafd609.png",
    "revision": "3cafd6098e16511ef8dec4e539e70724"
  },
  {
    "url": "assets/js/10.ee07c6e0.js",
    "revision": "5730ba6e26ca909f31bf6c13f0712701"
  },
  {
    "url": "assets/js/11.cd9d5164.js",
    "revision": "000521bd5c1e147ef3cc95828a82e414"
  },
  {
    "url": "assets/js/12.1240589a.js",
    "revision": "89f914733f888bb2d749bf87733f9fe0"
  },
  {
    "url": "assets/js/13.de91c664.js",
    "revision": "1228b5277d34381fbc291a499498d2ef"
  },
  {
    "url": "assets/js/14.bbf9f227.js",
    "revision": "460ccde924f2e46890e36efac7ab8c92"
  },
  {
    "url": "assets/js/15.daea7e0a.js",
    "revision": "0792d098be3f464b8b3b19b1ad107774"
  },
  {
    "url": "assets/js/16.108f1762.js",
    "revision": "50c94df15ecd1bcd4019cd06e05dc4aa"
  },
  {
    "url": "assets/js/17.3a979495.js",
    "revision": "009840d8f6a7fb30177b57705c342cb2"
  },
  {
    "url": "assets/js/18.2fd8312f.js",
    "revision": "ded8f95ef9f9462b7c0fdd1de2c8d0fe"
  },
  {
    "url": "assets/js/19.97af74ee.js",
    "revision": "2b7daf00c694bc0fae0e95fd0a807d9a"
  },
  {
    "url": "assets/js/2.2f0f96cf.js",
    "revision": "2cda41988bbb821ce702945e3b45c0ce"
  },
  {
    "url": "assets/js/20.7a4320f0.js",
    "revision": "d389e1b09b8b513f5df216f5a15d9a3e"
  },
  {
    "url": "assets/js/21.dc033fa8.js",
    "revision": "89eed8b18fc19ffec8083b490806dd0c"
  },
  {
    "url": "assets/js/22.c9347e29.js",
    "revision": "a4d64d047f4bbab713244bce8a5a5ab4"
  },
  {
    "url": "assets/js/23.2498cf90.js",
    "revision": "83456881d3a6321d9d7cee562e64f7f1"
  },
  {
    "url": "assets/js/24.9a2abd22.js",
    "revision": "4cb444e47e3c2de00948a4573ed5eaf2"
  },
  {
    "url": "assets/js/25.b60802ec.js",
    "revision": "2fa0141406629b0da868af7a4e112f0d"
  },
  {
    "url": "assets/js/26.da3cdc82.js",
    "revision": "e6673d8e83705bdd8ef98ed23c6c6621"
  },
  {
    "url": "assets/js/27.1a64b8d4.js",
    "revision": "b601cd4044879d67bcbbe71868495558"
  },
  {
    "url": "assets/js/28.17b3cb49.js",
    "revision": "089be639e48639acd2c5771ada8749f1"
  },
  {
    "url": "assets/js/29.7f619614.js",
    "revision": "a54e4faa9d9a5b4ee75e9ce33dbe1aa0"
  },
  {
    "url": "assets/js/3.8c62515d.js",
    "revision": "804b05c6e3c93e9e6713e28df25f2d3d"
  },
  {
    "url": "assets/js/30.0950d430.js",
    "revision": "025cf8fe9a28882d2103aa1811bf7823"
  },
  {
    "url": "assets/js/31.336dfbc1.js",
    "revision": "8b6b08768d2b20b2da93f923680cd33a"
  },
  {
    "url": "assets/js/32.cfed3a50.js",
    "revision": "38a6c8d524888e433e8173b1f88b0445"
  },
  {
    "url": "assets/js/33.bed39039.js",
    "revision": "3b7240c5e357159c0cd1014dc7348731"
  },
  {
    "url": "assets/js/34.4b1212e5.js",
    "revision": "4d77e2297d9181c08322136f0bf3c12b"
  },
  {
    "url": "assets/js/35.7d77b988.js",
    "revision": "a0bea45df70457975ed42005d2675f83"
  },
  {
    "url": "assets/js/36.d78579a6.js",
    "revision": "5b4ded44f7f5c8fe098d8f135754d490"
  },
  {
    "url": "assets/js/37.0899f276.js",
    "revision": "607a1aca5dae4d93058fa6c2d969e88a"
  },
  {
    "url": "assets/js/38.f5223df9.js",
    "revision": "1c147547149e12c4a25542cc1ec84743"
  },
  {
    "url": "assets/js/39.d7d405de.js",
    "revision": "bc968a986fe498ac3b032b5e8717d019"
  },
  {
    "url": "assets/js/4.6a2c7131.js",
    "revision": "dadc5c615ff48af4b4f9d205331c7999"
  },
  {
    "url": "assets/js/40.6599661f.js",
    "revision": "0d7e2475ff6b871f44b8c61921f18bdc"
  },
  {
    "url": "assets/js/41.67127dc5.js",
    "revision": "1ae7f40e812a18c4b11c92debfa02f56"
  },
  {
    "url": "assets/js/42.6046a0e7.js",
    "revision": "3c53dbb6c09b07f863f632cd6067ca4d"
  },
  {
    "url": "assets/js/43.51fd0cc4.js",
    "revision": "484d16a74eae8cc00ae68f33ea53b470"
  },
  {
    "url": "assets/js/44.bbe5e86a.js",
    "revision": "8d748eca433a22199f039e8dbad12858"
  },
  {
    "url": "assets/js/45.1f35d191.js",
    "revision": "6c1572ee555e75d1fc7a71e23a81340e"
  },
  {
    "url": "assets/js/46.505ce041.js",
    "revision": "c983098e05590f6301cb46b057f902df"
  },
  {
    "url": "assets/js/47.a17cc2b6.js",
    "revision": "ac426459724fa73ec313e6c81299e38e"
  },
  {
    "url": "assets/js/48.0f639efc.js",
    "revision": "f84bad4d6fc72cc0c966b98fa6e4dce3"
  },
  {
    "url": "assets/js/49.c8441b14.js",
    "revision": "039fbe3dd632624f2789b6847fd590f7"
  },
  {
    "url": "assets/js/5.ce79f6b9.js",
    "revision": "cf0e1d56311125d282ba9dfdccbfa3c0"
  },
  {
    "url": "assets/js/50.92e1bbb7.js",
    "revision": "4704ec28ee37a6f33596b06c74674cdf"
  },
  {
    "url": "assets/js/51.c4fd6cf5.js",
    "revision": "65088e146f362b90e86fc193870bbb79"
  },
  {
    "url": "assets/js/52.dee282b9.js",
    "revision": "e3e2c3426675148119d784adc842b0bd"
  },
  {
    "url": "assets/js/53.93547754.js",
    "revision": "252af52362ba3e572fc69927bc818ebb"
  },
  {
    "url": "assets/js/54.a46e6d77.js",
    "revision": "532209b8a8f76a9ffb24daa93b518612"
  },
  {
    "url": "assets/js/55.5dfcc84e.js",
    "revision": "543e0fc1830b9f5feab5c741edab4087"
  },
  {
    "url": "assets/js/56.dd283f3c.js",
    "revision": "3a700daaf3461021b0f3b62dc49849fa"
  },
  {
    "url": "assets/js/57.143cefa7.js",
    "revision": "e7790f71ddc9aba22e4ecfeb202980a2"
  },
  {
    "url": "assets/js/58.f6252a93.js",
    "revision": "73e73728111e81e34577534fde7d5286"
  },
  {
    "url": "assets/js/59.c15abf66.js",
    "revision": "51aebd0edef6de5c36c7ab67c29922a8"
  },
  {
    "url": "assets/js/6.76991ea9.js",
    "revision": "9d421b9268ccc0e3f3543622ced88285"
  },
  {
    "url": "assets/js/60.54c307d9.js",
    "revision": "ca262b6d0f35bdebca38bf3a8bc2d60e"
  },
  {
    "url": "assets/js/61.b29968f4.js",
    "revision": "a29dd64358b817629b80aba1724da392"
  },
  {
    "url": "assets/js/62.d6e92cc6.js",
    "revision": "46840e519e505a941b7857db3b6ea22c"
  },
  {
    "url": "assets/js/63.259077fa.js",
    "revision": "e40e1f525429b2000a5d7047a4feec34"
  },
  {
    "url": "assets/js/64.57d8b2ef.js",
    "revision": "0af80cc11243af2d877a31ba764210d6"
  },
  {
    "url": "assets/js/65.f8110380.js",
    "revision": "e2764250b7ed443e97a4ecbb7d1a1b36"
  },
  {
    "url": "assets/js/66.5954f57e.js",
    "revision": "c20c8573cb71df9031e2808d31bee71a"
  },
  {
    "url": "assets/js/67.fd2a32c5.js",
    "revision": "6b1fc4c4450380eff65ec5b8c9bc2e79"
  },
  {
    "url": "assets/js/68.a1a481e9.js",
    "revision": "37f19c6bfdbc4e707579f9a87cef95d1"
  },
  {
    "url": "assets/js/69.a3455e09.js",
    "revision": "9bd16216d103c5541628256966f69634"
  },
  {
    "url": "assets/js/7.c3336bb4.js",
    "revision": "207d12ad0c23b2db1d2ea030304cdaf1"
  },
  {
    "url": "assets/js/70.a238b35e.js",
    "revision": "a1ad785c8cb3d82c290c8f79dc139b5c"
  },
  {
    "url": "assets/js/71.6c6f9085.js",
    "revision": "744a25bb64cfa0394bfde97810237077"
  },
  {
    "url": "assets/js/72.4ab6ce5b.js",
    "revision": "1fa8347e58fe6978c4e525652ceef738"
  },
  {
    "url": "assets/js/73.d4429e4a.js",
    "revision": "33cd7d4e8beebbcdf05518632a0f04b4"
  },
  {
    "url": "assets/js/8.2b20e8f0.js",
    "revision": "d9512a32c245f5da76ac4edb83e22a48"
  },
  {
    "url": "assets/js/9.41254566.js",
    "revision": "fa0000faf3660a36aace3cfe8112d599"
  },
  {
    "url": "assets/js/app.b1e5e1c5.js",
    "revision": "9df6d55cd64a4dea88d361dc6ddcb201"
  },
  {
    "url": "config/index.html",
    "revision": "62e92ed144908f30c5c59bd0eb49e553"
  },
  {
    "url": "guide/css/1.html",
    "revision": "0fba583f0182bfaffe0c4a02c5b94eb9"
  },
  {
    "url": "guide/css/10.html",
    "revision": "a87299c70822fa0923af6a30933acd17"
  },
  {
    "url": "guide/css/11.html",
    "revision": "826c68b332aa434d71ec2df9b8619081"
  },
  {
    "url": "guide/css/12.html",
    "revision": "a94af2c3ef87bf3c6f568afef99372df"
  },
  {
    "url": "guide/css/13.html",
    "revision": "ab99c05b9d330f6c89996a3636c70470"
  },
  {
    "url": "guide/css/14.html",
    "revision": "ae37f460eecd7611cd7f19703a4a4528"
  },
  {
    "url": "guide/css/15.html",
    "revision": "dea4f57068448016694a8b11e9f8758c"
  },
  {
    "url": "guide/css/16.html",
    "revision": "9bd1bba71621e8937b607b6c697996fd"
  },
  {
    "url": "guide/css/17.html",
    "revision": "6719ac5b7872e01e672c47e42fb09152"
  },
  {
    "url": "guide/css/18.html",
    "revision": "dcb98ea558114ff7f36744e28d99f643"
  },
  {
    "url": "guide/css/19.html",
    "revision": "4ba030345f2905ccf388ebf3502cd84a"
  },
  {
    "url": "guide/css/3.html",
    "revision": "4662d0f4e697f053b77458b08c7931a8"
  },
  {
    "url": "guide/css/4.html",
    "revision": "32c2717b95b965df8762c77e538abe7b"
  },
  {
    "url": "guide/css/5.html",
    "revision": "134ee4d0fa2ec69c96ad7fa4eae6d3a4"
  },
  {
    "url": "guide/css/6.html",
    "revision": "87516644e56312d477da6ff8f3af1be7"
  },
  {
    "url": "guide/css/7.html",
    "revision": "516c4a54ed21810ccf80f63d8459310b"
  },
  {
    "url": "guide/css/8.html",
    "revision": "f49e0ef4132ffd0e8789cf21e1358fb1"
  },
  {
    "url": "guide/css/9.html",
    "revision": "c29b5000846ac69bd2f7dced0618da6e"
  },
  {
    "url": "guide/css/index.html",
    "revision": "79d388e48689e68ab33a62f5ab29b51f"
  },
  {
    "url": "guide/html/1.html",
    "revision": "4693f29946d7f665e327766c59ad1247"
  },
  {
    "url": "guide/html/10.html",
    "revision": "16eceb5b16d6248113eebd4d3c7d930c"
  },
  {
    "url": "guide/html/11.html",
    "revision": "c649e3891aadb5e1fd80ac4a4208a59f"
  },
  {
    "url": "guide/html/12.html",
    "revision": "d7b486cbdd4241f769b4e6bdff00ecfd"
  },
  {
    "url": "guide/html/13.html",
    "revision": "ff1ad241ce22f812a04a2b5ebb7e7fc7"
  },
  {
    "url": "guide/html/14.html",
    "revision": "387aa4515b3c3a9dab4e4a6b9b9c410d"
  },
  {
    "url": "guide/html/15.html",
    "revision": "44b2606b458e2177878bcc6abb8f2201"
  },
  {
    "url": "guide/html/2.html",
    "revision": "cd495b5ab180b34b2f7da6393161e4d0"
  },
  {
    "url": "guide/html/3.html",
    "revision": "d56af28b86a144b45e716f39ac621f50"
  },
  {
    "url": "guide/html/5.html",
    "revision": "6fad0e2a06c699cffda8d0f76f0ed7d6"
  },
  {
    "url": "guide/html/6.html",
    "revision": "47761fb8513e85f7ac4c4af2e406b804"
  },
  {
    "url": "guide/html/7.html",
    "revision": "2efe7a08fed3084724e3eff94a14e9d8"
  },
  {
    "url": "guide/html/8.html",
    "revision": "1c562fe69f682d958c3d33cd1c89d91e"
  },
  {
    "url": "guide/html/9.html",
    "revision": "0ad5d40d895bf89a7818f88cb82c3624"
  },
  {
    "url": "guide/html/index.html",
    "revision": "5d0e8d75343166714415db3d4ab83ca0"
  },
  {
    "url": "guide/html/old.html",
    "revision": "ab0496e20031048e4ecdc42d6b823ac6"
  },
  {
    "url": "guide/index.html",
    "revision": "463e74c0e05325f8292127ab5c4f98fb"
  },
  {
    "url": "guide/js/1.html",
    "revision": "2531ea966b6b0f0caba5488a28e11b2a"
  },
  {
    "url": "guide/js/10.html",
    "revision": "5012db39bad82c9230c0a53b84ef80f9"
  },
  {
    "url": "guide/js/2.html",
    "revision": "ba7adf0c6a47fe0e549fa43d7c674c7f"
  },
  {
    "url": "guide/js/3.html",
    "revision": "b429caeb33f8019c8b3e1803ef08e1c5"
  },
  {
    "url": "guide/js/4.html",
    "revision": "14e7f7eab82c3a6c9c70cc3790302e08"
  },
  {
    "url": "guide/js/5.html",
    "revision": "26245c76672686d4ceb1ab39798bbae3"
  },
  {
    "url": "guide/js/6.html",
    "revision": "8f0a62d54300a140c8aa87fe15eb7782"
  },
  {
    "url": "guide/js/7.html",
    "revision": "af67c07a554e32a2fe066c276bf74990"
  },
  {
    "url": "guide/js/8.html",
    "revision": "aa7a5907043d32365efea86ad9fd2318"
  },
  {
    "url": "guide/js/9.html",
    "revision": "b901cc157def2297e3fe1e382a9f9be7"
  },
  {
    "url": "guide/js/index.html",
    "revision": "5ee5a36e2650adb9cc69aa0b60175ccb"
  },
  {
    "url": "guide/start/0.html",
    "revision": "a50b875795a03c71c5614eee9eba1d9c"
  },
  {
    "url": "guide/start/1.html",
    "revision": "78a63a0503d941f58b9e51d0004d3794"
  },
  {
    "url": "guide/start/2.html",
    "revision": "e0ff23b6a43170496cf512ab52328ec3"
  },
  {
    "url": "guide/start/3.html",
    "revision": "a21d4104b7ca1cb1851e0b8faa54172d"
  },
  {
    "url": "guide/start/4.html",
    "revision": "264bda534590320309526d71fb1cec93"
  },
  {
    "url": "guide/start/5.html",
    "revision": "c4ff93779abad4dbb93fb6ab96e8be32"
  },
  {
    "url": "guide/start/6.html",
    "revision": "67e99c18f107352202a8a74f7aeaa1c2"
  },
  {
    "url": "guide/start/7.html",
    "revision": "a7af1aba0e00ab58cd3753da61d045a0"
  },
  {
    "url": "guide/start/8.html",
    "revision": "b351413b84ae879d950d810828061502"
  },
  {
    "url": "guide/start/9.html",
    "revision": "23c967aa77154d6d0329fb99cc1e2468"
  },
  {
    "url": "guide/start/index.html",
    "revision": "4c4a7aac941a389fda6d915844e7d505"
  },
  {
    "url": "guide/to-do-list/1.html",
    "revision": "df739f912dab418b37724451b3bd9f9b"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "09fe33d5dbe1073829eefb22b5387114"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "edf1a187b4810bd2c9b5d7e2abcdf24f"
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
