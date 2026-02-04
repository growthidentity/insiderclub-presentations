function doGet(e) {
  var p = e.parameter;
  var API_KEY = "eo_69cf43bdd4ee7270d50775a4476ec8c1f4615ee4dda8f230c23bf8eb1dc26965";
  var LISTS = {
    event: "c556a060-0045-11f1-8b1e-cb78ec5f1248",
    forex: "3de4bcc4-01db-11f1-8016-832fcebf2dcf"
  };
  var LIST_ID = LISTS[p.source] || LISTS.event;
  var props = PropertiesService.getScriptProperties();

  // RESET MODE: zero out extra seats counter
  if (p.action === "reset") {
    var val = p.value || "0";
    props.setProperty("extraSeats", val);
    return ContentService.createTextOutput(JSON.stringify({ok:true, extraSeats:parseInt(val)})).setMimeType(ContentService.MimeType.JSON);
  }

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
  var extra = [];
  if (seats > 1) extra.push(seats + " kohta");
  if (p.referrer) extra.push("kutsuja: " + p.referrer);
  if (extra.length > 0) {
    nameForEmail = p.name + " (" + extra.join(", ") + ")";
  }

  var fields = { FirstName: nameForEmail };
  if (p.referrer) fields.LastName = p.referrer;

  var body = {
    api_key: API_KEY,
    email_address: p.email,
    fields: fields
  };

  // Support tags (e.g. ?tag=Forex)
  if (p.tag) {
    body.tags = [p.tag];
  }

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(body),
    muteHttpExceptions: true
  };
  UrlFetchApp.fetch("https://emailoctopus.com/api/1.6/lists/" + LIST_ID + "/contacts", options);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
