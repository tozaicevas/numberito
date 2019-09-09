const SCREEN_HOME = 'Home';
const SCREEN_PLAY = 'Play';
const SCREEN_TUTORIAL = 'Tutorial';
const SCREEN_HISTORY = 'History';
const SCREEN_MIDDLE_BUTTON = SCREEN_PLAY;

enum InputState {
  INVALID,
  VALID,
  PROVIDED_ANSWER,
  CORRECT_ANSWER,
}

export {
  SCREEN_HOME,
  SCREEN_PLAY,
  SCREEN_TUTORIAL,
  SCREEN_HISTORY,
  SCREEN_MIDDLE_BUTTON,
  InputState,
};
