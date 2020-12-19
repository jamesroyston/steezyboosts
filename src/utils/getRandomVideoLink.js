var videoIds = [
  "m56plti2F4Y",
  "ERsbXaDoT04",
  "wT6x00ph2b8",
  "V1iGTB-e_2A",
  "_-qo4neyJjs",
  "qztuEucrNBc",
  "ZXsQAXx_ao0",
  "x6hwhUECK1Q",
  "T1S_qaw7Kvg",
  "r2kpaApHUgY",
  "dmYtHEPp_yw",
  "HPhSdTy2_ks",
  "4qy_n51yOmI",
  "451ZLsBhRrk",
  "Hh7nFceMpm8",
  "1_Fphakwz_E",
  "paO857AJ-AE",
  "FE--vpodeCg",
];

let cache = {};

export default function getRandomVideoLink() {
  var url = videoIds[Math.floor(Math.random() * videoIds.length)];
  if (Object.keys(cache)?.length === videoIds.length) {
    cache = {};
  }
  if (cache[url]?.seen) {
    getRandomVideoLink();
  }
  cache[url] = {
    seen: true,
  };
  return "https://www.youtube.com/watch?v=" + url;
}
