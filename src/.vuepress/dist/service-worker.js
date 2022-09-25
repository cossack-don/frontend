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
    "revision": "630ef31bfc19d1004c0cea70f4acc475"
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
    "url": "assets/img/block-element-2.d84c15b9.jpg",
    "revision": "d84c15b92ab6bb18d322b62264762651"
  },
  {
    "url": "assets/img/block-element-3.1ee3b22f.jpg",
    "revision": "1ee3b22feab545a4769edcc1ae7ad910"
  },
  {
    "url": "assets/img/block-element.77fe818a.jpg",
    "revision": "77fe818a7be925b965fe9c97f2bebf4b"
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
    "url": "assets/js/10.4eaed271.js",
    "revision": "605e68ce5d288d33bed63484c0ce2e06"
  },
  {
    "url": "assets/js/11.b74c002f.js",
    "revision": "468159ed044f8da274fabd076022188f"
  },
  {
    "url": "assets/js/12.d00fe674.js",
    "revision": "d4c978f442195e6c5b136b4982e12019"
  },
  {
    "url": "assets/js/13.b0a0d02e.js",
    "revision": "e9d874894d93d2729b6c576161c9d4a7"
  },
  {
    "url": "assets/js/14.43aaa1b1.js",
    "revision": "629502545b5450995c6ae7cd5ff293ff"
  },
  {
    "url": "assets/js/15.3565f2ef.js",
    "revision": "9568ea359cb31d5023c1fec9094c4b8b"
  },
  {
    "url": "assets/js/16.3b1c0540.js",
    "revision": "bb089691c37175fdb40159a98d3eb577"
  },
  {
    "url": "assets/js/17.2926560d.js",
    "revision": "14826c76b0fe6dfbb3bd2b1a095c7899"
  },
  {
    "url": "assets/js/18.dac7ddb0.js",
    "revision": "f7e726f0b422148e436f04cdd29c94da"
  },
  {
    "url": "assets/js/19.c0eaefa2.js",
    "revision": "aaa31d743308276cadb72867623daeb1"
  },
  {
    "url": "assets/js/2.2892bbc7.js",
    "revision": "6b9d036fdc41fb21bea2d5ede7d21518"
  },
  {
    "url": "assets/js/20.4d32db32.js",
    "revision": "0e437bf864282d1f6f3d78734de97b8f"
  },
  {
    "url": "assets/js/21.c95a207d.js",
    "revision": "3885d29090c987e80c1847caefc82103"
  },
  {
    "url": "assets/js/22.26df87f5.js",
    "revision": "e4f3e1cbb38f7c52bd176062a54216c2"
  },
  {
    "url": "assets/js/23.204c73e1.js",
    "revision": "a9d3f3e90600a1aed3010464e93d151a"
  },
  {
    "url": "assets/js/24.b00c91c6.js",
    "revision": "46507f13af64f7b072704d2d376efdaa"
  },
  {
    "url": "assets/js/25.62d139e7.js",
    "revision": "e8a611ed0f1ab36429224e1ab57f82bd"
  },
  {
    "url": "assets/js/26.97852b13.js",
    "revision": "2575b66d26bbfeadfb5bd62da27a33cc"
  },
  {
    "url": "assets/js/27.2d5cdf30.js",
    "revision": "4d95e6df6277b1ba0b591787aac16473"
  },
  {
    "url": "assets/js/28.ea9a03c3.js",
    "revision": "92d57a1df38a2de56ce9c09d0d1d4fb3"
  },
  {
    "url": "assets/js/29.b30d12e8.js",
    "revision": "044684e70f36a74ae48c430efb1ecec7"
  },
  {
    "url": "assets/js/3.35db5dab.js",
    "revision": "8b6960bf11a85c40f165fd0e7329cc3e"
  },
  {
    "url": "assets/js/30.f8dbb03e.js",
    "revision": "f13974e9aebcaea27f7770dceb709296"
  },
  {
    "url": "assets/js/31.00a23a68.js",
    "revision": "8b85e92f93d41a65275cc24780b6e8ba"
  },
  {
    "url": "assets/js/32.f529b5fe.js",
    "revision": "5f815a070920d3419cee1ccd4ed2111b"
  },
  {
    "url": "assets/js/33.b691d005.js",
    "revision": "5937bad922d92bbe53c5dc240fae5c12"
  },
  {
    "url": "assets/js/34.63f8330a.js",
    "revision": "36c3c4db389dc2ff2d6eedb30de9f98c"
  },
  {
    "url": "assets/js/35.03ce0580.js",
    "revision": "16a53a074a78c990df30d80647f801bf"
  },
  {
    "url": "assets/js/36.aa1d790c.js",
    "revision": "a2fe76db08b5c90d3dedc19cfc4bd182"
  },
  {
    "url": "assets/js/37.fe1fe856.js",
    "revision": "f7267c205117be93711bce3bd94e69f5"
  },
  {
    "url": "assets/js/38.e8040ac2.js",
    "revision": "e53589248c6c4e54dac0c3e027b7dfde"
  },
  {
    "url": "assets/js/39.905fa427.js",
    "revision": "23a7888a31a3822afc851ba5f257adda"
  },
  {
    "url": "assets/js/4.c7705974.js",
    "revision": "f19e0646583248444dd21ca208b292c7"
  },
  {
    "url": "assets/js/40.f314b0d7.js",
    "revision": "19fcc746f647aa151501467e8129badc"
  },
  {
    "url": "assets/js/41.deb5c91c.js",
    "revision": "8c10e97b23506ab8923d017c019e2243"
  },
  {
    "url": "assets/js/42.8b222730.js",
    "revision": "7f3f319b3aa57cf7341386976bf982aa"
  },
  {
    "url": "assets/js/43.dc5e13e4.js",
    "revision": "e8aacc84533101015423ccc185daf412"
  },
  {
    "url": "assets/js/44.590a55e8.js",
    "revision": "bb30cde000bde60ea040ef965b88cb7f"
  },
  {
    "url": "assets/js/45.d1db4470.js",
    "revision": "3ce2b3871a0521c23786d8531b7563cc"
  },
  {
    "url": "assets/js/46.c50d5446.js",
    "revision": "1f246872ecb02464216520fb79c022f0"
  },
  {
    "url": "assets/js/47.ed3d7fbe.js",
    "revision": "c5b91d038563ab647b605c6f1e9d4bf4"
  },
  {
    "url": "assets/js/48.dac3a0f4.js",
    "revision": "a47db3e9ad5851255f4480bfe6b91898"
  },
  {
    "url": "assets/js/49.ddfb1eb0.js",
    "revision": "c80915f948cab826b36b203ea3609b0e"
  },
  {
    "url": "assets/js/5.58ece7cc.js",
    "revision": "33fc8389c58d334dc039be24682d507e"
  },
  {
    "url": "assets/js/50.3d9d6804.js",
    "revision": "0546df8f61b17028bb47bc59e39a0d4d"
  },
  {
    "url": "assets/js/51.0e97d795.js",
    "revision": "7d3fb77231b013efd96d2e5b7528a596"
  },
  {
    "url": "assets/js/52.db9cb675.js",
    "revision": "12806cc343a1361696ad8808a3434a5a"
  },
  {
    "url": "assets/js/53.965f62be.js",
    "revision": "a9fdafa4aeadb727af7b61b07c2c98d3"
  },
  {
    "url": "assets/js/54.5fc64571.js",
    "revision": "a4d292c0aa19328414a0b71df49d112c"
  },
  {
    "url": "assets/js/55.f0af69bc.js",
    "revision": "dfe5a03c0bbb91027e2fb32b76256fde"
  },
  {
    "url": "assets/js/56.67a30d92.js",
    "revision": "64c5a552c3d95684fdcfb2884f6c9bce"
  },
  {
    "url": "assets/js/57.84fe2799.js",
    "revision": "92463b31a1128179e34faeebe606385e"
  },
  {
    "url": "assets/js/58.19b256c8.js",
    "revision": "c8031e19ccc13ffa4ee348292c89716a"
  },
  {
    "url": "assets/js/59.762cb3c5.js",
    "revision": "ffdc69fb3d37602895afea702bf8854d"
  },
  {
    "url": "assets/js/6.8d17c252.js",
    "revision": "578356e1681e486b49f3f16f4775d140"
  },
  {
    "url": "assets/js/60.ee72b6b6.js",
    "revision": "0370950a2b3a6b0fe2f432c95f8cd919"
  },
  {
    "url": "assets/js/61.84aa82be.js",
    "revision": "9ec247360baeda536d93e684a3e85b61"
  },
  {
    "url": "assets/js/62.7677e06c.js",
    "revision": "b4c471b35bc77f443ab4f22afa344dd0"
  },
  {
    "url": "assets/js/63.145e3e4e.js",
    "revision": "e1c163915cae8cca213f5ada1047c81b"
  },
  {
    "url": "assets/js/64.a918ae4f.js",
    "revision": "2eee6fa8daedf535446a06bffa5af97d"
  },
  {
    "url": "assets/js/65.5f0f8048.js",
    "revision": "5a9c3d5847d0e94f7d1ea399305fcff9"
  },
  {
    "url": "assets/js/7.6a8ba773.js",
    "revision": "8ceef8ebc143692ed199f8c6a46a4a7d"
  },
  {
    "url": "assets/js/8.aa6303e3.js",
    "revision": "b80379f844163b0b806ccef574f0daf7"
  },
  {
    "url": "assets/js/9.b9c6d084.js",
    "revision": "1d6641b4b4dabf61ce8619ff46037f47"
  },
  {
    "url": "assets/js/app.58a16c5d.js",
    "revision": "ea893ae9eb93d44e345cb4b977c815d2"
  },
  {
    "url": "config/index.html",
    "revision": "4b59f3aa5599437885064dcdb5032030"
  },
  {
    "url": "guide/css/1.html",
    "revision": "b69261de08cacd8853a94a4961a3c10e"
  },
  {
    "url": "guide/css/10.html",
    "revision": "503f308ef1fc52f68469f675ef25b10b"
  },
  {
    "url": "guide/css/2.html",
    "revision": "f79b4aaeb1a8abae0a6aaf6623aa7c3d"
  },
  {
    "url": "guide/css/3.html",
    "revision": "ab80d486ef52abf31c9decefaefaacfa"
  },
  {
    "url": "guide/css/4.html",
    "revision": "dac833ef1bf47566aa6347d621081531"
  },
  {
    "url": "guide/css/5.html",
    "revision": "a7fc9ef1c27602990149d720548b1399"
  },
  {
    "url": "guide/css/6.html",
    "revision": "a0e4cb154d237652f1e722a961c05423"
  },
  {
    "url": "guide/css/7.html",
    "revision": "91da85a7f72859fa39ee6bbaa6d3476e"
  },
  {
    "url": "guide/css/8.html",
    "revision": "2dbb5a1ae0617ab0267ab4f881a20fb4"
  },
  {
    "url": "guide/css/9.html",
    "revision": "551b2f33fd692b114075ebe4c238a00e"
  },
  {
    "url": "guide/css/index.html",
    "revision": "4f3e5e46cf67ad3dbaf6ebeb8a08c84c"
  },
  {
    "url": "guide/html/1.html",
    "revision": "e9d98a90dd0496e6aa10fbba578b482a"
  },
  {
    "url": "guide/html/10.html",
    "revision": "bff090ca2243062059319e02d985236d"
  },
  {
    "url": "guide/html/11.html",
    "revision": "bc6b6a768cdfe68a6492927c6f09fd38"
  },
  {
    "url": "guide/html/12.html",
    "revision": "28346eea950b8d4c996f9af003f5ae36"
  },
  {
    "url": "guide/html/13.html",
    "revision": "03549c27ad2bd610003578fd1cb903ec"
  },
  {
    "url": "guide/html/14.html",
    "revision": "a0bb01c1f5f35418109bdd5b5f217d71"
  },
  {
    "url": "guide/html/15.html",
    "revision": "3e7975f9c5301e17759a8eb69da2fcfd"
  },
  {
    "url": "guide/html/2.html",
    "revision": "54f8cf8f1572a4c4a127f4c01039432d"
  },
  {
    "url": "guide/html/3.html",
    "revision": "572eee382333172a1a7fef6761a8d3b5"
  },
  {
    "url": "guide/html/5.html",
    "revision": "2a60234243e32a119dde7ed6287b19eb"
  },
  {
    "url": "guide/html/6.html",
    "revision": "df1601c5948b3bc313bc3bb52d2ad563"
  },
  {
    "url": "guide/html/7.html",
    "revision": "faef43f91ba41db1a2d8ee1b49e25a79"
  },
  {
    "url": "guide/html/8.html",
    "revision": "ea01221ded3a1fa57342c0b7453896b4"
  },
  {
    "url": "guide/html/9.html",
    "revision": "74429ea1a7f97bf4f7a0a0fb25104def"
  },
  {
    "url": "guide/html/index.html",
    "revision": "f3792988674a7d8a26a7f7c5e62bc86b"
  },
  {
    "url": "guide/html/old.html",
    "revision": "3253e947569a97ce333d57fa9ad0e97e"
  },
  {
    "url": "guide/index.html",
    "revision": "a9b8a6657235a60bbdf80f914d18d356"
  },
  {
    "url": "guide/js/1.html",
    "revision": "e71bba85901e60c00785695d5b829f14"
  },
  {
    "url": "guide/js/10.html",
    "revision": "0e89ea427fdc2ac7eafd2d76e8d90ff0"
  },
  {
    "url": "guide/js/2.html",
    "revision": "826b69cb22c6f9609f30c42d40f9ae1d"
  },
  {
    "url": "guide/js/3.html",
    "revision": "d338c3c22bae2f3854a2d4d6d050e042"
  },
  {
    "url": "guide/js/4.html",
    "revision": "64e7350d95ae60b177c162f22f0d1b89"
  },
  {
    "url": "guide/js/5.html",
    "revision": "1d15c70a6efef233f05a3d58676f1f32"
  },
  {
    "url": "guide/js/6.html",
    "revision": "3046f051708a6f3f199b474b6ee8fa5d"
  },
  {
    "url": "guide/js/7.html",
    "revision": "bf82bf4c4e5131494b998a4b2ab4bade"
  },
  {
    "url": "guide/js/8.html",
    "revision": "b6dac011dfc0eadc2b89186b1025e267"
  },
  {
    "url": "guide/js/9.html",
    "revision": "2d2ff8b9dcd7a2754e2e20a90f7677af"
  },
  {
    "url": "guide/js/index.html",
    "revision": "934b08d402b6609d777fbb8ac7d5c534"
  },
  {
    "url": "guide/start/0.html",
    "revision": "978a7a86e3e5231921d86485cb5645fe"
  },
  {
    "url": "guide/start/1.html",
    "revision": "6de275d4296ccad3f69b7542789a10e8"
  },
  {
    "url": "guide/start/2.html",
    "revision": "4368c147a9e0a1496534f5ca3ba66022"
  },
  {
    "url": "guide/start/3.html",
    "revision": "5bbf60ad56ce01be900408e5ba4e03fa"
  },
  {
    "url": "guide/start/4.html",
    "revision": "aa1ddc0ad7158360fe8d0783aa1acad6"
  },
  {
    "url": "guide/start/5.html",
    "revision": "faae02c08f1e51f155ebaf00cf5adc8a"
  },
  {
    "url": "guide/start/6.html",
    "revision": "7a655361293f322618b407789a86ed64"
  },
  {
    "url": "guide/start/7.html",
    "revision": "e21b3c5234da4c7b9c25bdcc52034e0b"
  },
  {
    "url": "guide/start/8.html",
    "revision": "0573a73a673d899ba6697ebebafb5264"
  },
  {
    "url": "guide/start/9.html",
    "revision": "258d4920397e72a63551656553a0afb0"
  },
  {
    "url": "guide/start/index.html",
    "revision": "48804a7eaca8f96d756dfccc4ceceff7"
  },
  {
    "url": "guide/to-do-list/1.html",
    "revision": "d7addbda8f1d28a797320319e9c7ea2c"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "65ed5272d7a82359e69fce0db838adee"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "50df3d49ed7e73951c4698f6818dc9a7"
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
