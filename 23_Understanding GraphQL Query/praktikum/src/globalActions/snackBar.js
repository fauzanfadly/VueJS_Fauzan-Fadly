import EventBus, { ACTIONS } from "../EventBus/index";

export const showSnackbar = (dataMessage, dataColor) => {
  EventBus.$emit(ACTIONS.SNACKBAR, {
    message: dataMessage,
    color: dataColor
  });
};
