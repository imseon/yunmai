'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d39ec54228fc32d4bdad08d3390b1e9e",
"index.html": "3181f7b432847e8dd96e8516ad04ea90",
"/": "3181f7b432847e8dd96e8516ad04ea90",
"main.dart.js": "777274a8a48db5ac83ef6bb6da7358d3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "6d650c7ff80b35cb4e83b04f1e179f6a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "388cdbd226b399b64f4f0e30faf5f464",
".git/ORIG_HEAD": "fce2fbcd7f8f270437285f29203f132b",
".git/config": "55c5c6ffccdf6964d8a82b973b538205",
".git/objects/61/24fa7092647b66e7c73eb1ba88fa8079bdf065": "2a9a141264d62b2df84f66f050b2e966",
".git/objects/59/3619c75f4bc781a86049e6832173c2475bc7b1": "ff7770946e529a3077a05c6c6b0b5973",
".git/objects/57/e604166474cdac8bc033729e370cc062d2b5d7": "9a537f7e5564b857849cca307ff4beec",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/cce6398a7070f25f6b5be45fd6aa0601734621": "03c51bfb47ee50c27d8e91d927e2ae42",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/58/87cabf6e89e2769bcf5f321fcc8283dc72cd71": "3a4c42363f9ccb541e1a46b828138270",
".git/objects/0b/57b1a46c62eeb314f8cda784621db871ac4ea8": "130f3693b5d2a51c5d748b1584e24ba7",
".git/objects/0e/563544455acd2c9f6fd2f33d76e61556bcb5d5": "ac8f06d4f55e91ebeabd5f5e857c29d3",
".git/objects/ad/f04d0bfc865b3ad977c4ccc86b8d800002bdf9": "148677336381cc43d803779d8da3e85f",
".git/objects/bb/0aecd977f31df97194042d96c1dbd5c6bc3452": "73a47ad2ca8280f9537743a738e159ed",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/2b4f4d750111a3caace2693ad6fdfcedd4a951": "e1d91adfbfd8e719e226c4230149b442",
".git/objects/be/ca07169a08debaebf1cc9503e59edf21656cc6": "a6a79c943feae7e17b99bbb11c8bf971",
".git/objects/b3/fa32542d33e1d5edb1eada8551b54cf0bfc5f5": "0a442b4350df62c355a938f46af742f0",
".git/objects/b4/d01e16a27ad51ed716409d3703a9f5b158cc6b": "3e767d31b7e14af95d20bda8111f9390",
".git/objects/d6/a63d08419ac3f3aee27a02c0aa28e692e37ed0": "854ce85cdfd5faf079cd025281a31243",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/fa997b3a3ab0b6d641c765ff091f930de054b2": "d81071ed54b69b329c021f63bfe8f9cd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/5438a04eeae3d92ed20040a596f2517fac36fe": "a93a93ad3f7736572dbb481639277462",
".git/objects/e3/bbbbb8dbb34d32585e0506300c27c7ac42499e": "9d0af47f3dc750fb57410875e084a5a1",
".git/objects/ca/44d717df13f6eceb3193cb27f8fbd5fc78271d": "e79aa5e8311bc5bda10ba70d842de18d",
".git/objects/fe/25fb71725b5d9e7a9de37cc62284d931d97701": "fdfad7d14accfd4a2072d807f24032ff",
".git/objects/fe/926e2c03534397b77e82f1f74af162305dbdc2": "7ba1935577efb99e8f2e45610eceb895",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4b/268cc338f7aa4787deaa5f0b99a8148d31c282": "8dfa0e5d251fefdac1fd60d1f314b7df",
".git/objects/89/d9113ef0eca5e6d55f10413963aa8fc6bb69ae": "978145ec7a5681b417879c419a5f5ab5",
".git/objects/45/ea74a6ab7a82543ab0cf978b5ae128b53c2080": "7ae3155eb713a067580c6d39930f923d",
".git/objects/45/2850543331f4fc8f4c250c0e0fb325071f1057": "5c469acd54b80d95547fde0f1c7b791b",
".git/objects/87/c42f452e5ffc7615260122c847b68a31e5ffc8": "e23ffad784e75ed9f62d3c018e269302",
".git/objects/17/eea301426273fda14d04d6d91e9abe8d809f9c": "75d17142aef1b9146f1cfbaf0df5618b",
".git/objects/8f/b5247cafa6b42a2889441136f54715138fded8": "dd403cc5c38ae773317d93d47faf518f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b97024e4fe0c8b8c5b831574c52af894b6dd9d": "4f547f2a8c1d5cf8550e1ea8f6cffa7d",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/4d/e10b3cf4502ada79f2e21bbc3955a5fe6951cf": "ba6bb1741b84ade312cdecfd4fd153ce",
".git/objects/86/5271776c6459ba1962d5e8dfb8863ed78b8c20": "f86df5cafa24648041089ed3be0fb492",
".git/objects/88/ed2926c3593c785b78ce77d957fbfb21d667b3": "6a521fc4793795f423f47ae200346e62",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/f20839fa92fb6696dfff3f8c0d09b585088c38": "e0d881014071f5f2452614a5dafd57e2",
".git/objects/36/272604b3c4efafc41a4617896571539c79a655": "8d7327f7a1f6621072ad261aa4fb1da5",
".git/objects/5c/dd43b59669d9b02daa1e83d4396b38b46c5fd9": "c6efb6024be332f58f494dd915a71765",
".git/objects/91/04f0256db17da5409971907cc2463bd3c447c5": "9942a8f6684dc375bf7552a030d87e13",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/5e/b059cd45972d356269abfb05342907905377e2": "eabeadecfaea9406de6126c4005a515c",
".git/objects/5b/657e0c19776af7e1450b14f904d6926f3d8670": "3ac98ac3361aa999ad92af733c2c7389",
".git/objects/5b/2c8e6721ad1ee13dc865f00bf43e1959fd18a6": "8aacc8adbd7368a349d98981cfbb0a35",
".git/objects/37/ddd83353ea01fd9688df4695e5b995760425db": "503fb509e54f50b880e3c945260efc86",
".git/objects/08/eae7896b6e701e947793598742e865d0095215": "bcfe3e0b49a32e0e6ec8be82f317b1cf",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/79734cebcd5911d8cf6d6dc6bcd967ab64642c": "23797c22d073e23bcc8b9e06cfe91982",
".git/objects/01/a5a3a7b1006be5c71b8088b07380dda9d70b44": "b4293a8597c56fc14c934e03ff342af9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/2a1512f77575fff77e1bc199ccda6230314fc4": "59947882e521d841fef06439c9227147",
".git/objects/06/babf9f006a60ffad9b9773c438a659e06e7bb0": "2b6f727e24856d22143daf7966265f5f",
".git/objects/6c/e3d993073faf693ac8f0f0c39fdeed63b8ffb5": "7d27fdd88bf5198b6b65862d2663f5b2",
".git/objects/6c/d150c4338dd6bbf618a956de25d9f2e38242c5": "57bd232b604269d4557f52ac97b74c5e",
".git/objects/63/50fdd7024d60faf2468ce7b37bba1d65a28172": "6ca843943eb581931131c6a0a2d40b81",
".git/objects/0f/b32a17c6751be371d185f0df2a1e7a00df675a": "e5d1fb2e7fa8b4b604837fb5cae9c22b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/e9f7971f28ac9bfb627fc364159c8c1fac4609": "7b0a38ebd23d58989dc4dd2fe235911d",
".git/objects/dd/fba920005e9508c5e1852c8ea6f0c26c107407": "30b83be49c90047239bff7ea37516dd8",
".git/objects/b6/97ffae11eb0f7624a90afcd30e87f0f6894df0": "f0350d4cfa18506bf1b85b009e2e3648",
".git/objects/d5/1257a5300e84b2db852efd9dc9d18cb5a6a198": "7cdd9ff9218bddb1d7c6a6400d9ec0a7",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a6/022e45d79ca262ec1c6caccff4b4f209355b8f": "527b4232f0f0a817b80479cdecf5113c",
".git/objects/a6/e7660b436a58b5d8b87b161050d11d9aef24d9": "a35b31fb482b86ef10255ad9bf3e2967",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/60207e62616c2a576e9bff16d5914164466e39": "660f4db515fab2a14a4e73a8e8c97fef",
".git/objects/cd/58f6ec80d257a597d546eaabae7f7281e9b04f": "25719c6d22c97b1386261b573254e4d9",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/4f986cc2eb47e25bfccf3c3f70d37da492b121": "c3f668dd556d3340972f3c41e47ba5d8",
".git/objects/e0/22b172d4919bc7d55da1f3f35b79cd9d69693f": "31fa2bd8081d916964fd2be970877edc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/f843b27b0539cb5b195e66be712a04bf94fc3c": "46add3eab0b587c313a4ceec6903f3f4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/67120c9a7d4acdc6f49a5b7184593178e07477": "581d4e41d7599947ef587aaabc2f44fe",
".git/objects/84/d433f44f0cfa2b7dc352c9b70d1ff14233416c": "cbebe22f6d27142490690e8f01013fee",
".git/objects/49/56e4c3e1318658e9138d66b00d91cb597ff7eb": "336f57f7bfeb5ae76d0c667844285416",
".git/objects/40/4fc71baa11dc0f5211d1c30ecb673b8805311d": "a85924c7a4fc84d3d8e6cf32cdac0ea4",
".git/objects/2b/ebd39815713c6f3ab95e9da3ac2971fc66c109": "f653ba66020a7938c898bb9283c73b6d",
".git/objects/78/502774b756aa3202087e2754660d1deb357059": "44fd3b317370d5c7414c3d571197521f",
".git/objects/78/a409e6682b24b1a50ed94e0b6e8a126d46d646": "ecf64b466d653ad54576f35d29cf2229",
".git/objects/13/1b467789d7ef6fda0a1c89131896b6afeb6288": "9024d645f1066cd2174f35cc6bdfc221",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f7a3bfe5f418859506419e9054a08ff",
".git/logs/refs/heads/main": "3f7a3bfe5f418859506419e9054a08ff",
".git/logs/refs/remotes/origin/main": "eb76fa9b4f6f55f43c067fad061072d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "852476d6246cbb3b2fdc2114455cf38d",
".git/refs/remotes/origin/main": "852476d6246cbb3b2fdc2114455cf38d",
".git/index": "8931f1abc8b1e1febfe145ff714a283d",
".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
".git/FETCH_HEAD": "3a218dd34de24ebb39af8628f9ef1ec1",
"assets/AssetManifest.json": "53909e37493a02a1f6a0053855eb177e",
"assets/NOTICES": "dea45b94c59ac560f18301cc9946006b",
"assets/FontManifest.json": "168c409d8d7c5fdac70699d4acfebed4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "35b412fb0735fc6a2cdecf00076eecc2",
"assets/fonts/MaterialIcons-Regular.otf": "b00fb6ebcf4b6bb04813bac1a2cc922d",
"assets/assets/image/logo.png": "7d46c2c1ec2e14f9396792a812f9cd30",
"assets/assets/font/noto_full.otf": "e3ae561f7b8052d9aa9f2b0b09c33ea1",
"assets/assets/font/roboto.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/font/noto_small.otf": "c8d48ec3cb5ac2af0043671d16e824e7",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
