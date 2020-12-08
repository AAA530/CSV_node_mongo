﻿# CSV_node_mongo

## Configuration
Now clone this project and then run following commands:

Run this command in folder where project is cloned:
 ```bash
 npm install
 ```
 
To start mongo client run following command in new terminal:
  ```bash
 mongod
 ```
 
Now we have configured all things.
 To start development run:
```bash
node app.js
```

### It will erase all data and create dummy data on server restarting
To remove this just comment out seedDB(); (line 26 in app.js)
