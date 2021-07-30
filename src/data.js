import { v4 as uuidv4 } from "uuid"

function ChillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School West",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
        name: 'Sozu',
        cover: 'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
        artist: 'mommy, Sleepy Fish',
        id: uuidv4(),
        active: false,
        color: ['#568CD6', '#EFD7CB'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=19062'
    },
    {
        name: 'Bliss',
        cover: 'https://f4.bcbits.com/img/a3142568702_16.jpg',
        artist: 'Misha, Jussi Halme',
        id: uuidv4(),
        active: false,
        color: ['#111111', '#6784B3'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=15080'
    },
    {
        name: "Daylight",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Keep Going",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
      },
      {
        name: 'Lulaby',
        cover: 'https://f4.bcbits.com/img/a0968437577_16.jpg',
        artist: 'Misha, Jussi Halme',
        id: uuidv4(),
        active: false,
        color: ['#AB9CAF', '#2E385B'],
        audio: 'https://mp3.chillhop.com/serve.php/?mp3=15033'
    },
  ]
}

export default ChillHop;