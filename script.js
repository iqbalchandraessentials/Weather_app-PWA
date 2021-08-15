function CheckCuaca() {
  // kosongkan cuaca
  $("#cuaca").html("");
  //   isi section cuaca
  $.ajax({
    url: "http://api.weatherstack.com/current",
    type: "get",
    dataType: "json",
    data: {
      access_key: "aa8322137afd2ba9d96a85501940c387",
      //   query: "jakarta",
      query: $("#location").val(),
    },
    success: function (res) {
      console.log(res);
      const location = res.location;
      const kondisi = res.current;
      function cekCuaca(param) {
        if (param === "haze") {
          return "img/kabut.png";
        } else if (param === "patchy rain possible") {
          return "img/hujansedang.png";
        } else if (param === "clear/sunny") {
          return "img/cerah.png";
        } else if (param === "partly cloudy") {
          return "img/berawan.png";
        } else if (param === "cloudy") {
          return "img/berawan.png";
        } else if (param === "moderate or heavy rain") {
          return "img/hujan deras.png";
        } else if (param === "patchy rain nearby") {
          return "img/hujansedang.png";
        } else if (param === "patchy light rain in area with thunder") {
          return "img/hujandanpetir.png";
        } else if (param === "torrential rain shower") {
          return "img/hujanderas.png";
        } else {
          return kondisi.weather_icons;
        }
      }
      $("#cuaca").append(
        `<div class="d-flex align-self-center justify-content-center">
    <div class="row">
      <div class="col-12">
        <div class="col-12">
          <div class="row">
            <div class="col"><h1>` +
          kondisi.temperature +
          `&#8451;</h1></div>
            <div class="col">
              <img src="` +
          cekCuaca(kondisi.weather_descriptions[0].toLowerCase()) +
          `" alt="cerah" srcset="" />
            </div>
          </div>
          <h4 class="text-center">` +
          kondisi.observation_time +
          `</h4>
          <h3 class="text-center">` +
          kondisi.weather_descriptions[0] +
          `</h3>
          <p class="text-center">` +
          location.name +
          ` , ` +
          location.region +
          `, ` +
          location.country +
          `</p>
        <p class="text-center">
        ` +
          location.timezone_id +
          ` 
        </p>
        </div>
        </div>
    </div>
  </div>`
      );
    },
  });
}
$("#location").on("change", function () {
  CheckCuaca();
});

CheckCuaca();

// $(window).load(function () {
//   CheckCuaca();
// });
