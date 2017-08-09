VERSION=1.6.11

cd .build

# Cleanup
rm app.asar
rm -rf ./builds

#npm install -g yarn asar

cd ../

rm -rf ./node_modules
yarn install --production

rm -rf ./node_modules/electron
rm ./node_modules/.bin/electron

asar pack . ./.build/app.asar --exclude-hidden

cd ./.build/

mkdir electron
cd electron

wget https://github.com/electron/electron/releases/download/v$VERSION/electron-v$VERSION-win32-x64.zip --output-document=win.zip -nc
wget https://github.com/electron/electron/releases/download/v$VERSION/electron-v$VERSION-darwin-x64.zip --output-document=mac.zip -nc
wget https://github.com/electron/electron/releases/download/v$VERSION/electron-v$VERSION-linux-x64.zip --output-document=linux.zip -nc

cd ..

mkdir builds
cd builds

mkdir win
cd win

unzip ../../electron/win.zip

cp ../../app.asar resources/
zip win.zip -r .

cd ..

mkdir mac
cd mac

unzip ../../electron/mac.zip

cp ../../app.asar Electron.app/Contents/Resources/
zip mac.zip -r .

cd ..

mkdir linux
cd linux

unzip ../../electron/linux.zip

cp ../../app.asar resources/
zip linux.zip -r .

cd ../../..

