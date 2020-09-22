import { MESSAGE } from "../constants/actionTypes";
import { POST_EVENT_LABEL, UPDATE_EVENT_LABEL } from "../constants/apiLabelConstants";

export const apiErrorMessage = (requestType, statusCode, errorCode = "") => {
  let text = "";
  
  if ((requestType === POST_EVENT_LABEL || requestType === UPDATE_EVENT_LABEL) && errorCode === "E0002") {
    text = "Tiden för den plan eller det antalet spelare du har valt är redan upptaget.";
  } else if (statusCode === 400) {
    text = "Den information du angav var ej korrekt.";
  } else if (statusCode === 401) {
    text = "Du har inte tillåtelse att genomföra denna förfrågan.";
  } else if (statusCode === 500) {
    text = "Något gick fel när , försök igen senare.";
  }

  return {
    type: MESSAGE,
    payload: {
      messageText: text
    }
  };
};