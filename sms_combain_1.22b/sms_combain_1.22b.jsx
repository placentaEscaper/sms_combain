
//UI
var currentVersion = "sms_combain_1.22b"
var mainWindow = new Window("palette", currentVersion, undefined);
mainWindow.orientation = "column";

//infoButton
var infoButtonGroup = mainWindow.add("group", undefined, "infoButtongroup");
infoButtonGroup.orientation = "row";
var infoButton = infoButtonGroup.add("button", undefined, "?");
infoButton.size = [25, 25];
infoButton.onClick = function() {
    aboutWindow.show();
    }

   
// about window UI
var aboutWindow = new Window("palette", currentVersion, undefined, {closeButton: false});
aboutWindow.orientation = "column";

var aboutOne = aboutWindow.add("group", undefined, "aboutOne");
aboutOne.orientation = "row";
var FirstText = aboutOne.add("statictext", undefined, "Сварено с любовью, на пару");

var aboutTwo = aboutWindow.add("group", undefined, "aboutTwo");
aboutTwo.orientation = "row";

var SecondText = aboutTwo.add("statictext", undefined, "Актуальная версия:");
var SecondTextUrl = aboutTwo.add("edittext", undefined, "https://bit.ly/3aFjCSX");

var aboutThree = aboutWindow.add("group", undefined, "aboutThree");
aboutThree.orientation = "row";
var closeButton = aboutThree.add("button", undefined, "Close");
closeButton.onClick = function(){
    aboutWindow.hide();
}

//Stroy checkbox
var storyCheckboxGroup = mainWindow.add("group", undefined, "storyCheckboxGroup");
storyCheckboxGroup.orientation = "row";
//var StoryText = StoryCheckboxGroup.add("statictext", undefined, "Add story");
var storyCheckbox = storyCheckboxGroup.add("checkbox", undefined, "Add story");
storyCheckbox.value = false;



//time to start UI
var g_timeToStart = mainWindow.add("group", undefined, "g_timeToStart");
g_timeToStart.orientation = "row";
g_timeToStart.add("statictext", undefined, "ToStart:");
var speedSlider_1 = g_timeToStart.add("slider", undefined, "");
speedSlider_1.value = 2; // default value
speedSlider_1.minvalue = 0;
speedSlider_1.maxvalue = 6;
var speedSliderText_1 = g_timeToStart.add("edittext", undefined, 2);// default value
speedSliderText_1.size = [30, 25];
speedSlider_1.onChange = function() {
    speedSliderText_1.text = Math.round(speedSlider_1.value * 10 )/10;
}
speedSliderText_1.onChange = function() {
    speedSlider_1.value = Math.round(parseFloat(speedSliderText_1.text) * 10 )/10;
}

//time before tap UI
var g_timeBeforeTap = mainWindow.add("group", undefined, "g_timeBeforeTap");
g_timeBeforeTap.orientation = "row";
g_timeBeforeTap.add("statictext", undefined, "BeforeTap:");
var speedSlider_2 = g_timeBeforeTap.add("slider", undefined, "");
speedSlider_2.value = 1.5; // default value
speedSlider_2.minvalue = 0;
speedSlider_2.maxvalue = 6;
var speedSliderText_2 = g_timeBeforeTap.add("edittext", undefined, 1.5);// default value
speedSliderText_2.size = [30, 25];
speedSlider_2.onChange = function() {
    speedSliderText_2.text = Math.round(speedSlider_2.value * 10 )/10;
}
speedSliderText_2.onChange = function() {
    speedSlider_2.value = Math.round(parseFloat(speedSliderText_2.text) * 10 )/10;
}

//time afrter tap UI
var g_timeAfterTap = mainWindow.add("group", undefined, "g_timeAfterTap");
g_timeAfterTap.orientation = "row";
g_timeAfterTap.add("statictext", undefined, "AfterTap:");
var speedSlider_3 = g_timeAfterTap.add("slider", undefined, "");
speedSlider_3.value = 1.5; // default value
speedSlider_3.minvalue = 0;
speedSlider_3.maxvalue = 6;
var speedSliderText_3 = g_timeAfterTap.add("edittext", undefined, 1.5);// default value
speedSliderText_3.size = [30, 25];
speedSlider_3.onChange = function() {
    speedSliderText_3.text = Math.round(speedSlider_3.value * 10 )/10;
}
speedSliderText_3.onChange = function() {
    speedSlider_3.value = Math.round(parseFloat(speedSliderText_3.text) * 10 )/10;
}

