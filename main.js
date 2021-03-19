const eboObj = document.getElementById('ebo');
const aobaObj = document.getElementById('aoba');
const ninaObj = document.getElementById('nina');
const cosmosObj = document.getElementById('cosmos');
const macObj = document.getElementById('mac');
const steveObj = document.getElementById('steve');
const kaliObj = document.getElementById('kali');
const kayaObj = document.getElementById('kaya');
const otisObj = document.getElementById('otis');
const britellObj = document.getElementById('britell');
const joniObj = document.getElementById('joni');
const pieroObj = document.getElementById('piero');
const helpObj = document.getElementById('help');

const sndeboObj = document.getElementById('sndebo')
const sndaobaObj = document.getElementById('sndaoba')
const sndninaObj = document.getElementById('sndnina')
const sndcosmosObj = document.getElementById('sndcosmos')
const sndmacObj = document.getElementById('sndmac')
const sndsteveObj = document.getElementById('sndsteve')
const sndkaliObj = document.getElementById('sndkali')
const sndkayaObj = document.getElementById('sndkaya')
const sndotisObj = document.getElementById('sndotis')
const sndbritellObj = document.getElementById('sndbritell')
const sndjoniObj = document.getElementById('sndjoni')
const sndpieroObj = document.getElementById('sndpiero')

helpObj.addEventListener('click', function(evt){
  console.log('help button clicked' + evt.target.id);
  const idName = evt.target.id;
    userPicked(idName);
});

