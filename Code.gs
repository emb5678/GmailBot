//The source code for the bot 

//Create draft
var createDraft = GmailApp.createDraft[1];

//The date for the draft w/timestamp
var now = new Date();

//Get the users draft folder 
var userDraft = GmailApp.getDrafts();

//Get the first draft message in the draft folder
var draft = GmailApp.getDrafts()[0]; 

var drafts = GmailApp.getDrafts();

 //Gets the draft id 
 var draftId = draft.getId();

//Gets the users draft id
var draftById = GmailApp.getDraft(draftId)

  //I have no clue what this does send help
 Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
//Get the inbox threads 
var thread = GmailApp.getInboxThreads();

//Get the first 50 subjects 
var firstThread = GmailApp.getInboxThreads(0, 50);
//WHERE YOU SEMD IT TO
GmailApp.createDraft("", "current time", "The time is: " + now.toString());

//What happens if the bot sends the draft
function send (){
 if (userDraft == true) {
   send(draft);
  } 
}

//Makes a copy of the sent draft that was sent to the selected user
var get = draft.getMessage();

//Send the draft to the selected user (The send function shows what happens)
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

//Code that helps the draftById Variable
function draftById() {
  if (draftById == true) {
    Logger.log('We have the draft ID!');
  }

  if (draftById == false) {
    Logger.Log('We do not have the draft id!');
  }
}