//time to translate top message tap UI
var g_timeToTranslateTopMessage = mainWindow.add("group", undefined, "g_timeToTranslateTopMessage");
g_timeToTranslateTopMessage.orientation = "row";
g_timeToTranslateTopMessage.add("statictext", undefined, "TranslateTopSms:");
var speedSlider_4 = g_timeToTranslateTopMessage.add("slider", undefined, "");
speedSlider_4.value = 2; // default value
speedSlider_4.minvalue = 0;
speedSlider_4.maxvalue = 6;
var speedSliderText_4 = g_timeToTranslateTopMessage.add("edittext", undefined, 2);// default value
speedSliderText_4.size = [30, 25];
speedSlider_4.onChange = function() {
    speedSliderText_4.text = Math.round(speedSlider_4.value * 10 )/10;
}
speedSliderText_4.onChange = function() {
    speedSlider_4.value = Math.round(parseFloat(speedSliderText_4.text) * 10 )/10;
}

//time before typing
var g_timeBeforeTyping = mainWindow.add("group", undefined, "g_timeBeforeTyping");
g_timeBeforeTyping.orientation = "row";
g_timeBeforeTyping.add("statictext", undefined, "BeforeTyping:");
var speedSlider_5 = g_timeBeforeTyping.add("slider", undefined, "");
speedSlider_5.value = 2; // default value
speedSlider_5.minvalue = 0;
speedSlider_5.maxvalue = 6;
var speedSliderText_5 = g_timeBeforeTyping.add("edittext", undefined, 2);// default value
speedSliderText_5.size = [30, 25];
speedSlider_5.onChange = function() {
    speedSliderText_5.text = Math.round(speedSlider_5.value * 10 )/10;
}
speedSliderText_5.onChange = function() {
    speedSlider_5.value = Math.round(parseFloat(speedSliderText_5.text) * 10 )/10;
}

//time for typing
var g_timeForTyping = mainWindow.add("group", undefined, "g_timeForTyping");
g_timeForTyping.orientation = "row";
g_timeForTyping.add("statictext", undefined, "Typing:");
var speedSlider_6 = g_timeForTyping.add("slider", undefined, "");
speedSlider_6.value = 4; // default value
speedSlider_6.minvalue = 0;
speedSlider_6.maxvalue = 25;
var speedSliderText_6 = g_timeForTyping.add("edittext", undefined, 4);// default value
speedSliderText_6.size = [30, 25];
speedSlider_6.onChange = function() {
    speedSliderText_6.text = Math.round(speedSlider_6.value * 10 )/10;
}
speedSliderText_6.onChange = function() {
    speedSlider_6.value = Math.round(parseFloat(speedSliderText_6.text) * 10 )/10;
}

//time for translating type
var g_timeForTranslatingType = mainWindow.add("group", undefined, "g_timeForTranslatingType");
g_timeForTranslatingType.orientation = "row";
g_timeForTranslatingType.add("statictext", undefined, "TranslateType:");
var speedSlider_7 = g_timeForTranslatingType.add("slider", undefined, "");
speedSlider_7.value = 2; // default value
speedSlider_7.minvalue = 0;
speedSlider_7.maxvalue = 6;
var speedSliderText_7 = g_timeForTranslatingType.add("edittext", undefined, 2);// default value
speedSliderText_7.size = [30, 25];
speedSlider_7.onChange = function() {
    speedSliderText_7.text = Math.round(speedSlider_7.value * 10 )/10;
}
speedSliderText_7.onChange = function() {
    speedSlider_7.value = Math.round(parseFloat(speedSliderText_7.text) * 10 )/10;
}

//time before sending 
var g_timeBeforeSending = mainWindow.add("group", undefined, "g_timeBeforeSending");
g_timeBeforeSending.orientation = "row";
g_timeBeforeSending.add("statictext", undefined, "BeforeSending:");
var speedSlider_8 = g_timeBeforeSending.add("slider", undefined, "");
speedSlider_8.value = 1.5; // default value
speedSlider_8.minvalue = 0;
speedSlider_8.maxvalue = 6;
var speedSliderText_8 = g_timeBeforeSending.add("edittext", undefined, 1.5);// default value
speedSliderText_8.size = [30, 25];
speedSlider_8.onChange = function() {
    speedSliderText_8.text = Math.round(speedSlider_8.value * 10 )/10;
}
speedSliderText_8.onChange = function() {
    speedSlider_8.value = Math.round(parseFloat(speedSliderText_8.text) * 10 )/10;
}

