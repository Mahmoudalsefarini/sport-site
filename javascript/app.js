
var user = prompt('Whats your name?')

alert('Welcome to your Sport Site');


var sport = prompt('Whats your favourite sport?')

alert('lets Go');

while (sport !== 'snowboarding' && sport !== 'soccer' && sport !== 'japanese sword game')
 {
   sport = prompt('Try again , With snowboarding or soccer or japanese sword game')}


var sportYears = prompt('Since How many years you follow this game?')
var motivationWord = ''
for(var i = 1; i <= sportYears ;i++){
  if(sport ==='snowboarding'){
    motivationWord = motivationWord + '<h2>When you don’t give up, you cannot fail.</h2>'  + ' count = '  + i  + '<img src="https://mahmoudalsefarini.github.io/sport-site/sergey-mikheev-EIniaP1qCRs-unsplash.jpg" width="400px" height="400px">'
   
  }else if(sport ==='soccer'){
    motivationWord = motivationWord + '<h2>You cannot make progress with excuses.</h2>' + 'count = ' + i + '<img src="https://mahmoudalsefarini.github.io/sport-site/md-mahdi-lQpFRPrepQ8-unsplash.jpg" width="400px" height="400px">'
  }
  else if(sport ==='japanese sword game'){
    motivationWord = motivationWord + '<h2>There are no shortcuts—everything is reps, reps, reps.</h2>' + 'count = ' + i + '<img src="https://mahmoudalsefarini.github.io/sport-site/bernd-viefhues-KO3ywBQo5IU-unsplash.jpg" width="400px" height="400px">'
  }}

  document.write(motivationWord)