eboObj.addEventListener('click', function(evt) {
    console.log('ebo button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
aobaObj.addEventListener('click', function(evt) {
    console.log('aoba button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
ninaObj.addEventListener('click', function(evt) {
    console.log('nina button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
cosmosObj.addEventListener('click', function(evt) {
    console.log('cosmos button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
macObj.addEventListener('click', function(evt) {
    console.log('mac button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
steveObj.addEventListener('click', function(evt) {
    console.log('steve button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
kaliObj.addEventListener('click', function(evt) {
    console.log('kali button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
kayaObj.addEventListener('click', function(evt) {
    console.log('kaya button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
otisObj.addEventListener('click', function(evt) {
    console.log('otis button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
britellObj.addEventListener('click', function(evt) {
    console.log('britell button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
joniObj.addEventListener('click', function(evt) {
    console.log('joni button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});
 
pieroObj.addEventListener('click', function(evt) {
    console.log('piero button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
      case 'aoba':
        zDisplayObj.src = 'images/aoba(p2).png';
        zTitleObj.innerHTML = 'Ichiko Aoba';
        zDateRangeObj.innerHTML = '20-January to 18-February';
        zMoreInfo.innerHTML = '<p>Born: January 28, 1990. Aoba is a Japanese folk singer and songwriter who was born in Urayasu, Chiba and raised in Kyoto Prefecture, Japan. Her main instrument is guitar, which most of her music is mainly composed of, but she also plays the piano, clarinet, accordion, and flute on her own.</p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndaobaObj.play();
        break;
      case 'nina':
        zDisplayObj.src = 'images/nina(p2).png';
        zTitleObj.innerHTML = 'Nina Simone';
        zDateRangeObj.innerHTML = '19-February to 20-March';
        zMoreInfo.innerHTML = '<p>Born: February 21, 1933. Eunice Kathleen Waymon, known professionally as Nina Simone, was an American singer, songwriter, musician, arranger, and civil rights activist. Her music spanned a broad range of musical styles including classical, jazz, blues, folk, R&B, gospel, and pop.</p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndninaObj.play();
        break;
      case 'cosmos':
        zDisplayObj.src = 'images/cosmos(p2).png';
        zTitleObj.innerHTML = 'Frankie Cosmos';
        zDateRangeObj.innerHTML = '21-March to 19-April';
        zMoreInfo.innerHTML = '<p>Born: March 21, 1994. Greta Kline, better known by her stage name Frankie Cosmos, is an American musician and singer-songwriter. She is known for her independent releases, inspired by Frank  inspired by Frank OHara, DIY ethics of K Records and the early 2000s New York City anti-folk scene.</p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndcosmosObj.play();
        break;
      case 'mac':
        zDisplayObj.src = 'images/mac(p2).png';
        zTitleObj.innerHTML = 'Mac DeMarco';
        zDateRangeObj.innerHTML = '20-April to 20-May';
        zMoreInfo.innerHTML = '<p>Born: April 30, 1990. McBriare Samuel Lanyon "Mac" DeMarco is a Canadian singer-songwriter, multi-instrumentalist and producer. DeMarco has released six full-length studio albums, his debut Rock and Roll Night Club, 2, Salad Days, Another One, This Old Dog, and Here Comes the Cowboy.';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndmacObj.play();
        break;
      case 'steve':
        zDisplayObj.src = 'images/steve(p2).png';
        zTitleObj.innerHTML = 'Steve Lacy';
        zDateRangeObj.innerHTML = '21-May to 21-June';
        zMoreInfo.innerHTML = '<p>Born: May 23, 1998. Steve Thomas Lacy-Moya, better known as Steve Lacy, is an American musician, singer, songwriter, and record producer. He was born in Compton, California and gained recognition as a member of the Grammy-nominated R&B band The Internet in 2015. </p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndsteveObj.play();
        break;
      case 'kali':
        zDisplayObj.src = 'images/kali(p2).png';
        zTitleObj.innerHTML = 'Kali Uchis';
        zDateRangeObj.innerHTML = '22-June to 22-July';
        zMoreInfo.innerHTML = '<p>Born: July 17, 1994. Karly-Marina Loaiza, known professionally as Kali Uchis, is an American singer and songwriter. Born in Alexandria, VA, she initially garnered music industry attention with her 2012 mixtape, Drunken Babble, which was followed by her debut EP, Por Vida, released in 2015. </p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndkaliObj.play();
        break;
      case 'kaya':
        zDisplayObj.src = 'images/kaya(p2).png';
        zTitleObj.innerHTML = 'Okay Kaya';
        zDateRangeObj.innerHTML = '23-July to 22-August';
        zMoreInfo.innerHTML = '<p>Born: August 14, 1990. Kaya Wilkins, better known as Okay Kaya, is a Norwegian-American musician and actress from New Jersey.</p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndkayaObj.play();
        break;
      case 'otis':
        zDisplayObj.src = 'images/otis(p2).png';
        zTitleObj.innerHTML = 'Otis Redding';
        zDateRangeObj.innerHTML = '23-August to 22-September';
        zMoreInfo.innerHTML = '<p>Born: September 9, 1941. Otis Ray Redding Jr. was an American singer and songwriter. He is considered one of the greatest singers in the history of American popular music and a seminal artist in soul music and rhythm and blues.His style of singing gained inspiration from the gospel music that preceded the genre.</p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndotisObj.play();
        break;
      case 'britell':
        zDisplayObj.src = 'images/britell(p2).png';
        zTitleObj.innerHTML = 'Nicholas Britell';
        zDateRangeObj.innerHTML = '23-September to 23-October';
        zMoreInfo.innerHTML = '<p>Born: October 17, 1980. Nicholas Britell is an American composer, pianist, and film producer based in New York City. He has scored both of Barry Jenkins studio films, Moonlight and If Beale Street Could Talk, both of which received nominations for Best Original Score at the Academy Awards. </p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndbritellObj.play();
        break;
      case 'joni':
        zDisplayObj.src = 'images/joni(p2).png';
        zTitleObj.innerHTML = 'Joni Mitchell';
        zDateRangeObj.innerHTML = '24-October to 21-November';
        zMoreInfo.innerHTML = '<p>Born: November 7, 1943. Roberta Joan "Joni" Mitchell CC is a Canadian singer-songwriter. Drawing from folk, pop, rock, classical, and jazz, Her songs often reflect on social and philosophical ideals as well as her feelings about romance, womanhood, disillusionment, and joy.</p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndjoniObj.play();
        break;
      case 'piero':
        zDisplayObj.src = 'images/piero(p2).png';
        zTitleObj.innerHTML = 'Piero Piccioni';
        zDateRangeObj.innerHTML = '22-November to 21-December';
        zMoreInfo.innerHTML = '<p>Born: December 6, 1921. Piero Piccioni was an Italian film score composer and lawyer. A pianist, organist, conductor, composer, he was also the prolific author of more than 300 film soundtracks. He played for the first time on radio in 1938 with his “013” Big Band, to return on air only after the liberation of Italy in 1944.</p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndpieroObj.play();
        break;
      case 'ebo':
        zDisplayObj.src = 'images/ebo(p2).png';
        zTitleObj.innerHTML = 'Ebo Taylor';
        zDateRangeObj.innerHTML = '22-December to 19-January';
        zMoreInfo.innerHTML = '<p>Born: January 6, 1936. Ebo Taylor is a Ghanaian guitarist, composer, bandleader, record producer and arranger focusing on highlife and afrobeat music.</p>';
        modal.hidden = !modal.hidden;
        stopAllAudio();
        sndeboObj.play();
        break;
        case 'help':
      zDisplayObj.src = 'images/help.png';
      zTitleObj.innerHTML= 'Help!';
      zDateRangeObj.innerHTML= '<p>Use the Calendar to pick your birthday day and find out which musician you share a date range with!</p>';
      zMoreInfoObj.innerHTML= '';
      modal.hidden = !modal.hidden;
      break;
    default: 
    }
  
  }
  function stopAllAudio(){
    sndeboObj.pause();
    sndeboObj.currentTime = 0;

    sndaobaObj.pause();
    sndaobaObj.currentTime = 0;
    
    sndninaObj.pause();
    ninaObj.currentTime = 0;
    
    sndcosmosObj.pause();
    sndcosmosObj.currentTime = 0;

    sndmacObj.pause();
    sndmacObj.currentTime = 0;

    sndsteveObj.pause();
    sndsteveObj.currentTime = 0;

    sndkaliObj.pause();
    sndkaliObj.currentTime = 0;

    sndkayaObj.pause();
    sndkayaObj.currentTime = 0;

    sndotisObj.pause();
    sndotisObj.currentTime = 0;

    sndbritellObj.pause();
    sndbritellObj.currentTime = 0;

    sndjoniObj.pause();
    sndjoniObj.currentTime = 0;

    sndpieroObj.pause();
    sndpieroObj.currentTime = 0;  
  }
  
  
const modal = document.getElementById('modal');
 
const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
  stopAllAudio();
});
 
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');
  
const userSubmitObj = document.getElementById('userSubmit');
 
userSubmitObj.addEventListener('click', function(){
    console.log('User submit button clicked');
 
    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is' + userBday);
 
    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);
 
    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth)
 
    let AstroSign = "";
    
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "ebo";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "piero";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "joni";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "britell";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "otis";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "kaya";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "kali";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "steve";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "mac";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "cosmos";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "nina";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "aoba";
      }
 
      console.log('AstroSign is: ' + AstroSign);
      userPicked(AstroSign);
});