//buttons ui
var g_buttons = mainWindow.add("group", undefined, "g_buttons");
var reset_button = g_buttons.add("button", undefined, "Reset");
var run_button = g_buttons.add("button", undefined, "Run!");


mainWindow.show();

//basic variables
var selectedComp = app.project.activeItem;
if (selectedComp.name !== 'main'){
    mainWindow.close();
    throw new Error("Select 'main' composition!");
}
var frameToSec = 1/30;
var translateButton = selectedComp.layers.byName("translate_button");
var smsTopComp = selectedComp.layers.byName("sms_top");
var smsTopCompPos = smsTopComp.property("ADBE Transform Group").property("Position");
var smsBottomComp = selectedComp.layers.byName("sms_bottom");
var smsBottomCompPos = smsBottomComp.property("ADBE Transform Group").property("Position");
var timeToSwitch = 2*frameToSec; // for example time to switch opacity of translate button from 58 to 100
//markers
var timeToStartMarker = new MarkerValue("ToStart");
var timeBeforeTapMarker = new MarkerValue("BeforeTap");
var timeAfterTapMarker = new MarkerValue("AfterTap");
var timeTranslateTopSmsMarker = new MarkerValue("TranslateTopSms");
var timeBeforeTypingMarker = new MarkerValue("BeforeTyping");
var timeTypingMarker = new MarkerValue("Typing");
var timeTranslateTypeMarker = new MarkerValue("TranslateType");
var timeBeforeSendingMarker = new MarkerValue("BeforeSending");

//functios
function changeSmsPos() {
    if (smsTopMessageBox.property("ADBE Root Vectors Group").property(5).property(2).property(1).property(2).value[1] > 120.4) {
        smsTopCompPos.setValueAtKey(1, [330, 919]);
        smsTopCompPos.setValueAtKey(2, [330, 706]);
        smsBottomCompPos.setValueAtKey(1, [429, 976]);
        smsBottomCompPos.setValueAtKey(2, [429, 756]); 
    } else {
        smsTopCompPos.setValueAtKey(1, [330, 919]);
        smsTopCompPos.setValueAtKey(2, [330, 753]);
        smsBottomCompPos.setValueAtKey(1, [429, 976]);
        smsBottomCompPos.setValueAtKey(2, [429, 756]); 
    };
};

//var smsTop = selectedComp.layers.byName('sms_top').source;
var smsTop;
for (var i=1; i < app.project.items.length; i++){ // select sms_top composition
    if (app.project.item(i).name == "sms_top"){
        smsTop = app.project.item(i);
    };
};
var smsTopMessage = smsTop.layers.byName('message_text_top');
var smsTopMessageBox = smsTop.layers.byName('message_box_top');
var sourceTopMessage = smsTopMessage.text.sourceText.value;
var smsBottom;
for (var i=1; i < app.project.items.length; i++){ // select sms_top composition
    if (app.project.item(i).name == "sms_bottom"){
        smsBottom = app.project.item(i);
    };
};
var smsBottomMessage = smsBottom.layers.byName('message_text_bottom');
var sourceBottomMessage = smsBottomMessage.text.sourceText.value;

//Story layers
var storyLayer = app.project.activeItem.layers.byName('top_messages');
var storyMaskLayer = app.project.activeItem.layers.byName('top_messages_mask');


storyCheckbox.onClick = function(){
    switch (storyCheckbox.value) {
        case true :
            storyCheckbox.value = true;
            //turn on story layers
            storyLayer.enabled = true;
            storyLayer.shy = false;
            storyMaskLayer.shy = false;
            //sms changing position
            changeSmsPos()
            break;
        case false :
            storyCheckbox.value = false;
            //turn off story layers
            storyLayer.enabled = false;
            storyLayer.shy = true;
            storyMaskLayer.shy = true;
            //sms changing position
            smsTopCompPos.setValueAtKey(1, [-41, 410]);
            smsTopCompPos.setValueAtKey(2, [330, 410]);
            smsBottomCompPos.setValueAtKey(1, [611, 639]);
            smsBottomCompPos.setValueAtKey(2, [429, 639]); 
            break;
    };

};


