 import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

function WhatsApp() {
  return (
    <WhatsAppWidget
      phoneNo="918438837873"
      position="right" // Ensures widget appears at bottom right
      widgetWidth="350px"
      widgetWidthMobile="200px"
      autoOpen={false}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available?"
      iconSize="60"
      iconColor="white"
      iconBgColor="green"
      headerIcon="https://img.freepik.com/free-photo/friendly-handsome-man-pointing-fingers-left-advertisement_176420-18849.jpg?uid=R113708060&ga=GA1.1.574525859.1722267109&semt=ais_hybrid&w=740"
      headerTitle="Source One Manager"
      headerCaption="We typically reply in a few minutes"
      chatPersonName="Support"
      chatMessage="Hello! Welcome to SourceOne. How can we help you?"
    />
  );
}

export default WhatsApp;
