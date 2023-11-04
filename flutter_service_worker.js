'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d39ec54228fc32d4bdad08d3390b1e9e",
"index.html": "f3ff13daf6a9b2a04c5b088577e0d74b",
"/": "f3ff13daf6a9b2a04c5b088577e0d74b",
"main.dart.js": "0ec40d03c0a133be67e15cee944ba266",
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
".git/objects/0d/9a1c1257faf701edc54da78c17601d70709542": "1ece009ab397885dc7117ce47ef8cdb9",
".git/objects/59/3619c75f4bc781a86049e6832173c2475bc7b1": "ff7770946e529a3077a05c6c6b0b5973",
".git/objects/57/1add0bbf465b03f39e594ef4004acc2417730f": "8c904e612028c202d578fde0a9f9f206",
".git/objects/57/e604166474cdac8bc033729e370cc062d2b5d7": "9a537f7e5564b857849cca307ff4beec",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/be89a17405405816b3d79f1a8818f3b57ff5fa": "e50e1326e518cb9a4334a26f2598abb4",
".git/objects/6f/cce6398a7070f25f6b5be45fd6aa0601734621": "03c51bfb47ee50c27d8e91d927e2ae42",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/a7b72cb9dd923fe70f6638c1aa76288ba0fbeb": "5caa42ca3a90612dbb0dceec88345f6f",
".git/objects/58/b32e304be7cc209c2f92ae9c70571ae9b6f0ed": "2e9289eab58f292e2af4841e8be04b49",
".git/objects/58/87cabf6e89e2769bcf5f321fcc8283dc72cd71": "3a4c42363f9ccb541e1a46b828138270",
".git/objects/0b/57b1a46c62eeb314f8cda784621db871ac4ea8": "130f3693b5d2a51c5d748b1584e24ba7",
".git/objects/93/2b80cd72e3a2f529cd384bf09aa56247ab1573": "5cf96f6a0ffc8cd5d9998071379eb618",
".git/objects/94/411c15f0ffc1e70dddea9254dfd5a0111764df": "4ae2f9b3ca7173858509819b7101c015",
".git/objects/0e/508b0dff2dd39e8c7d9a92e8213f61a32c0f84": "bbf0450259864f11d6b5c54a36ca5e3c",
".git/objects/0e/563544455acd2c9f6fd2f33d76e61556bcb5d5": "ac8f06d4f55e91ebeabd5f5e857c29d3",
".git/objects/0e/1d68fe2d7acdbdc5c5bf8c36dacad7de395a11": "5c292d0ee3d11dffe33eb40c5bbcec0f",
".git/objects/5a/997608af6a0d00522ec9a0cdb3e16508dca2b3": "1b259c2dd12696cdd5d26a8bc6203e91",
".git/objects/5a/4bc69063575a59c992c00cc8510736973a6a29": "59916653e70ac0c04e12e48c180fde3a",
".git/objects/02/affd200e31d0504267bed03c2f965dd7ac4058": "65ec54adf4052047755daf5bfff0d81e",
".git/objects/b2/922c991e4eab5e716dbfae0898343b8086dddc": "647a44eef991bc679db87d9a601e1ede",
".git/objects/ad/f04d0bfc865b3ad977c4ccc86b8d800002bdf9": "148677336381cc43d803779d8da3e85f",
".git/objects/ad/a0d83fd1a5f5eee947bd024f924e41585cbf5b": "cb9276c3dddcb2a213576b6bba58bff1",
".git/objects/ad/38590e5f6afef094e6291ff1a3cb2e8ded2520": "b8b090a412b2b283716b478796be0f07",
".git/objects/bb/0aecd977f31df97194042d96c1dbd5c6bc3452": "73a47ad2ca8280f9537743a738e159ed",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/4a146acbbbafaa0fb5473211796c2d4c34453f": "ea6b1aba07e11a981058514a894cdd87",
".git/objects/be/2b4f4d750111a3caace2693ad6fdfcedd4a951": "e1d91adfbfd8e719e226c4230149b442",
".git/objects/be/288385c055229aa3b1de24749f4bd7700f875c": "a2000fd6f451cb2fc5943d4b0474e6e5",
".git/objects/be/ca07169a08debaebf1cc9503e59edf21656cc6": "a6a79c943feae7e17b99bbb11c8bf971",
".git/objects/b3/fa32542d33e1d5edb1eada8551b54cf0bfc5f5": "0a442b4350df62c355a938f46af742f0",
".git/objects/b4/d01e16a27ad51ed716409d3703a9f5b158cc6b": "3e767d31b7e14af95d20bda8111f9390",
".git/objects/a2/59e36bad266f2544ee2de4e992ebab5716b106": "5d227b17bd145d2771e802d555c824a7",
".git/objects/a5/2b92c5e7bda5f45aaca41576e3e4e875cce0b9": "d941c9367eecb5cc5d095126c4a79155",
".git/objects/d6/a63d08419ac3f3aee27a02c0aa28e692e37ed0": "854ce85cdfd5faf079cd025281a31243",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/d48130ae8a1cea5905557bf122ef36a80bb168": "8abecd63e38fbc0a2b665fec291c1035",
".git/objects/e5/c363c0601e35c2585dd92fbb006d9ac3e87b5f": "08c4889bc2928d9f597d71e08cf3de87",
".git/objects/f3/fa997b3a3ab0b6d641c765ff091f930de054b2": "d81071ed54b69b329c021f63bfe8f9cd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/796d6573cbca0ff2410b96d07caf80f23fe526": "60ce8b37beb9bf526220b63b1a009274",
".git/objects/f5/5438a04eeae3d92ed20040a596f2517fac36fe": "a93a93ad3f7736572dbb481639277462",
".git/objects/e3/bbbbb8dbb34d32585e0506300c27c7ac42499e": "9d0af47f3dc750fb57410875e084a5a1",
".git/objects/ca/44d717df13f6eceb3193cb27f8fbd5fc78271d": "e79aa5e8311bc5bda10ba70d842de18d",
".git/objects/fe/25fb71725b5d9e7a9de37cc62284d931d97701": "fdfad7d14accfd4a2072d807f24032ff",
".git/objects/fe/926e2c03534397b77e82f1f74af162305dbdc2": "7ba1935577efb99e8f2e45610eceb895",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4e/a3e96cda1bb5807d8bac1568c2642ac33bf7af": "d3e1ceda9c06d9880ce99ea97a309a05",
".git/objects/20/0878df6e4faa2c7d3c6988898eb70172460834": "463687935a615927bc2a29ae2b4714c6",
".git/objects/27/4c51ca2e71594418363ace1aa1f3db4ae6e41c": "329d6c77a31958651831d6c58eacf01e",
".git/objects/4b/268cc338f7aa4787deaa5f0b99a8148d31c282": "8dfa0e5d251fefdac1fd60d1f314b7df",
".git/objects/7c/5689c5c9964183ee8494f418252df550409a88": "738ede3dd58c3de2accd18cd3deb37fd",
".git/objects/7c/175d6dc22ec37ed15078f107cc2a0f4f92e3cc": "abed7f2e00a2c53e44c44d35f94cdad5",
".git/objects/89/d9113ef0eca5e6d55f10413963aa8fc6bb69ae": "978145ec7a5681b417879c419a5f5ab5",
".git/objects/45/ea74a6ab7a82543ab0cf978b5ae128b53c2080": "7ae3155eb713a067580c6d39930f923d",
".git/objects/45/2850543331f4fc8f4c250c0e0fb325071f1057": "5c469acd54b80d95547fde0f1c7b791b",
".git/objects/87/9a996e8c499dfa3cf3cce93d7df29b75c274ab": "60d851cec5a8703d649a62015a5bf6a2",
".git/objects/87/c42f452e5ffc7615260122c847b68a31e5ffc8": "e23ffad784e75ed9f62d3c018e269302",
".git/objects/17/eea301426273fda14d04d6d91e9abe8d809f9c": "75d17142aef1b9146f1cfbaf0df5618b",
".git/objects/8f/4ec2b386330e2885884fcc49749bb9e4a297c0": "b1ed2566602b71624cf3f66a8c5afe44",
".git/objects/8f/b5247cafa6b42a2889441136f54715138fded8": "dd403cc5c38ae773317d93d47faf518f",
".git/objects/8f/89186f442cc4b37d5243ee0472ce7a8a612c80": "ad70f9bb5e2381a8473abffdb92a583c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b97024e4fe0c8b8c5b831574c52af894b6dd9d": "4f547f2a8c1d5cf8550e1ea8f6cffa7d",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/26/b494c3b033da349000b18cd124aeb739648bb6": "1e10232a9f8b21ef903a2815857d756b",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/4d/e10b3cf4502ada79f2e21bbc3955a5fe6951cf": "ba6bb1741b84ade312cdecfd4fd153ce",
".git/objects/86/5271776c6459ba1962d5e8dfb8863ed78b8c20": "f86df5cafa24648041089ed3be0fb492",
".git/objects/44/722036c166800cca07e4c1ddab2ad3d9d1e6ad": "d9035eb81b4fa1fddd5648159172280f",
".git/objects/2f/71e8c5c857e1f6d24d2c2d612910376df662c9": "51fd711bbcf00e3f4219aacbcc3ed9ec",
".git/objects/2f/2cdc64e00c8a3d3c664dd5ac17a6c8fe3dea73": "995d8b8196176deb6423902db86c5794",
".git/objects/88/2da988973a10a1976e6e0527055212d1970ed1": "4ce4675120c0c38bef29a1f0bf02d919",
".git/objects/88/ed2926c3593c785b78ce77d957fbfb21d667b3": "6a521fc4793795f423f47ae200346e62",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/d6c95c53ee339a2823e74431b5e50619292c04": "5c78eecfe2f02f7ed816348acc9d5fcf",
".git/objects/00/6b8c149610fcda50d793c31ed0c9cda89eb584": "41f2c57b74c565bddf5e529bb0959759",
".git/objects/00/f20839fa92fb6696dfff3f8c0d09b585088c38": "e0d881014071f5f2452614a5dafd57e2",
".git/objects/9a/791a7533d4375bc7d0a5848f237e0be9b798ea": "9e69c824218195195f3a2b93a4a3539b",
".git/objects/36/272604b3c4efafc41a4617896571539c79a655": "8d7327f7a1f6621072ad261aa4fb1da5",
".git/objects/5c/dd43b59669d9b02daa1e83d4396b38b46c5fd9": "c6efb6024be332f58f494dd915a71765",
".git/objects/91/04f0256db17da5409971907cc2463bd3c447c5": "9942a8f6684dc375bf7552a030d87e13",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/5e/b059cd45972d356269abfb05342907905377e2": "eabeadecfaea9406de6126c4005a515c",
".git/objects/5b/657e0c19776af7e1450b14f904d6926f3d8670": "3ac98ac3361aa999ad92af733c2c7389",
".git/objects/5b/2c8e6721ad1ee13dc865f00bf43e1959fd18a6": "8aacc8adbd7368a349d98981cfbb0a35",
".git/objects/37/ddd83353ea01fd9688df4695e5b995760425db": "503fb509e54f50b880e3c945260efc86",
".git/objects/08/03312decf85a91a21d6e1a753a5d226eb7618e": "a9eacb79ebe7686820e551ada8ab6f11",
".git/objects/08/eae7896b6e701e947793598742e865d0095215": "bcfe3e0b49a32e0e6ec8be82f317b1cf",
".git/objects/08/0ca6ac75205d78a47e59b4462c2b092e3a71c9": "fd222f9f38e8d779043a29fc7428a931",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/79734cebcd5911d8cf6d6dc6bcd967ab64642c": "23797c22d073e23bcc8b9e06cfe91982",
".git/objects/01/a5a3a7b1006be5c71b8088b07380dda9d70b44": "b4293a8597c56fc14c934e03ff342af9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/2a1512f77575fff77e1bc199ccda6230314fc4": "59947882e521d841fef06439c9227147",
".git/objects/06/babf9f006a60ffad9b9773c438a659e06e7bb0": "2b6f727e24856d22143daf7966265f5f",
".git/objects/6c/e3d993073faf693ac8f0f0c39fdeed63b8ffb5": "7d27fdd88bf5198b6b65862d2663f5b2",
".git/objects/6c/d150c4338dd6bbf618a956de25d9f2e38242c5": "57bd232b604269d4557f52ac97b74c5e",
".git/objects/39/84765b9d79050ca1e15b078d86e645d810fcf2": "3905179862b224854e429ac41eb76534",
".git/objects/97/e69c3a3f2e6e5d9df5d33270ded0c40d6a9968": "a57edbe3aaf4e9979ba8706f92e76d4e",
".git/objects/63/50fdd7024d60faf2468ce7b37bba1d65a28172": "6ca843943eb581931131c6a0a2d40b81",
".git/objects/0f/b32a17c6751be371d185f0df2a1e7a00df675a": "e5d1fb2e7fa8b4b604837fb5cae9c22b",
".git/objects/0a/ebe846987044e8319f04e3ed995d96ae1b9674": "9ec6e81070670180ff9b66f084149614",
".git/objects/0a/d4cd51a2b1bfc1df55dde2004c3cc95313444f": "634d19b63761c4a7ce40be8d450fe805",
".git/objects/bf/e5eeac1a95af7a4c4515521835d03de54874a1": "9d4b84b15dc9e405bd370f7b06feb779",
".git/objects/d3/e423778b9cafea9e8aadbf2639f83f37b29443": "2876a7bf16e750f684dade31ad561e89",
".git/objects/d3/50ffa79e30636b1287ba64bd46f083a7af0d4a": "b52ed746db8abe1e6f71bdd1a4cbb504",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/81bbfdf6f51b5e4bd496340402f8547646a8d7": "6a5c4393a6d450b5d9b6dc30bfb78a04",
".git/objects/ba/3a77e6681008953381e6deb6a1fdfc71eda432": "a563b88ab6a471b8052c147a6f281741",
".git/objects/ba/e9f7971f28ac9bfb627fc364159c8c1fac4609": "7b0a38ebd23d58989dc4dd2fe235911d",
".git/objects/dd/fba920005e9508c5e1852c8ea6f0c26c107407": "30b83be49c90047239bff7ea37516dd8",
".git/objects/b6/97ffae11eb0f7624a90afcd30e87f0f6894df0": "f0350d4cfa18506bf1b85b009e2e3648",
".git/objects/a9/769b72a56b7f7a31bfceb6df3ccd5e7507a3a3": "94413894a0ab78939cc069f2ed2a06ef",
".git/objects/d5/1257a5300e84b2db852efd9dc9d18cb5a6a198": "7cdd9ff9218bddb1d7c6a6400d9ec0a7",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/f9bbe7a3870c3edc859d1bf60f1a7ddc1e7934": "cfa7d013153c092b455289d9a5b782b4",
".git/objects/b0/9536f710e1c120e05e739e17c7f215ad376af1": "66e46c2a6de48749efcc689d5d22c698",
".git/objects/a6/022e45d79ca262ec1c6caccff4b4f209355b8f": "527b4232f0f0a817b80479cdecf5113c",
".git/objects/a6/e7660b436a58b5d8b87b161050d11d9aef24d9": "a35b31fb482b86ef10255ad9bf3e2967",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e426e7d2acdc5ff55912ee70559c7b5e04b4bf": "2e98d8ca336a1e5d2dc35c0635212c82",
".git/objects/c4/8286313e31c0271e96f36d320cd1943125df1c": "b1b2781612eed6214217e6a7e6d9b76a",
".git/objects/ea/60207e62616c2a576e9bff16d5914164466e39": "660f4db515fab2a14a4e73a8e8c97fef",
".git/objects/cd/58f6ec80d257a597d546eaabae7f7281e9b04f": "25719c6d22c97b1386261b573254e4d9",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/ffcbdb878b6a893102438e408d7a832191de35": "7e3fa00ad82d059f684d19e4d281c105",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/17b540df2c85de3101be2bf78ceac7dca7036c": "fe3b770e341e06faf81c74af636928ba",
".git/objects/fa/4f986cc2eb47e25bfccf3c3f70d37da492b121": "c3f668dd556d3340972f3c41e47ba5d8",
".git/objects/fa/95e796570223539f1bf6aa1cd4d74c3579e8a8": "9cdbb88f4a1686c888d799fd7130affe",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f8/d9a4ef2791c0bffceb97a3ecfd8c759c2e4a0a": "26e6d21f16edf94afd291c68eb1567d9",
".git/objects/ce/d026e2c0a46e8c56aef5dd95db6aaab0068bc0": "b7944445cfbd083def5f10b769fcd543",
".git/objects/e0/22b172d4919bc7d55da1f3f35b79cd9d69693f": "31fa2bd8081d916964fd2be970877edc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/f843b27b0539cb5b195e66be712a04bf94fc3c": "46add3eab0b587c313a4ceec6903f3f4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/9a74035f2f227dbbfea1dc5b0a4629e9a33ee9": "aa6fd06254e90bf6347585ec84ef88b5",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/d90d7ad1bd7b91ca5a3ffff279a9d0e7592aa4": "19b5cf7203c56c9a5d01575d496471e6",
".git/objects/77/67120c9a7d4acdc6f49a5b7184593178e07477": "581d4e41d7599947ef587aaabc2f44fe",
".git/objects/77/148ec3362c31d593f9fa06062762beecbad6c6": "e2535071515e72026794c334b227946f",
".git/objects/48/787b38308411717e6758130bf0f6f13aaa4f93": "067e6baacd69cbf58232dc6175f4d20b",
".git/objects/70/f36611c80110c06ddd9fafe146dc30524899c4": "cfcac4f98359718bc30da1ada0d104c9",
".git/objects/70/72c568243adcb048055946777dd592f232346f": "35da69148537b1542f3a133a7a870986",
".git/objects/1e/6f084814c0cf4f95a916a2a2b36cd5dce2d2ee": "a1008f971433900c9dcf88064378bdab",
".git/objects/84/d433f44f0cfa2b7dc352c9b70d1ff14233416c": "cbebe22f6d27142490690e8f01013fee",
".git/objects/12/faacc8daf8bacafd32f147e7ab7e85d39651a2": "56e1ecd608114cfdb6abe84fcc1b2c15",
".git/objects/49/56e4c3e1318658e9138d66b00d91cb597ff7eb": "336f57f7bfeb5ae76d0c667844285416",
".git/objects/40/4fc71baa11dc0f5211d1c30ecb673b8805311d": "a85924c7a4fc84d3d8e6cf32cdac0ea4",
".git/objects/2e/789d8972c67c4dc3edb33a239a92cf14b43895": "5667b57dab548871d0f0d15e18342c4c",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2b/ebd39815713c6f3ab95e9da3ac2971fc66c109": "f653ba66020a7938c898bb9283c73b6d",
".git/objects/2b/115e59c97ab35de557c2c4a83664056b37d37a": "9e51a55c0de137da441d7320c275a617",
".git/objects/78/502774b756aa3202087e2754660d1deb357059": "44fd3b317370d5c7414c3d571197521f",
".git/objects/78/a409e6682b24b1a50ed94e0b6e8a126d46d646": "ecf64b466d653ad54576f35d29cf2229",
".git/objects/13/1b467789d7ef6fda0a1c89131896b6afeb6288": "9024d645f1066cd2174f35cc6bdfc221",
".git/objects/7f/0aee9c6efb9c8dfe0aaf5d903f1bbbd17e982d": "ef5500c0e5af532193d25735c1ba2f84",
".git/objects/7a/0ec84cc58f77be4229137e60f23950500774ed": "b1e2c6f27ab7b198c3032f41c97dffcd",
".git/objects/7a/87d9f2a8f35337d3a5178576482d263920c943": "66fafd8ee9626df122b18168cfda876b",
".git/objects/8e/b3584947656a79bc4fdcf3ea5c61d8713b4f72": "ff0a495ce3f8098bf88e3fb5815ecd72",
".git/objects/8e/68ad43d28b6664e6598d1a3f86f6dc56ab4a0b": "f638c9b389fef5291e88460812879868",
".git/objects/8e/9679de0b40828f2e470745836b3a051708370e": "0157f941cca270c7742693891deb292a",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de82c76ba40da9fbc6525faf3172059e",
".git/logs/refs/heads/main": "de82c76ba40da9fbc6525faf3172059e",
".git/logs/refs/remotes/origin/main": "0067820e6da8fd05b8ecd695266224e1",
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
".git/refs/heads/main": "d9ff0bedfedb2cfe90bba3891dfa62ef",
".git/refs/remotes/origin/main": "d9ff0bedfedb2cfe90bba3891dfa62ef",
".git/index": "dd6bb7e9798ec509e1146a917f110ef9",
".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
".git/FETCH_HEAD": "3a218dd34de24ebb39af8628f9ef1ec1",
"assets/AssetManifest.json": "307912894a3f6dd69277a7691b330d3a",
"assets/NOTICES": "ef75a3b1231c351a90613db29a1191a1",
"assets/FontManifest.json": "637f75f20a1eed2b2ae970be04d04206",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "036317ab4b9d9317f6637a0d4c053959",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "934b039a1ccb0e72e1b732d21145f092",
"assets/fonts/MaterialIcons-Regular.otf": "9777e690a88432219720b47e94cd90a5",
"assets/assets/image/logo.png": "7d46c2c1ec2e14f9396792a812f9cd30",
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
