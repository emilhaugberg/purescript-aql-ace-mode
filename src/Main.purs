module Main where

import Ace.EditSession
import Ace.Editor
import Prelude

import Ace as Ace
import Effect (Effect)
import Effect.Console (log)

main :: Effect Unit
main = void $ do
  editor  <- Ace.edit "editor" Ace.ace
  _       <- setTheme "ace/theme/monokai" editor
  session <- getSession editor

  setMode "ace/mode/aql" session