//workflow
run_button.onClick = function() {

app.beginUndoGroup("Sms combain work");
function timeToRead(sourceText) {
   var ReadTime = sourceText.text.length/20;
    return ReadTime;
  
};
//timings
var timeToStart = speedSlider_1.value;
var timeBeforeTap = speedSlider_2.value; //time before tap on the top message
var timeAfterTap = speedSlider_3.value; //alter 2
var timeTranslateTopMessage = speedSlider_4.value; //time of displaying language list //43*frameToSec;
var timeBeforeType = speedSlider_5.value; //alter 1.2
var timeForTyping = speedSlider_6.value; //alter 3
var timeTranslateType = speedSlider_7.value; //how long language list is displayed after opening
var timeBeforeSending = speedSlider_8.value;


//create markers

// remove existing markers
for (var n=1; n = selectedComp.markerProperty.numKeys; n++){
    selectedComp.markerProperty.removeKey(n);
}

timeToStartMarker.duration = timeToStart;
selectedComp.markerProperty.setValueAtTime(0, timeToStartMarker);

timeBeforeTapMarker.duration = timeBeforeTap;
selectedComp.markerProperty.setValueAtTime(timeToStart, timeBeforeTapMarker);

timeAfterTapMarker.duration = timeAfterTap;
selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap, timeAfterTapMarker);
//
timeTranslateTopSmsMarker.duration = timeTranslateTopMessage+0.4;
selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap, timeTranslateTopSmsMarker);

timeBeforeTypingMarker.duration = timeBeforeType-0.4+0.13;
selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeTranslateTopSmsMarker.duration, timeBeforeTypingMarker);

timeTypingMarker.duration = timeForTyping+0.07;
selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeTranslateTopSmsMarker.duration+timeBeforeTypingMarker.duration, timeTypingMarker);

timeTranslateTypeMarker.duration = timeTranslateType+0.33;
selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeTranslateTopSmsMarker.duration+timeBeforeTypingMarker.duration+timeTypingMarker.duration, timeTranslateTypeMarker);

timeBeforeSendingMarker.duration = timeBeforeSending-0.33;
selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeTranslateTopSmsMarker.duration+timeBeforeTypingMarker.duration+timeTypingMarker.duration+timeTranslateTypeMarker.duration, timeBeforeSendingMarker);
//timeTypingMarker.duration = timeBeforeType;
//selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeBeforeType, timeTypingMarker);


var timeAfterClick = 0.2; //time after activating glimpse 

//alert(sourceTopText.text.length);

//translate button opacity timings
var translateButtonOpacity = translateButton.property("ADBE Transform Group").property("ADBE Opacity");
for (var n=1; n = translateButtonOpacity.numKeys; n++){
    translateButtonOpacity.removeKey(n);
} //delete existing keyframes
translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap,58);
translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch,100);
translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap,100);
translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch,58);
translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType,58);
translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch,100);
translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping,100);
translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeToSwitch,58);

//top message timings
smsTopComp.startTime = timeToStart;
smsTopMessage.startTime = timeBeforeTap+timeToSwitch+timeAfterTap+timeTranslateTopMessage;
smsTopMessageBox.startTime = timeBeforeTap+timeToSwitch+timeAfterTap+timeTranslateTopMessage;

//stroke of top message box timings
var timeToShine = 56*frameToSec; //time during which outline glows
var timeToFade = 6*frameToSec;
var smsTopBox = smsTop.layers.byName('box_stroke_control');
var outLineStroke = smsTopBox.property("ADBE Transform Group").property("ADBE Opacity");
var translateButtonOpacity = translateButton.property("ADBE Transform Group").property("ADBE Opacity");
for (var m=1; m = outLineStroke.numKeys; m++){
    outLineStroke.removeKey(m);
} //delete existing keyframes
outLineStroke.setValueAtTime(timeBeforeTap,0);
outLineStroke.setValueAtTime(timeBeforeTap+timeToSwitch,100);
outLineStroke.setValueAtTime(timeBeforeTap+timeToSwitch+timeToShine,100);
outLineStroke.setValueAtTime(timeBeforeTap+timeToSwitch+timeToShine+timeToFade,0);

