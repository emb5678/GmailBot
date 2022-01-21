//The actual code for the bot

//Get the users draft folder
var userDraft = GmailApp.GetDrafts;

//Get the first message 
var draft = GmailApp.GetDrafts()[0];

//Log the date
Logger.Log(msg.getDate());

//Get the first draft's id
var draftId = draft.getId();

//Send the first draft in the users draft folder
var msg = draft.send();

//Get the users draft id
var draftById = GmailApp.getDraft(draftId);

//Log the draft message, subject and it is equal to the draft message
Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());

//The function that makes the HTML useable without a error
function doGet() {
  return HtmlService.createHtmlOutputFromFile("sent");
}

function send () {
  if (draftById == true) {
   Logger.Log('We have the draft ID!');
  }

  if (userDraft == true) {
      send()
  }
}
