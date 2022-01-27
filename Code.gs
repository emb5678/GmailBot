//The source code for the bot 

//Get the users draft folder 
var userDraft = GmailApp.getDrafts();

//Get the first draft message in the draft folder
var draft = GmailApp.getDrafts()[0]; 

//Get the ID of the first draft 
var draftId = draft.getId();

//Gets the users draft id
var draftById = GmailApp.getDraft(draftId);

//Get the inbox threads 
var thread = GmailApp.getInboxThreads();

//Get the message
var message = thread.getMessage();

//Get the first 50 subjects 
var firstThread = GmailApp.getInboxThreads(0, 50);

//What happens if the bot sends the draft
function send (){
 if (userDraft == true) {
      send(draft);
  } 
  //Log the date when the bot sent the draft 
   Logger.log(msg.getDate());
  //I have no clue what this does send help
     Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
}

//Send it 
var msg = draft.send();

function subject() {
  //Log subject line
  Logger.log(message.getSubject());
}

//Code that helps the thread variable
function threads () {
    for (var i = 0; i < threads.length; i++) {
       Logger.log(threads[i].getFirstMessageSubject());
    } 
}

//Function that helps the userDraft variable 
function drafts() {
  for (var i = 0; i < drafts.length; i++) {
   Logger.log(drafts[i].getId());
  }
}

//Make the whole enitre sent html work like normal 
function doGet() {
  return HtmlService.createHtmlOutputFromFile("sent");
}

//The function that helps the draftById variable
function draftById() {
  if (draftById == true) {
    Logger.log('We have the draft ID');
  }
}

//haha nice

//Variable forScope help code
 function getInboxUnreadCount () {
    Logger.log("Messages unread in inbox: " + GmailApp.getInboxUnreadCount());
 }
function createDraft () {

  var forScope = GmailApp.getInboxUnreadCount();

  var raw = 'Subject: testing Draft\n' + 
      //'To: test@test.com\n' +
      'Content-Type: multipart/alternative; boundary=1234567890123456789012345678\n' +
      'testing Draft msg\n' + 
      '--1234567890123456789012345678--\n';

   var draftBody = Utilities.base64Decode(raw);

   var params = {method:"post",
                contentType: "application/json",
                headers: {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
                muteHttpExceptions:true,
                payload:JSON.stringify({
                  "message": {
                    "raw": draftBody
                  }
                })
               };
            var resp = UrlFetchApp.fetch("https://www.googleapis.com/gmail/v1/users/me/drafts", params);
  Logger.log(resp.getContentText());      
  /*
   * sample resp: {
   *   "id": "r3322255254535847929",
   *   "message": {
   *     "id": "146d6ec68eb36de8",
   *     "threadId": "146d6ec68eb36de8",
   *     "labelIds": [ "DRAFT" ]
   *   }
   * }
   */
}
