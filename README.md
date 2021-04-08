<h1>Next and Electron Boilerplate</h1>

<h2>Run the application with</h2>

```
npm run start
```
<h2>To compile run</h2>

```
npm run build
```
<h2>But first Instal</h2>

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