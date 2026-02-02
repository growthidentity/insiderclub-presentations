// ============================================
// PASTE THIS CODE INTO GOOGLE APPS SCRIPT
// ============================================
//
// Steps:
// 1. Go to https://script.google.com
// 2. Click "New Project"
// 3. Delete the default code and paste ALL of this
// 4. Click "Deploy" > "New deployment"
// 5. Type = "Web app"
// 6. Execute as: "Me"
// 7. Who has access: "Anyone"
// 8. Click "Deploy" and copy the URL
// 9. Give the URL to me — I'll plug it into the event page
//

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  var params = e.parameter;

  var apiKey = params.api_key;
  var listId = params.list_id;
  var email = params.email;
  var name = params.name || '';

  if (!email || !listId || !apiKey) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: 'Missing parameters' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var payload = {
    api_key: apiKey,
    email_address: email,
    fields: {
      FirstName: name
    }
  };

  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(
    'https://emailoctopus.com/api/1.6/lists/' + listId + '/contacts',
    options
  );

  var result = JSON.parse(response.getContentText());

  return ContentService.createTextOutput(
    JSON.stringify({ success: true, data: result })
  ).setMimeType(ContentService.MimeType.JSON);
}
