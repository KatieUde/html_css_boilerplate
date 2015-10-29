// hey hey hey

//
window.onload = function() {
  //alert('hey hey hey');
  statusReport('hey HEY HEY!!!!!');


  var dragonName = prompt('What would be your name if you were turned into a dragon?');
  var power = prompt('What would your special power be? (hint: breathe fire)');
  var region = prompt('Do you choose the mountainous region or the marshland?');

  var contentContainer =
  document.getElementById('content');

  contentContainer.innerHTML = 'You have been transported to Vitrolla. Somehow as you were being\
transported into the county, you were transformed into a dragon. Your current \
name no longer fits you, so you pick a new ' + dragonName + '!!  In addition, you \
discover that you have also gained magical abilites. In fact, you are particularly \
skilled at ' + power + '!! As you fly over this new country, where do you want to \
land? You pick the ' + region + '.'

}

function statusReport(message) {
  console.log(message);
  return message;
}
