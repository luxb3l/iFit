function updateSliderValue() {
    var slider = document.getElementById('slider');
    var output = document.getElementById('slider-value');
    output.textContent = "Slider Value: " + slider.value;
  }