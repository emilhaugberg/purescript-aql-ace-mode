module Main where

import Ace as Ace
import Ace.Editor
import Ace.EditSession
import Prelude
import Effect (Effect)
import Effect.Console (log)

main :: Effect Unit
main = void $ do
  editor  <- Ace.edit "editor" Ace.ace
  _       <- setTheme "ace/theme/chrome" editor
  session <- getSession editor

  setMode "ace/mode/javascript" session
