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
    "revision": "51d8251d9f4c9e512f673a5db2cd07f6"
  },
  {
    "url": "api/index.html",
    "revision": "d742ed6ee5518810fae0d703bf699268"
  },
  {
    "url": "api/router-alive.html",
    "revision": "e2bbc4e1de6855542942cf699c2ff7a2"
  },
  {
    "url": "assets/css/0.styles.b2ca6f38.css",
    "revision": "372c9ef6d5d8ced5428aa5d49260dee3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5c6d93af.js",
    "revision": "dd901343c0cc57c919467fe3da13c108"
  },
  {
    "url": "assets/js/11.a6e02a1d.js",
    "revision": "02025fe3ffaf1523773766f69017a8d4"
  },
  {
    "url": "assets/js/12.737fda31.js",
    "revision": "1fdd813f3e2e33c121d4176215a6c705"
  },
  {
    "url": "assets/js/13.0234f252.js",
    "revision": "c0394bc0ffe2953abbbaaadb5a4e586b"
  },
  {
    "url": "assets/js/14.ecc81b95.js",
    "revision": "d9a03a372721e8f26dbcdaca4927bb67"
  },
  {
    "url": "assets/js/15.0e0b99e5.js",
    "revision": "db4d3886987c56e461f536197eaaa4d3"
  },
  {
    "url": "assets/js/16.7b2b024f.js",
    "revision": "ffcb37f9f5f30bc770995c0fc2ce331a"
  },
  {
    "url": "assets/js/17.81042c15.js",
    "revision": "323e7d34ae393f7c59f216748d9e7d7b"
  },
  {
    "url": "assets/js/18.4a8ce8bd.js",
    "revision": "f31d633a555464548730ce1a0735995d"
  },
  {
    "url": "assets/js/19.15a8e807.js",
    "revision": "bfe34ae4ec5b221075f4b535d49139c1"
  },
  {
    "url": "assets/js/20.aa245d35.js",
    "revision": "e3ad1cc16534065d61148a486748a357"
  },
  {
    "url": "assets/js/21.ec76249c.js",
    "revision": "608fb1848919c53f830a1c8a3c220483"
  },
  {
    "url": "assets/js/22.7135330c.js",
    "revision": "117068ce6931e6dd87ee34d99df9fbcc"
  },
  {
    "url": "assets/js/23.90efe1b7.js",
    "revision": "f78a086945cceff2b0e048f3131ca617"
  },
  {
    "url": "assets/js/24.9beff8b4.js",
    "revision": "5fbf1f45c64110c2e177ade3681db9a4"
  },
  {
    "url": "assets/js/25.fd712a5e.js",
    "revision": "fff61b2a8460b0a2823c597420814417"
  },
  {
    "url": "assets/js/26.2f0bc8d5.js",
    "revision": "89f4509374eaa6e67475d6ef8851b083"
  },
  {
    "url": "assets/js/27.010292ad.js",
    "revision": "9a7a3e60ab891af4170a32c62419ee1a"
  },
  {
    "url": "assets/js/28.0efe0831.js",
    "revision": "4b6342350e9e7eb6355d8f0c3285b5d3"
  },
  {
    "url": "assets/js/29.f7ff7bf4.js",
    "revision": "f8e7bfacebdf754394b55579787a395f"
  },
  {
    "url": "assets/js/3.2110cdf7.js",
    "revision": "c5c3ecfb1ae29cc38ffd3317deb8fed3"
  },
  {
    "url": "assets/js/30.f9b1b409.js",
    "revision": "cb11fa81aa8c2de535f64910501555b6"
  },
  {
    "url": "assets/js/31.759255d1.js",
    "revision": "25684a5de31d6403b7c0b976f7188607"
  },
  {
    "url": "assets/js/32.c62527ce.js",
    "revision": "eaad8c5bb3979533a93e92b37be5b886"
  },
  {
    "url": "assets/js/33.3e28087f.js",
    "revision": "7033a28925c2d98b507319ab6f3a1e76"
  },
  {
    "url": "assets/js/34.13967d97.js",
    "revision": "f1369fe2b51ad764e4780a624a610a19"
  },
  {
    "url": "assets/js/35.9524cdf1.js",
    "revision": "502cf7df579138cab28ee09f15c6be50"
  },
  {
    "url": "assets/js/36.32011a15.js",
    "revision": "2f780b01c3f0c363c1c24708a1a0a825"
  },
  {
    "url": "assets/js/37.e534670f.js",
    "revision": "33b2aaaebfd51b5cafd2e869388af76b"
  },
  {
    "url": "assets/js/38.31db0b0d.js",
    "revision": "6e8984981de6b90f1f491b70ad0b3f02"
  },
  {
    "url": "assets/js/39.d3634540.js",
    "revision": "94fa1cddc7b7ca737ab515f2bf655938"
  },
  {
    "url": "assets/js/4.91fda92e.js",
    "revision": "8585eadce0872fb721f727984e0bbd7b"
  },
  {
    "url": "assets/js/40.20f2be6e.js",
    "revision": "784401d1f1971563d59e7f461e332635"
  },
  {
    "url": "assets/js/41.6ddb7838.js",
    "revision": "5ad881781144f214aa25c1c6bb950843"
  },
  {
    "url": "assets/js/42.eafb8742.js",
    "revision": "b3e0fc1156ed2d22a7a952d1342c2805"
  },
  {
    "url": "assets/js/43.e57e090d.js",
    "revision": "85ef3ed9dec54c7b91bd2d515d5c02ef"
  },
  {
    "url": "assets/js/44.3e4a1954.js",
    "revision": "b0c340f866e17273bc2007fdd309b73a"
  },
  {
    "url": "assets/js/45.650e7fc5.js",
    "revision": "029bfa9bf8c6b8c371fa13ba8ce30a42"
  },
  {
    "url": "assets/js/46.81e8494b.js",
    "revision": "2f8dec85f36c01d2c2b448ed3105720c"
  },
  {
    "url": "assets/js/47.ed9cbc71.js",
    "revision": "54050f9ae8199ef511c683abfbde2758"
  },
  {
    "url": "assets/js/48.f57cb711.js",
    "revision": "03e65d0a0de7d83457325fbd5dbc5d76"
  },
  {
    "url": "assets/js/49.acead794.js",
    "revision": "8eb25a945df31e7ce62785af3a51550e"
  },
  {
    "url": "assets/js/5.4fd76575.js",
    "revision": "9f06843b26e58ddd54001785d82a33c5"
  },
  {
    "url": "assets/js/50.2b3c5d00.js",
    "revision": "f3a5f4b324c677628689bc6dab40738d"
  },
  {
    "url": "assets/js/51.380a9ca6.js",
    "revision": "bccac5b6cb0c0db78669f82a93a5579f"
  },
  {
    "url": "assets/js/52.72ab89d2.js",
    "revision": "e32e374575549f64a245859d84db989d"
  },
  {
    "url": "assets/js/53.3534fa39.js",
    "revision": "ae66ba68e699b69a6794272711abca34"
  },
  {
    "url": "assets/js/54.92b9fb1d.js",
    "revision": "bffd52efa651c5e189b04c2fb7ca50b8"
  },
  {
    "url": "assets/js/55.b22f9297.js",
    "revision": "d8819269589821a076f0a51e92919c1a"
  },
  {
    "url": "assets/js/56.72e839b9.js",
    "revision": "662d5b0bdf7fbf321d16e7f96f7c1fab"
  },
  {
    "url": "assets/js/57.2156ed84.js",
    "revision": "bf6f18b0dbf9e819baa899ce4ac05322"
  },
  {
    "url": "assets/js/58.5d14367a.js",
    "revision": "852c4e622a1558ebbaaa177a4e1e113a"
  },
  {
    "url": "assets/js/59.8d93e151.js",
    "revision": "935b1fa40a69fed6660ae102abbb3158"
  },
  {
    "url": "assets/js/6.430d3e78.js",
    "revision": "34040d72af7108a07827c7aca907b6a9"
  },
  {
    "url": "assets/js/60.e2433402.js",
    "revision": "248a530c90ba23da48c7301af86bc582"
  },
  {
    "url": "assets/js/61.ae99aaee.js",
    "revision": "f197568b5cc788261748db13300e88af"
  },
  {
    "url": "assets/js/7.0172f73a.js",
    "revision": "b4bef9d079f2042c20953f6937f7f362"
  },
  {
    "url": "assets/js/8.be39fc18.js",
    "revision": "f398d3e3fb871e67f48190f81c16edf6"
  },
  {
    "url": "assets/js/9.17a674c6.js",
    "revision": "41524bae21dcd1d4c8340280b393562c"
  },
  {
    "url": "assets/js/app.12c6b911.js",
    "revision": "5f72f39c71bd71aea5c9125929a57b70"
  },
  {
    "url": "assets/js/vendors~docsearch.6daf2f24.js",
    "revision": "4c4a62c4c54cc44221838d6d8e089b3b"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "56c8c68224e42688e92396bfbb25a9b2"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "f092703f011661291f6409fb3c742b7e"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "011b65a46b1f058f0e852ff126d62a6d"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "b5ecee5caa60e9ddc3c8867ca0c996b6"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "1c5f57e798c91cda35162555c556412d"
  },
  {
    "url": "guide/changelog.html",
    "revision": "e195d913414dafcea7893ca5de30af26"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "4cef754d92db50bdf11d11f5e00dee7a"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "0af2fc39adbb2f56597ec5285403f6cb"
  },
  {
    "url": "guide/custom/index.html",
    "revision": "0cd459f393fa4cc4c6986f047dae336f"
  },
  {
    "url": "guide/custom/scroll.html",
    "revision": "fce7315bad07dbda68ea7025fba9d86a"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "06d8f11af7e4e1e962503ef847a347db"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "aa046ed9b7eeb824039a8726e7518cc3"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "f8ad843ce7eb660c33372e77275c24ed"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "554763e6d868a34ff1946775eec66e57"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "0c9b9f0ff0a782e7fd5cff9d1ae9fa94"
  },
  {
    "url": "guide/essentials/nuxt.html",
    "revision": "337df0b3d10e959878c733cafb1845bc"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "9c3dc84eaa59c5efb419b43817ee47d7"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "2173f7411ec7c8c1b432391db7fa3010"
  },
  {
    "url": "guide/index.html",
    "revision": "0ce4dcfc2acd45d4e2ee42488fb922a5"
  },
  {
    "url": "guide/meta/faqs.html",
    "revision": "47971e7c4220c1c9c7d7a069097647e2"
  },
  {
    "url": "guide/meta/solutions.html",
    "revision": "dd6715529320938d8666d311fb1166a8"
  },
  {
    "url": "guide/meta/uninstall.html",
    "revision": "790007f7de1eb5771095e8cc47df0be5"
  },
  {
    "url": "index.html",
    "revision": "9bd0ba27218dd4625f2cde343fde96d2"
  },
  {
    "url": "zh/api/index.html",
    "revision": "d858afa5b755af064d66963fecef4880"
  },
  {
    "url": "zh/api/router-alive.html",
    "revision": "53652eea54abd0095e2b372ea0b91b05"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "c696bc8db8f31436b231e7ad941db45a"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "937061d300bbcfe3e2d4906c2471ffd1"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "85da1beb543781a82fd5d987d460bb12"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "d1f7d54dc3030d74a96fbf39c0a3fa40"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "b2635a70718dbd3605dfc8929f101f97"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "623af0f31dabd46573ffec04af0d5e08"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "f6e4fd1bf41f2e5559eba77be0d3feec"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "f253665f393206c97e4a091551f8248b"
  },
  {
    "url": "zh/guide/custom/index.html",
    "revision": "e23858aa01900b33838cec494fd1fc50"
  },
  {
    "url": "zh/guide/custom/scroll.html",
    "revision": "e25c9eb990d21037f91d4d8cf6c5baf4"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "e349bc818d2b00a49027b0c281e2a7db"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "bf88f8f6321776f074a0dc7e3f0bc6a0"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "a88b21ae6135127f57e58435e7430ca8"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "50771b5e239079f189d8d6428d61f49a"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "f3bf3e7a00d7a46a3bed0c6fc0a78a10"
  },
  {
    "url": "zh/guide/essentials/nuxt.html",
    "revision": "8600ec54860f33fcfde109bc76f38c85"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "4011e7498d01d143834d0649010e0e54"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "67a3f5cf1016481cba32002361cef485"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "21ad8212200a0bab2d6f9f3dc0be83c4"
  },
  {
    "url": "zh/guide/meta/faqs.html",
    "revision": "c67f11c0f800d696606b4f5ec7c591b8"
  },
  {
    "url": "zh/guide/meta/solutions.html",
    "revision": "13696bee560cacddc1997cd3b03c1e5b"
  },
  {
    "url": "zh/guide/meta/uninstall.html",
    "revision": "f88cc514c275bd7f6aa2e7ace181df65"
  },
  {
    "url": "zh/index.html",
    "revision": "3ab234a2e12ba605d778f23e74d6e1db"
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
