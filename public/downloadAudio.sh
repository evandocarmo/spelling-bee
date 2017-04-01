#!/bin/bash
array=("ball" "pencil" "eraser" "sharpener" "pen" "notebook" "book")
for i in "${array[@]}"
do
    wget "https://ssl.gstatic.com/dictionary/static/sounds/de/0/$i.mp3"
done