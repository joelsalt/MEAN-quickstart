# MEAN Boilerplate
This is a repo to quickly start an app in the future. It comes with configured settings for a server with routes and a database with schema.

### Requirements
- [Node.js](https://nodejs.org/en/)
- [MongoDB v3.4](https://www.mongodb.com/download-center#atlas)
- [Robo3T](https://robomongo.org/)

# Building the App

For a first time build, pull down the code and `cd` to both `/client` and `/server` and run `npm install` (or `npm i`) in each folder.

# Running the App

### Client 
To run the client/frontend portion of the site, `cd` to `/client` and run `ng serve`.

### Server
To run the server, a MongoDB instance must be started first. Run `mongod --dbpath C:\path\to\database`. It may be a good idea to set up the db in a place with a short path e.g. `C:\dev\data`.

# SSL/TLS
The cert included with this project is a self-signed cert generated with openssl. In order for Chrome to recognize it you must install it. To install the CA:
1. Navigate to `/certs` and doubleclick on `ca.pfx`. This will open up a prompt for you to install the CA to the certificate chain.
2. Continue with the install and when prompted for a password enter: `boilerplate`.
3. Chrome looks at the Trusted Certification Root Authority store when validating SSL/TLS. When asked for an install location, click `browse` and select `Trusted Certification Root Authority`.
4. To serve Angular with SSL enabled, run: `ng serve --ssl true --ssl-key "../certs/key.pem" --ssl-cert "../certs/cert.pem"`.

As of right now the CA is configured to have ip: 0.0.0.0 and 127.0.0.1 and the dns localhost. If you need to add additional ips (like your own) or dns names in, you can generate a new CA with the following steps:
1. Go to `/certs/config.cnf` and add a new IP.# or DNS.# under [alt_names].
2. Open a cmd/terminal in the `/certs` folder.
3. `openssl req -days 3000 -nodes -sha256 -newkey rsa:2048 -keyout key.pem -out csr.pem -config config.cnf`
4. `openssl x509 -signkey key.pem -in csr.pem -req -days 3000 -out cert.pem -extensions req_ext -extfile config.cnf`
5. `openssl pkcs12 -export -out ca.pfx -in cert.pem -inkey key.pem -passout pass:<your-password-for-ca-file>` Note: Don't forget to add a password.
6. To view the Certificate and verify that Subject Alternative Name has been set, run: `openssl x509 -text -noout -in cert.pem`.
7. Follow the steps above to reinstall the certificate.