//The source code for the bot 

//Get the users draft folder 
var userDraft = GmailApp.getDrafts;

//Get the first draft message in the draft folder
var draft = GmailApp.getDrafts()[0]; 

//Get the ID of the first draft 
var draftId = draft.getId();

//Gets the users draft id
var draftById = GmailApp.getDraft(draftId);

//Send it 
var msg = draft.send();

//Log the date when the bot sent the draft 
Logger.log(msg.getDate);

//I have no clue what this does send help
Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());

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

//What happens if the bot sent the draft to the receving user
function send() {
  if (draftById == true) {
   Logger.Log('We have the draft ID!');
  }

  if (userDraft == true) {
      send(draft);
  }
}
