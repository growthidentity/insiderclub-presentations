function doGet(e) {
  var p = e.parameter;
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      api_key: "eo_69cf43bdd4ee7270d50775a4476ec8c1f4615ee4dda8f230c23bf8eb1dc26965",
      email_address: p.email,
      fields: { FirstName: p.name }
    }),
    muteHttpExceptions: true
  };
  UrlFetchApp.fetch("https://emailoctopus.com/api/1.6/lists/c556a060-0045-11f1-8b1e-cb78ec5f1248/contacts", options);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
