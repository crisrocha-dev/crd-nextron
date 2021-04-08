#Next and Electron Boilerplate

##Run the application with 

```
npm run start
```
##To compile run

```
npm run build
```
###But first Instal

```
npm install electron-packager -g
```


```json
--app-version VERSION-YOUR-APP
```
and

```json
./DESTINATION-DIRECTORY
```

```json
--plataform-PLATAFORM (window/darwin or linux)
```

```json
--arch_xARCH (x64 or x32)
```
*in*

```json
"build":"electron-packager ./ --plataform-PLATAFORM --arch_xARCH --out ./DESTINATION-DIRECTORY --app-version VERSION-YOUR-APP --overwrite" 
```
*inside of* 

-package.json

```json
"start":"concurrently \"BROWSER=none next dev\" \"wait-on http://localhost:3000 && electron .\"" 
```