import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilkokul-seviyesi',
  templateUrl: './ilkokul-seviyesi.page.html',
  styleUrls: ['./ilkokul-seviyesi.page.scss'],
})
export class IlkokulSeviyesiPage implements OnInit {
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;

  }
  isModalOpen2 = false;
  setOpen2(isOpen2: boolean) {
    this.isModalOpen2 = isOpen2;
  }
  isModalOpen3 = false;
  setOpen3(isOpen3: boolean) {
    this.isModalOpen3 = isOpen3;
  }
  isModalOpen4 = false;
  setOpen4(isOpen4: boolean) {
    this.isModalOpen4 = isOpen4;
  }
  sesliHikayeler = [
    {resim:'assets/Cirkin.jpg' , baslik: 'The Ugly Duckling', icerik: 'A little duckling was very sad because he thought he was the ugliest amongst all his brothers and sisters. They would not play with him and teased the poor ugly duckling. One day, he saw his reflection in the water and cried, “Nobody likes me. I am so ugly.” He decided to leave home and went far away into the woods.Deep in the forest, he saw a cottage in which there lived an old woman, her hen, and her cat. The duckling stayed with them for some time but he was unhappy there and soon left. When winter set in, the poor duckling almost froze to death. A peasant took him home to his wife and children. The poor duckling was terrified of the children and escaped. The ugly duckling spent the winter in a marshy pond.Finally, spring arrived. One day, the duckling saw a beautiful swan swimming in the pond and fell in love with her. But then he remembered how everyone made fun of him and he bent his head down in shame. When he saw his own reflection in the water he was astonished. He was not an ugly duckling anymore, but a handsome young swan! Now, he knew why he had looked so different from his brothers and sisters. “They were ducklings but I was a baby swan!” he said to himself.He married the beautiful swan and lived happily ever after.' },
    {resim:'assets/wind.jpg', baslik: 'The Wind and The Sun Tale', icerik: 'It was an autumn day. The wind and the sun had an argument. The wind boasted “I am stronger than you.” The sun mildly said, “No, you are not”. Just then, they saw a traveler wrapped in a blanket was passing by. The wind said, “Whoever separates the blanket from traveler is the stronger. Do you agree?” The sun replied, “OK. First, you try.”The wind started blowing. The traveler wrapped his blanket around him. He blew harder. The traveler held his blanket firmer. He blew still harder. The traveler held his blanket still tighter. The harder the wind blew the tighter and firmer did the traveler hold his blanket. The wind failed. It was the Sun’s turn. The Sun smiled gently at the traveler. The traveler loosened his grip on the blanket. The sun smiled warmly. The traveler felt the warmth and soon took off the blanket.  The sun was declared stronger.' },

    {resim:'assets/beaty.jpg', baslik: 'Sleeping Beauty', icerik: 'Once upon a time, there was a King and Queen. And when their baby daughter was born, they were so happy, they decided to have a big party. They invited all their family, all their friends and all the fairies in the land. Now there were 13 fairies altogether but the king but queen only invited 12. They forgot about the 13th. And that was something they should not have done. Well, it was a splendid party! There were silver dishes piled high with delicious food and golden plates at every place. And when everyone had finished eating, the fairies gathered around the baby’s cradle and they each made a magic wish. The princess shall be beautiful said the first. And happy, said the second. And kind said the third. And so they went on. The princess was to be brave, and clever, and truthful. She was to have a sweet singing voice and light dancing feet. And, then, just as the twelfth fairy was about to make her wish, in came the thirteenth. She was furious because she had not been invited to the party. Here is my wish, she said. “When the princess is 16 years old, she will prick her finger on a spindle and she will die.” And with that, the thirteenth fairy vanished. Then the 12th fairy said, “I cannot change all of the wicked fairy’s powerful magic.” So the princess will prick her finger but she will not die! She would sleep for a hundred years. The king and queen thanked the fairy for her kindness but they were not happy. They did not want their daughter to sleep for a hundred years. So they ordered that every spinning wheel and spindle in the land must be chopped up and burnt. Then they thought that the princess was safe. The years passed and the princess grew up. She was very beautiful and clever at lots of different things. She was, in fact, everything the fairies had wished her to be. On her sixteenth birthday, the princess was exploring the castle when she came to a little room at the top of a tall tower. And in that room was an old woman sitting by a spinning wheel. “What are you doing?” asked the princess? “I am spinning,” said the old woman, who was really the wicked thirteenth fairy, “would you like to try?” “Oh yes,” said the princess, and she sat down by the spinning wheel. But as soon as she touched the spindle, the sharp point pricked her finger and she fell asleep.  And the old woman vanished. At that same moment, the king and the queen, the servants, the cats, and the dogs all fell asleep! Even the fire stopped burning and the roasting meat stopped sizzling. Everything slept. Then a hedge of wild roses grew up around the castle. It grew and it grew until the castle was hidden. One hundred years passed and then a prince came riding by and saw the top of the tower rising up above the hedge of roses. How strange, he said, I never knew there was a castle here! He jumped off his horse and lifted his sword to cut away the hedge. But as soon as the sword touched the branch, a path opened up in front of him. So the prince walked freely through the hedge. He entered the castle and walked from room to room. Imagine his surprise, everyone, and everything was fast asleep.  At last, he entered a little room at the end of a tall tower and he saw the sleeping princess. She was so very beautiful that he bent down and kissed her. Then the spell was broken and the princess opened her eyes.At the same moment, everyone and everything in the castle awoke! The king yawned, the queen blinked, the cats had a good stretch and the dogs wagged their tails. The servants began to work, the fire began to flame, and the roasting meat began to sizzle. A hundred years had not changed anyone or anything. And what happened next? Why the beautiful princess married the prince, who had woken her from such a long deep sleep.' },
    // Diğer hikayeler...
  ];
  gorselIcerikler = [
    { baslik: 'KIRMIZI', resimUrl: 'assets/krmz.jpg', aciklama: 'RED' },
    { baslik: 'MAVİ', resimUrl: 'assets/sirin.jpg', aciklama: 'BLUE' },
    { baslik: 'YEŞİL', resimUrl: 'assets/yesil.jpg', aciklama: 'GREEN' },
    { baslik: 'SARI', resimUrl: 'assets/sari.jpg', aciklama: 'YELLOW' },
    { baslik: 'TURUNCU', resimUrl: 'assets/turuncu.jpg', aciklama: 'ORANGE' },
    { baslik: 'PEMBE', resimUrl: 'assets/pmb.jpg', aciklama: 'PİNK' },
    { baslik: 'KAHVERENGİ', resimUrl: 'assets/brown.jpg', aciklama: 'BROWN' },
    { baslik: 'SİYAH', resimUrl: 'assets/siayah.jpg', aciklama: 'BLACK' },
    { baslik: 'BEYAZ', resimUrl: 'assets/beyaz.jpg', aciklama: 'WHİTE' },
    { baslik: 'MOR', resimUrl: 'assets/mor.jpg', aciklama: 'PURPLE' },
    { baslik: 'GRİ', resimUrl: 'assets/gri.jpg', aciklama: 'GREY' },

    { baslik: 'Şekilleri Tanıyalım', resimUrl: 'assets/sekiller.jpg', aciklama: 'Temel şekilleri tanıyalım!' },
    // Diğer içerikler...
  ];
  rakamIcerikler = [
    { baslik: 'SIFIR', resimUrl: 'assets/sıfır.jpg', aciklama: 'ZERO' },
    { baslik: 'BİR', resimUrl: 'assets/1rakami.jpg', aciklama: 'ONE' },
    { baslik: 'İKİ', resimUrl: 'https://www.babaninokulu.com/wp-content/uploads/2022/09/2rakami.png', aciklama: 'TWO' },
    { baslik: 'ÜÇ', resimUrl: 'data:image/png;base64,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', aciklama: 'THREE' },
    { baslik: 'DÖRT', resimUrl: 'https://www.babaninokulu.com/wp-content/uploads/2022/10/4rakami.png', aciklama: 'FOUR' },
    { baslik: 'BEŞ', resimUrl: 'https://i.pinimg.com/originals/ca/62/46/ca62465deb975022127fc48d0200c781.gif', aciklama: 'FIVE' },
    { baslik: 'ALTI', resimUrl: 'https://www.babaninokulu.com/wp-content/uploads/2022/12/6-rakami.png', aciklama: 'SİX' },
    { baslik: 'YEDİ', resimUrl: 'https://www.eduhol.com/uploads/contents/55736/thumbnails/thumb_md/7-rakami_818635439.jpg', aciklama: 'SEVEN' },
    { baslik: 'SEKİZ', resimUrl: 'https://cdn03.ciceksepeti.com/cicek/kcm2725506-1/XL/8-rakami-tamamlanabilir-duvar-yazisi-tarih-yazmak-icin-lazer-kesim-ahsap-rakam-kcm2725506-1-62605016cc9247c48ca07755ad56aa7d.jpg', aciklama: 'EIGHT' },
    { baslik: 'DOKUZ', resimUrl: 'https://www.eduhol.com/uploads/contents/103495/thumbnails/thumb_md/9-rakami_1568335129.jpg', aciklama: 'NINE' },

    
  ];
  cizgiFilmler = [
    { baslik: 'Çizgi Film 1', resimUrl: 'asadadsdafs', videoUrl: 'assets/cizgi1.mp4' },
    { baslik: 'Çizgi Film 2', resimUrl: 'assets/cizgi-film-2.jpg', videoUrl: 'assets/cizgi2.mp4' },
    { baslik: 'Çizgi Film 3', resimUrl: 'assets/cizgi-film-2.jpg', videoUrl: 'assets/edison.mp4' },
    { baslik: 'Çizgi Film 4', resimUrl: 'assets/cizgi-film-2.jpg', videoUrl: 'assets/betho.mp4' },
    { baslik: 'Çizgi Film 5', resimUrl: 'assets/cizgi-film-2.jpg', videoUrl: 'assets/cizgi1.mp4' },
    { baslik: 'Çizgi Film 6', resimUrl: 'assets/cizgi-film-2.jpg', videoUrl: 'assets/cizgi1.mp4' },
    // Diğer çizgi filmler...
  ];

     // Aktif menü indeksi
     aktifMenuIndex = 0;

  dinle(hikaye: any): void {
    // Hikayeyi dinleme işlemleri buraya eklenebilir.
    
    const metin = hikaye.icerik;
    const okuma = new SpeechSynthesisUtterance(metin);
    okuma.lang = 'en-US'; // İngilizce
    okuma.rate = 0.75; // Varsayılan değeri 1.'0dir, artırarak hızı artırabilirsiniz.
    speechSynthesis.speak(okuma);
    
  }
  dinleIcerik(icerik: any): void {
    // İçeriği dinleme işlemleri buraya eklenebilir.
    const metin = icerik.aciklama;
    const okuma = new SpeechSynthesisUtterance(metin);
    okuma.lang = 'en-US'; // İngilizce
    okuma.rate = 0.75; // Varsayılan değeri 1.'0dir, artırarak hızı artırabilirsiniz.
    speechSynthesis.speak(okuma);
  }
  durdur(): void {
    speechSynthesis.cancel();
  }

// Menü değiştirmek için fonksiyon
degistirMenu(index: number): void {
  this.aktifMenuIndex = index;
}

  constructor() { }
  ngOnInit() {
  }
 
 
}














