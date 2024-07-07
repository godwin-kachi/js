function calculate(){
    let radius = document.getElementById('radius').value;
    let area = document.getElementById('volume');
    let volume = Math.PI * Math.pow(radius, 2)
    area.value = volume.toFixed(2)
}

