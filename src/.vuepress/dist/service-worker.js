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
    "revision": "3850f44323373ac71002187deec5922e"
  },
  {
    "url": "assets/css/0.styles.d52d1d84.css",
    "revision": "b365630cb694f437e2d0e2fe11141118"
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
    "url": "assets/img/atributes.c0f6a1d9.png",
    "revision": "c0f6a1d9112c4d9341bf88f24a8cf2b2"
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
    "url": "assets/img/flex-1.4fa7e591.jpeg",
    "revision": "4fa7e5910144cb1b4efed32fd4cf864d"
  },
  {
    "url": "assets/img/flex-2.c7db3fc5.jpg",
    "revision": "c7db3fc5a9fcc649f4dd59c8595d4236"
  },
  {
    "url": "assets/img/form.dee233e8.jpg",
    "revision": "dee233e8aad92bf1b06d1118164a672d"
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
    "url": "assets/img/new-tags.bb498a1d.png",
    "revision": "bb498a1d617ee8ecb1b26cef49da22bf"
  },
  {
    "url": "assets/img/pug.b2172987.jpg",
    "revision": "b2172987ebc5fe66483f9595b41779a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3321c92.js",
    "revision": "7cf4da109765afd5ab611aadae45a4cb"
  },
  {
    "url": "assets/js/11.7906796e.js",
    "revision": "354e5c86993c7c6d4bba9ecc614b5391"
  },
  {
    "url": "assets/js/12.85943063.js",
    "revision": "35d30b9ea88c4b43ec63c02ef2edd0d8"
  },
  {
    "url": "assets/js/13.ea7bd7be.js",
    "revision": "b22fb9f70e6a100fa912946ebe3139b1"
  },
  {
    "url": "assets/js/14.39c084ee.js",
    "revision": "408e6fdc6fb7f80fc044bd72a63a9cb6"
  },
  {
    "url": "assets/js/15.1b7b94f9.js",
    "revision": "7f995f700ae4182702e16965cc2febc0"
  },
  {
    "url": "assets/js/16.5000ce85.js",
    "revision": "c4f46e5e6b00e487d2159caaf41a2f31"
  },
  {
    "url": "assets/js/17.85126282.js",
    "revision": "da1401a08fcfaea3c8deece04d652634"
  },
  {
    "url": "assets/js/18.71a8e849.js",
    "revision": "2a345cebfb11e3d46bec8f1f863f903e"
  },
  {
    "url": "assets/js/19.07743e56.js",
    "revision": "884c7d202031115e8b14ddf0952222a7"
  },
  {
    "url": "assets/js/2.8d999446.js",
    "revision": "5dd76d23c193b6ece15ea852837a8cf4"
  },
  {
    "url": "assets/js/20.ef4693f5.js",
    "revision": "ad2867bd40b4fa989fbd7de28ae3b4e1"
  },
  {
    "url": "assets/js/21.424a8970.js",
    "revision": "ee2cabded5d6b7c207983aa0d82f6e05"
  },
  {
    "url": "assets/js/22.9c908a7f.js",
    "revision": "6e9cc5be100ab06478b0f6f361bdb09b"
  },
  {
    "url": "assets/js/23.e1086979.js",
    "revision": "4b8f78b5ef5f8b0f88a796da22f26684"
  },
  {
    "url": "assets/js/24.f61e7be7.js",
    "revision": "bd200dc0209fbea8e5a819ba9bbc0f18"
  },
  {
    "url": "assets/js/25.1a563619.js",
    "revision": "3e6907fcd58e20c918715ff9d8ca3c20"
  },
  {
    "url": "assets/js/26.5ce3a8bd.js",
    "revision": "83bdbf4f94c37d66b2bbc18443a61faa"
  },
  {
    "url": "assets/js/27.10fab1dc.js",
    "revision": "518003f429f1a1875dfc2b0f340174dd"
  },
  {
    "url": "assets/js/28.7889f1f0.js",
    "revision": "2812e6bfb0bce04290f38ab3706d73c9"
  },
  {
    "url": "assets/js/29.14a70329.js",
    "revision": "bf213531f28e64da14f114bc615936fd"
  },
  {
    "url": "assets/js/3.004b3338.js",
    "revision": "3bb37aa68f72e3ab3bc63a8fa7be06bb"
  },
  {
    "url": "assets/js/30.ad926127.js",
    "revision": "8f7ad15b6caefef1387868082bf15bc4"
  },
  {
    "url": "assets/js/31.9f5e444b.js",
    "revision": "59c7e1a397d251b7c5cb9d71529a527c"
  },
  {
    "url": "assets/js/32.76dd2514.js",
    "revision": "078a53ba8383c01506b4b38f4b04ae28"
  },
  {
    "url": "assets/js/33.c8245919.js",
    "revision": "0dc7ab662c32e311c552d91ec29e4494"
  },
  {
    "url": "assets/js/34.1a74a532.js",
    "revision": "df8b328bf552b5ed080c72ea0cc600cf"
  },
  {
    "url": "assets/js/35.2a0926bf.js",
    "revision": "badbfb62bc662db0162c3a10b462fcf5"
  },
  {
    "url": "assets/js/36.b29ce736.js",
    "revision": "de4f15c48b9fc89d3ced924953827641"
  },
  {
    "url": "assets/js/37.659aa65a.js",
    "revision": "d9529362f4fd65d572c2c8b6cb9323bf"
  },
  {
    "url": "assets/js/38.b09876ea.js",
    "revision": "68414610db33b6c6d2a1f6f8dfc74e87"
  },
  {
    "url": "assets/js/39.dbe8100c.js",
    "revision": "935c3c0a1379409aa7da14a2861a1852"
  },
  {
    "url": "assets/js/4.de956d73.js",
    "revision": "e722ad0e919d771ed1fb6d0cae9759ae"
  },
  {
    "url": "assets/js/40.b0f2551e.js",
    "revision": "3b67e1617a12194becfcdd8cd8b2e392"
  },
  {
    "url": "assets/js/41.ba78a3f7.js",
    "revision": "9d0c5051cfec9ad9a8067b483d121212"
  },
  {
    "url": "assets/js/42.987a0ef3.js",
    "revision": "5c10a14b0f462fb3d3698ed1932caebf"
  },
  {
    "url": "assets/js/43.97e2e3ef.js",
    "revision": "356626ed3b3fd1c689909321cae4c6fa"
  },
  {
    "url": "assets/js/44.2f2ee7cf.js",
    "revision": "aae28982da839f039d291b08e4f304f8"
  },
  {
    "url": "assets/js/45.bc35eb35.js",
    "revision": "aff6ae8a6cc818e1d4da2016ce8f0014"
  },
  {
    "url": "assets/js/46.c79db15a.js",
    "revision": "868672c6e4a0a6d593e18118bbbc28f6"
  },
  {
    "url": "assets/js/47.acf9b647.js",
    "revision": "8573b7dd58474103349d5db823bd1507"
  },
  {
    "url": "assets/js/48.032856bf.js",
    "revision": "6acd1d30c32d0dc3d87bbd615e54121b"
  },
  {
    "url": "assets/js/49.14ec9540.js",
    "revision": "1f34ae307e1cd1bab00e1f3350406e0e"
  },
  {
    "url": "assets/js/5.107e9c20.js",
    "revision": "84eac677a4ee892c4a348ca1a1890c21"
  },
  {
    "url": "assets/js/50.5ceb9575.js",
    "revision": "9dbf2cbcae36a5a820f678a798f252b5"
  },
  {
    "url": "assets/js/51.bdcb8e88.js",
    "revision": "8c195fcf74079ec0a4b9b5b462acbedc"
  },
  {
    "url": "assets/js/52.e1e3d906.js",
    "revision": "e693432b686af1eb17fddc091f279e3c"
  },
  {
    "url": "assets/js/53.bd7cb77f.js",
    "revision": "0131261b0b7ced78b6f964b4cd6bb688"
  },
  {
    "url": "assets/js/54.9667e099.js",
    "revision": "ed013eeb36fefbb3b46f70555d3fb8e6"
  },
  {
    "url": "assets/js/55.1a7becf1.js",
    "revision": "36b772aeefa674f736838601706e54bb"
  },
  {
    "url": "assets/js/56.c4cd45d9.js",
    "revision": "68e71f65f74c602cadad60f767a7da34"
  },
  {
    "url": "assets/js/57.81d3961d.js",
    "revision": "c9414d433924c408df25cdbb203b2584"
  },
  {
    "url": "assets/js/58.91e65860.js",
    "revision": "5076442eed10ff8f9cf83a26c6f86f0a"
  },
  {
    "url": "assets/js/59.b757b6a1.js",
    "revision": "c93e5876252a2b47194bd66f8d0b2418"
  },
  {
    "url": "assets/js/6.de643c06.js",
    "revision": "882e0a3043b4dae000ad06452ebce242"
  },
  {
    "url": "assets/js/60.381f26c6.js",
    "revision": "0cc0389ea0a79036f14f1db7e8578985"
  },
  {
    "url": "assets/js/61.08a6b3d8.js",
    "revision": "22eefecd33ccb7467dbd72f59e24c93f"
  },
  {
    "url": "assets/js/62.a90d9d29.js",
    "revision": "e4a1f462e69113bf8e30b02ff0481b22"
  },
  {
    "url": "assets/js/63.e8be7735.js",
    "revision": "d45dad6f27b3c30325dbb9fff8b6b889"
  },
  {
    "url": "assets/js/64.31009f46.js",
    "revision": "18652a34ead2b95cc4d097aa4fd181fc"
  },
  {
    "url": "assets/js/65.5215a313.js",
    "revision": "592528470225180f9eee72fadc0a826d"
  },
  {
    "url": "assets/js/7.349fa962.js",
    "revision": "dacd71db5f6b388f9012614d9587ab6a"
  },
  {
    "url": "assets/js/8.4abf161c.js",
    "revision": "c6dfd194f42f2c019bf5f704ec2aacfd"
  },
  {
    "url": "assets/js/9.01981c1d.js",
    "revision": "04f1c1a8c01b3ec5a4da7f3f3bb27d86"
  },
  {
    "url": "assets/js/app.ee04d9e3.js",
    "revision": "bbbcf589d1f1adf74867a28b36692405"
  },
  {
    "url": "config/index.html",
    "revision": "6478a4b50000b3e9c91a641a064daee5"
  },
  {
    "url": "guide/css/1.html",
    "revision": "2a673dfdb583d58a404e0724cfdf6a02"
  },
  {
    "url": "guide/css/10.html",
    "revision": "6799266fc25cd745a4a997fc906ab31e"
  },
  {
    "url": "guide/css/2.html",
    "revision": "907035ddd73fdff3054a96325d9b6207"
  },
  {
    "url": "guide/css/3.html",
    "revision": "bb62fe4de7ab9feb758c42819bb6398b"
  },
  {
    "url": "guide/css/4.html",
    "revision": "f344782fcdf0950ebdcc26b0dd0b4478"
  },
  {
    "url": "guide/css/5.html",
    "revision": "52ee4e4896bc706318de83929ff2b286"
  },
  {
    "url": "guide/css/6.html",
    "revision": "fb6d712c67cc118a44524437642f9a03"
  },
  {
    "url": "guide/css/7.html",
    "revision": "177f2529291e2955fa2c0092acd75b87"
  },
  {
    "url": "guide/css/8.html",
    "revision": "9139044ad7e991f376c6f46960e1c4f6"
  },
  {
    "url": "guide/css/9.html",
    "revision": "ef43a67d029c20be802f73e9bdf1f202"
  },
  {
    "url": "guide/css/index.html",
    "revision": "0d8afcd09b9c11f289078f57ded521b9"
  },
  {
    "url": "guide/html/1.html",
    "revision": "278a40961a63f26b1a96cb5b6d049ecb"
  },
  {
    "url": "guide/html/10.html",
    "revision": "e9d40b56d66a00b7c9ace76077f22177"
  },
  {
    "url": "guide/html/11.html",
    "revision": "6089294a524019b45f47f891f8c8344f"
  },
  {
    "url": "guide/html/12.html",
    "revision": "f82ecb22ab26796bf8e7cf6222162176"
  },
  {
    "url": "guide/html/13.html",
    "revision": "30d84d5a1b063393fc05a8fd60633234"
  },
  {
    "url": "guide/html/14.html",
    "revision": "90477ad166593405fdc3757acc82321f"
  },
  {
    "url": "guide/html/15.html",
    "revision": "d43ac3bd2f26b98212588333187bf256"
  },
  {
    "url": "guide/html/2.html",
    "revision": "c610203dd668503ce5edfe8010dd02e8"
  },
  {
    "url": "guide/html/3.html",
    "revision": "245a21e83dbe553cef7a8e709ca1620f"
  },
  {
    "url": "guide/html/5.html",
    "revision": "58a2d7017144563ecf04ef07579311f1"
  },
  {
    "url": "guide/html/6.html",
    "revision": "7d2b0ab326f188540a65ff06081fcb69"
  },
  {
    "url": "guide/html/7.html",
    "revision": "d03dca3981d9ce82c6e2cdab26710431"
  },
  {
    "url": "guide/html/8.html",
    "revision": "8dcd1e36cdfe8f8f2db57832a16dd0b5"
  },
  {
    "url": "guide/html/9.html",
    "revision": "4bf087b690101552cbf8aef0d12529e5"
  },
  {
    "url": "guide/html/index.html",
    "revision": "9d691f7ea4fa78f2860761d6f6ea5fa9"
  },
  {
    "url": "guide/html/old.html",
    "revision": "6f4ed3fda9c5cccb90677fb60f588760"
  },
  {
    "url": "guide/index.html",
    "revision": "973493eb632973ebe8c3202a0b4a43e2"
  },
  {
    "url": "guide/js/1.html",
    "revision": "3ea7c2d52e3ce74a7e0faaece195bf3a"
  },
  {
    "url": "guide/js/10.html",
    "revision": "6d21a3e31efd5f8f39f7d3283d5da994"
  },
  {
    "url": "guide/js/2.html",
    "revision": "09a07fe2aab9ef48561eba050750a657"
  },
  {
    "url": "guide/js/3.html",
    "revision": "6f17e795d16f746994bacb6b49caa946"
  },
  {
    "url": "guide/js/4.html",
    "revision": "8f4345bd8cf1b1dc6979612ae34a4412"
  },
  {
    "url": "guide/js/5.html",
    "revision": "f1c02105b106825538deb42e82f4c69c"
  },
  {
    "url": "guide/js/6.html",
    "revision": "2034f73123184d239e8f86a3aefced06"
  },
  {
    "url": "guide/js/7.html",
    "revision": "d27a9a094c57eb165538dd0d357cf01a"
  },
  {
    "url": "guide/js/8.html",
    "revision": "762610166666583900a31f23b214b025"
  },
  {
    "url": "guide/js/9.html",
    "revision": "60a0984f8647993a93b29994eec4bb2f"
  },
  {
    "url": "guide/js/index.html",
    "revision": "200f4164bb3bdb0a06d64347fe4176b7"
  },
  {
    "url": "guide/start/0.html",
    "revision": "72ad3404a61d415e6e4d611801db94c0"
  },
  {
    "url": "guide/start/1.html",
    "revision": "acb148e2b0e36e2ef481b78abc52d197"
  },
  {
    "url": "guide/start/2.html",
    "revision": "29a6b87c52dfca9c912f92152e615c21"
  },
  {
    "url": "guide/start/3.html",
    "revision": "6d3d9de27f831e430e9dcd0c3957ad26"
  },
  {
    "url": "guide/start/4.html",
    "revision": "1e02d791249cb8a789be2220cf0478bd"
  },
  {
    "url": "guide/start/5.html",
    "revision": "10b415a73b847a9bd92c961d17748cbc"
  },
  {
    "url": "guide/start/6.html",
    "revision": "6d715bd09178f21e232bc1eeb984aa64"
  },
  {
    "url": "guide/start/7.html",
    "revision": "6d9b12fa656e071e9a1bfee6a28abb2a"
  },
  {
    "url": "guide/start/8.html",
    "revision": "938e4535e61b3cbf38ed41a5e9a667ff"
  },
  {
    "url": "guide/start/9.html",
    "revision": "8b6c6721428df5f32495a69be9977323"
  },
  {
    "url": "guide/start/index.html",
    "revision": "bf3ba6c18447c77ecae01c4f75e2c97e"
  },
  {
    "url": "guide/to-do-list/1.html",
    "revision": "e5c14f13759b0d16758a602df6e11c81"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "4760417f2e536c0f3a3807fc5b682fc7"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "4b88dbad0e51527642e933ac5ec25e5a"
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