//language & obscure list timings
var langList1 = selectedComp.layers.byName("lang_list");
var langList2 = selectedComp.layers.byName("lang_list_2");
var obscure1 = selectedComp.layers.byName("screen_obscure");
var obscure2 = selectedComp.layers.byName("screen_obscure_2");
langList1.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap;
langList2.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping;
obscure1.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap;
obscure2.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping;

//translated text timings
var translatedText = selectedComp.layers.byName("translated_text");
var translatedTextComp;
for (var i=1; i < app.project.items.length; i++){ // select sms_top composition
    if (app.project.item(i).name == "translated_text"){
        translatedTextComp = app.project.item(i);
    };
};
//send button glimpse timings
var buttonGlimpse = selectedComp.layers.byName("send_button_glimpse");
//buttonGlimpse.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeToRead(sourceBottomMessage)+timeToRead(sourceBottomMessage);
buttonGlimpse.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeBeforeSending;
//bottom sms timings
var translatedTextText = translatedTextComp.layers.byName('translation_text');
translatedText.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeToRead(sourceBottomMessage);
//translatedTextText.outPoint = timeToRead(sourceBottomMessage)+timeAfterClick-0.1;
translatedTextText.outPoint = buttonGlimpse.startTime - translatedText.startTime+0.1;
var bottomSms = selectedComp.layers.byName("sms_bottom");
//bottomSms.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeToRead(sourceBottomMessage)+timeToRead(sourceBottomMessage)+timeAfterClick;
bottomSms.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeBeforeSending+timeAfterClick;
app.endUndoGroup();
};


//reset button




reset_button.onClick = function() {

    app.beginUndoGroup("Sms combain reset");
    
     //reset UI sliders to default values
    speedSlider_1.value = 2;
    speedSliderText_1.text = speedSlider_1.value;
    speedSlider_2.value = 1.5;
    speedSliderText_2.text = speedSlider_2.value;
    speedSlider_3.value = 1.5;
    speedSliderText_3.text = speedSlider_3.value;
    speedSlider_4.value = 2;
    speedSliderText_4.text = speedSlider_4.value;
    speedSlider_5.value = 2;
    speedSliderText_5.text = speedSlider_5.value;
    speedSlider_6.value = 4;
    speedSliderText_6.text = speedSlider_6.value;
    speedSlider_7.value = 2;
    speedSliderText_7.text = speedSlider_7.value;
    speedSlider_8.value = 1.5;
    speedSliderText_8.text = speedSlider_8.value;

    function timeToRead(sourceText) {
       var ReadTime = sourceText.text.length/20;
        return ReadTime;
      
    };
    //timings
    var timeToStart = 2; 
    var timeBeforeTap = 1.5; //time before tap on the top message
    var timeAfterTap = 1.5; //alter 2
    var timeTranslateTopMessage = 2; //time of displaying language list
    var timeBeforeType = 2; //alter 1.2
    var timeForTyping = 4; //alter 3
    var timeTranslateType = 2; //alter 3
    var timeBeforeSending = 1.5;
    var timeAfterClick = 0.2; //time after activating glimpse 
    //var timeToReadTranslateTopMessage = timeBeforeType + timeToRead(sourceTopMessage); //alter without 0.5


    //reset markers' values
    for (var n=1; n = selectedComp.markerProperty.numKeys; n++){
        selectedComp.markerProperty.removeKey(n);
    }

    timeToStartMarker.duration = timeToStart;
    selectedComp.markerProperty.setValueAtTime(0, timeToStartMarker);

    timeBeforeTapMarker.duration = timeBeforeTap;
    selectedComp.markerProperty.setValueAtTime(timeToStart, timeBeforeTapMarker);

    timeAfterTapMarker.duration = timeAfterTap;
    selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap, timeAfterTapMarker);
