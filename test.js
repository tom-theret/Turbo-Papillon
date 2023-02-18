// build a popup that show in center of screen for 5 seconds and then close
var popup = document.createElement('div');
popup.style.position = 'absolute';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.width = '250px';
popup.style.height = '100px';
popup.style.marginTop = '-50px';
popup.style.marginLeft = '-125px';
popup.style.backgroundColor = '#12D4A6';
popup.style.color = '#000';
popup.style.textAlign = 'center';
popup.style.fontSize = '20px';
popup.style.fontWeight = 'bold';
popup.style.lineHeight = '100px';
popup.style.borderRadius = '10px';
popup.style.zIndex = 1000;
popup.innerHTML = 'Popup de l\'extension test';

document.body.appendChild(popup);

setTimeout(function() {
    document.body.removeChild(popup);
    }
, 2000);

