# emdict

This is English-Myanmar dictionary using ornagai database.Project structure inspired from ['Bulletproof node.js project architecture'](https://softwareontheroad.com/ideal-nodejs-project-structure?utm_source=github&utm_medium=readme)

## Development

`node` version `v18.7.0`

use nvm to install node 

```
nvm install 18.7.0

```
```
nvm use 18.7.0

```
First you need to install dependicies

```
npm i

```
Change sample.env to .env 

```
mv .env.sample .env

```
And then you can start server with 

```
npm run start
```
or for development

```
npm run dev
```
## Api Documentation

You can get definition of given word using

```
http://<host>:<port>/search?w=<word>
```