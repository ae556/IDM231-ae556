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
        zDisplayObj.src = 'images/aoba';
        zTitleObj.innerHTML = 'Ichiko Aoba';
        zDateRangeObj.innerHTML = '20-January to 18-February';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'nina':
        zDisplayObj.src = 'images/nina.png';
        zTitleObj.innerHTML = 'Nina Simone';
        zDateRangeObj.innerHTML = '19-February to 20-March';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'cosmos':
        zDisplayObj.src = 'images/cosmos.png';
        zTitleObj.innerHTML = 'Frankie Cosmos';
        zDateRangeObj.innerHTML = '21-March to 19-April';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'mac':
        zDisplayObj.src = 'images/mac.png';
        zTitleObj.innerHTML = 'Mac DeMarco';
        zDateRangeObj.innerHTML = '20-April to 20-May';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'steve':
        zDisplayObj.src = 'images/steve.png';
        zTitleObj.innerHTML = 'Steve Lacy';
        zDateRangeObj.innerHTML = '21-May to 21-June';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'kali':
        zDisplayObj.src = 'images/kali.png';
        zTitleObj.innerHTML = 'Kali Uchis';
        zDateRangeObj.innerHTML = '22-June to 22-July';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'kaya':
        zDisplayObj.src = 'images/kaya.png';
        zTitleObj.innerHTML = 'Okay Kaya';
        zDateRangeObj.innerHTML = '23-July to 22-August';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'otis':
        zDisplayObj.src = 'images/otis.png';
        zTitleObj.innerHTML = 'Otis Redding';
        zDateRangeObj.innerHTML = '23-August to 22-September';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'britell':
        zDisplayObj.src = 'images/britell.png';
        zTitleObj.innerHTML = 'Nicholas Britell';
        zDateRangeObj.innerHTML = '23-September to 23-October';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'joni':
        zDisplayObj.src = 'images/joni.png';
        zTitleObj.innerHTML = 'Joni Mitchell';
        zDateRangeObj.innerHTML = '24-October to 21-November';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'piero':
        zDisplayObj.src = 'images/piero.png';
        zTitleObj.innerHTML = 'Piero Piccioni';
        zDateRangeObj.innerHTML = '22-November to 21-December';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
      case 'ebo':
        zDisplayObj.src = 'images/ebo.png';
        zTitleObj.innerHTML = 'Ebo Taylor';
        zDateRangeObj.innerHTML = '22-December to 19-January';
        zMoreInfo.innerHTML = '<p>pls put filler here</p>';
        modal.hidden = !modal.hidden;
        break;
    default: 
    }
  }
  
const modal = document.getElementById('modal');
 
const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
});
 
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreINfoObj = document.getElementById('zMoreInfo');
  
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
        AstroSign = "aoba";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "nina";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "cosmos";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "mac";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "steve";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "kali";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "kaya";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "otis";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "britell";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "joni";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "piero";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "ebo";
      }
 
      console.log('AstroSign is: ' + AstroSign);
      userPicked(AstroSign);
});
