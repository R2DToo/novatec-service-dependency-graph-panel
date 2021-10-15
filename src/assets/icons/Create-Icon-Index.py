# Makes an array of all png files in current directory
# Then creates a new icon_index.json file for you
import os
import json
from os import listdir
from os.path import isfile, join

myPath = os.path.abspath(os.path.dirname(__file__))

fileList = os.listdir(myPath)
for f in fileList[:]:
  if not(f.endswith(".png")):
    fileList.remove(f)

for i in range(len(fileList)):
  file = fileList[i]
  fileList[i] = file[0:-4]

jsonString = json.dumps(fileList, indent=4, sort_keys=True)
jsonFile = open("icon_index.json", "w")
jsonFile.write(jsonString)
jsonFile.close()

print(fileList)
