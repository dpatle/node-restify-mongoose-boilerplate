# Node React Mongoose Boilerplate
This is boilerplate application setup using stack Node, React and Mongoose.

### Pre-Requisites

* Node.js ( >= 4.x)

### Setting up (Windows)
- Download and install [mongodb](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-4.0.2-signed.msi/download)
- Restart the system
- Create data directory: Example: d:\mongo-data\db
- Run this command to set path: "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="d:\mongo-data\db"
- start the mongo service: run cmd as admin -> net start MongoDB
- To stop mongodb: net stop MongoDB

### Running the app
1. Open Command prompt or Terminal and navigate to root folder of repository
2. Execute the following commands
```javascript
npm install
npm start
```

Open Posman or RestClient to test the app at [http://localhost:80810](http://localhost:8081)
