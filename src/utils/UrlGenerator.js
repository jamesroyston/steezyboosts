var videoIds = [
    "m56plti2F4Y",
    "ERsbXaDoT04",
    "wT6x00ph2b8",
    "V1iGTB-e_2A",
    "_-qo4neyJjs",
    "qztuEucrNBc",
    "ZXsQAXx_ao0",
];

export default function getRandomVideoLink(){
    var url = videoIds[Math.floor(Math.random()*videoIds.length)]
    console.log("https://www.youtube.com/watch?v="+url)
    return "https://www.youtube.com/watch?v="+url
}