//
    timeTranslateTopSmsMarker.duration = timeTranslateTopMessage+0.4;
    selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap, timeTranslateTopSmsMarker);

    timeBeforeTypingMarker.duration = timeBeforeType-0.4+0.13;
    selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeTranslateTopSmsMarker.duration, timeBeforeTypingMarker);

    timeTypingMarker.duration = timeForTyping+0.07;
    selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeTranslateTopSmsMarker.duration+timeBeforeTypingMarker.duration, timeTypingMarker);

    timeTranslateTypeMarker.duration = timeTranslateType+0.33;
    selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeTranslateTopSmsMarker.duration+timeBeforeTypingMarker.duration+timeTypingMarker.duration, timeTranslateTypeMarker);

    timeBeforeSendingMarker.duration = timeBeforeSending-0.33;
    selectedComp.markerProperty.setValueAtTime(timeToStart+timeBeforeTap+timeAfterTap+timeTranslateTopSmsMarker.duration+timeBeforeTypingMarker.duration+timeTypingMarker.duration+timeTranslateTypeMarker.duration, timeBeforeSendingMarker);



   
    
    //translate button opacity timings
    var translateButtonOpacity = translateButton.property("ADBE Transform Group").property("ADBE Opacity");
    for (var n=1; n = translateButtonOpacity.numKeys; n++){
        translateButtonOpacity.removeKey(n);
    } //delete existing keyframes
    translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap,58);
    translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch,100);
    translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap,100);
    translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch,58);
    translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType,58);
    translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch,100);
    translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping,100);
    translateButtonOpacity.setValueAtTime(timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeToSwitch,58);
    
    //top message timings
    smsTopComp.startTime = timeToStart;
    smsTopMessage.startTime = timeBeforeTap+timeToSwitch+timeAfterTap+timeTranslateTopMessage;
    smsTopMessageBox.startTime = timeBeforeTap+timeToSwitch+timeAfterTap+timeTranslateTopMessage;
    
    //stroke of top message box timings
    var timeToShine = 56*frameToSec; //time during which outline glows
    var timeToFade = 6*frameToSec;
    var smsTopBox = smsTop.layers.byName('box_stroke_control');
    var outLineStroke = smsTopBox.property("ADBE Transform Group").property("ADBE Opacity");
    for (var m=1; m = outLineStroke.numKeys; m++){
        outLineStroke.removeKey(m);
    } //delete existing keyframes
    outLineStroke.setValueAtTime(timeBeforeTap,0);
    outLineStroke.setValueAtTime(timeBeforeTap+timeToSwitch,100);
    outLineStroke.setValueAtTime(timeBeforeTap+timeToSwitch+timeToShine,100);
    outLineStroke.setValueAtTime(timeBeforeTap+timeToSwitch+timeToShine+timeToFade,0);
    
    //language & obscure list timings
    var langList1 = selectedComp.layers.byName("lang_list");
    var langList2 = selectedComp.layers.byName("lang_list_2");
    var obscure1 = selectedComp.layers.byName("screen_obscure");
    var obscure2 = selectedComp.layers.byName("screen_obscure_2");
    langList1.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap;
    langList2.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping;
    obscure1.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap;
    obscure2.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping;
    
    //send button glimpse timings
    var buttonGlimpse = selectedComp.layers.byName("send_button_glimpse");
    //buttonGlimpse.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeToRead(sourceBottomMessage)+timeToRead(sourceBottomMessage);
    buttonGlimpse.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeBeforeSending;
    

    //translated text timings
    var translatedText = selectedComp.layers.byName("translated_text");
    var translatedTextComp;
    for (var i=1; i < app.project.items.length; i++){ // select sms_top composition
        if (app.project.item(i).name == "translated_text"){
            translatedTextComp = app.project.item(i);
        };
    };
    var translatedTextText = translatedTextComp.layers.byName('translation_text');
    translatedText.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeToRead(sourceBottomMessage);
    //translatedTextText.outPoint = timeToRead(sourceBottomMessage)+timeAfterClick-0.1;
    translatedTextText.outPoint = buttonGlimpse.startTime - translatedText.startTime+0.1;


    //bottom sms timings
    var bottomSms = selectedComp.layers.byName("sms_bottom");
    //bottomSms.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeToRead(sourceBottomMessage)+timeToRead(sourceBottomMessage)+timeAfterClick;
    bottomSms.startTime = timeToStart+timeBeforeTap+timeToSwitch+timeAfterTap+timeToSwitch+timeTranslateTopMessage+timeBeforeType+timeToSwitch+timeForTyping+timeTranslateType+timeBeforeSending+timeAfterClick;
    app.endUndoGroup();
    };







