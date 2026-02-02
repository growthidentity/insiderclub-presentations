function doGet(e) {
  var p = e.parameter;
  var API_KEY = "eo_69cf43bdd4ee7270d50775a4476ec8c1f4615ee4dda8f230c23bf8eb1dc26965";
  var LIST_ID = "c556a060-0045-11f1-8b1e-cb78ec5f1248";
  var props = PropertiesService.getScriptProperties();

  // COUNT MODE: return total seats booked
  if (p.action === "count") {
    var url = "https://emailoctopus.com/api/1.6/lists/" + LIST_ID + "?api_key=" + API_KEY;
    var res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    var data = JSON.parse(res.getContentText());
    var subscribers = 0;
    if (data && data.counts && data.counts.subscribed) {
      subscribers = data.counts.subscribed;
    }
    var extraSeats = parseInt(props.getProperty("extraSeats") || "0");
    var totalSeats = subscribers + extraSeats;
    var callback = p.callback || "updateCounter";
    return ContentService.createTextOutput(callback + "(" + totalSeats + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  // REGISTER MODE: add contact and track seats
  var seats = parseInt(p.seats) || 1;

  // Track extra seats beyond 1 per registration
  if (seats > 1) {
    var extraSeats = parseInt(props.getProperty("extraSeats") || "0");
    props.setProperty("extraSeats", String(extraSeats + (seats - 1)));
  }

  var nameForEmail = p.name;
  if (seats > 1) {
    nameForEmail = p.name + " (" + seats + " kohta)";
  }

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      api_key: API_KEY,
      email_address: p.email,
      fields: { FirstName: nameForEmail }
    }),
    muteHttpExceptions: true
  };
  UrlFetchApp.fetch("https://emailoctopus.com/api/1.6/lists/" + LIST_ID + "/contacts", options);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
