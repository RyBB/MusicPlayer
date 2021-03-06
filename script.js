$(function() {
  $(document).snowfall({
    maxSize  : 10,    // 雪の最大サイズ
    maxSpeed : 3,    // 雪の最高速度
    round    : true, // 雪の形を丸くする
  });
});

var array = [
  {
    title: 'White snow',
    mp3: './music/whitesnow.mp3',
    img: './image/christmas-3864552__480.jpg',
  },
  {
    title: 'Wonderful Christmas',
    mp3: './music/gratefulxmas.mp3',
    img: './image/christmas-1911637__480.jpg',
  },
  {
    title: 'ChristmasDay',
    mp3: './music/christmas.mp3',
    img: './image/christmas-motif-3834860__480.jpg',
  },
  {
    title: 'クリスマスプレゼント',
    mp3: './music/xmaspresent.mp3',
    img: './image/lichterkette-3834926__480.jpg',
  },
  {
    title: 'Snow as illuminate the darkness',
    mp3: './music/nightofchrismas.mp3',
    img: './image/xmas-2928142__480.jpg',
  }
];

var app = new Vue({
  el: '#app',
  data: {
    imglink: array[0].img,
    musiclink: array[0].mp3,
  },
  methods: {
    nextMusic: function() {
      const index = array.findIndex(obj => {
        return obj.mp3 === this.musiclink;
      });
      if (!array[index + 1]) {
        app.imglink = array[0].img;
        app.musiclink = array[0].mp3;
        return;
      }
      app.imglink = array[index + 1].img;
      app.musiclink = array[index + 1].mp3;
    }
  }
});

new Vue({
  el: '#list',
  data: {
    items: array
  },
  methods: {
    changeMusic: event => {
      app.imglink = event.img;
      app.musiclink = event.mp3;
    }
  }
});