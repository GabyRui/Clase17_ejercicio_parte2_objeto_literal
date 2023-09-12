
/* EJEMPLO DE DESESTRUCTURACIÓN ----------------------*/

const animes = {
    name: 'dragon',
    lastName: 'hero',
  };

const info = {

      studio: 'Toei', 
      year: '1994',

      genre: {
        shonen: 'forboys',
        shojo: 'forgirls'
      },

      author: {
        manga: 'Yoshihiro',
        anime: 'Sumiko'
      },

      details: {
        station: 'summer',
        channel: 'JapanTV',
        competitors: {
          new1: 'jujutsu',
          new2: 'kenshin',
        }
      }
    };

  console.log(info.studio);
  console.log(info.genre.shojo);
  console.log(info.details.channel);

  /* OTRA MANERA DE DESESTRUCTURAR */

  const {
    studio,
    author,
    details: { station, channel, competitors: { new1 , new2 }},
  } = info;

  console.log(studio);
  console.log(station); 
  console.log(channel);
  console.log(new1);
  console.log(new2);

  /* FREEZE --------------------------------------------*/

  const animeShonen = {
    name: 'HunterxHunter',
    year: 1994,
    author: 'Togashi',
  }
  
  Object.freeze(animeShonen);

  animeShonen.name = 'zom100',
  animeShonen.year = 2021,
  animeShonen.artist = 'Kotaro',
  console.log(animeShonen);


  /* SELLAR --------------------------------------------*/

  const animeShonen2 = {
    name: 'HunterxHunter',
    year: 1994,
    author: 'Togashi',
  }
  
  Object.seal(animeShonen2);

  animeShonen2.name = 'zom100',
  animeShonen2.year = 2023,
  animeShonen2.author = 'Haro'
  animeShonen2.artist = 'Kotaro',

  console.log(animeShonen2);


  /* UNIR Y SUMAR DOS OBJETOS --------------------------------------------*/
 
  const classicAnime = {
    name: 'AkameGaKill',
    year: '2014',
  };
  
  const newAnime = {
    name2: 'zom100',
    year2: '2023',
  };
  
  const allAnime = Object.assign(classicAnime,newAnime);
  console.log(allAnime);
{}


  /*RETURN Y THIS--------------------------------------------*/

  const newAnimation = {

    name: 'ShokugekiNoSoma',
    year: 2015,
    mangaka: 'Yuto',
    illustrator: 'Shun',

    datoCompleto(){
      return `${this.name} - ${this.year} - ${this.mangaka} - ${this.illustrator}`;
    }
  }
  console.log(newAnimation.datoCompleto());


  
  