
# [Series #08: HTTPS with OpenSSL Certificate](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-08)

Welcome to the Node.js TypeScript [Series #08: HTTPS with OpenSSL Certificate](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-08), focusing on creating a HTTPS Server. This is the eighth series following [Series-07](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-07)

# HTTPS Principles and Implementation in Node.js

## Problems Solved by HTTPS:

### Man-in-the-Middle Attacks:

- Attackers can intercept and alter communication between the client and the server.
- HTTPS encrypts data, preventing eavesdropping (listen in) on sensitive information like passwords.
- Particularly crucial in public Wi-Fi networks where attackers might perform man-in-the-middle attacks.

### Phishing:

- HTTPS helps combat phishing by verifying the authenticity of websites.
- Certificate authorities issue certificates, and browsers trust these authorities.
- Users can check for HTTPS and a valid certificate to verify a website's legitimacy.

## Certificates:

- Certificates are issued by certificate authorities and verify a website's ownership of a domain.
- Browsers trust certificates from recognized authorities.
- HTTPS uses the TLS protocol, and the TLS Handshake involves the exchange of certificates.
- Asymmetric cryptography is used, with a public key for encryption and a private key for decryption.

## Generating a Certificate:

- For local development, OpenSSL can be used to generate a self-signed certificate.
- Command to generate a certificate:
  ```bash
  openssl req -x509 -newkey rsa:4096 -keyout key.pem -out certificate.pem -days 365 -nodes
  ```
  - `-x509`: X.509 standard for TLS certificates.
  - `-newkey`: Requests a new key (RSA algorithm, 4096 bits).
  - `-days`: Specifies the certificate's validity period.
  - `-nodes`: No DES (no key encryption).


# Implementing HTTPS in Node.js:

Node.js provides the `https` module for implementing HTTPS. Below is an example code:

```typescript
import * as https from 'https';
import * as fs from 'fs';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

async function startServer() {
  const [key, cert] = await Promise.all([
    readFile('key.pem'),
    readFile('certificate.pem')
  ]);

  https.createServer({ key, cert }, (req, res) => {
    res.statusCode = 200;
    res.end('hello world');
  })
  .listen(8000, () => {
    console.log('Server started');
  });
}

startServer();
```
- Reads the key and certificate files.
- Creates an HTTPS server using the provided key and certificate.

### Let's Encrypt:
For production, obtaining a valid certificate is recommended. Let's Encrypt is a service that provides free and valid certificates. Instructions for using Let's Encrypt are available in their documentation.

### Mixed Content:
When serving a website over HTTPS, all resources, including CSS, JavaScript, and API requests, should be fetched using HTTPS. Browsers block mixed content (HTTP resources on an HTTPS site) for security reasons.




### Usage
- The ```examples``` folder contain multiple example of Creating a server, receiving requests.

- Uncomment the import statement of any imported examples file in ```main.js``` to see the result.

- run the program with command
``` npm start ```



Explore advanced topics and continue your learning journey by visiting [Series-09](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-09). While this series provides creating HTTPS server in Node.js, [Series-09](https://github.com/muneer-ahmed-khan/typescript-node-series/tree/master/series-09) focus on ```Node.js Event Loop``` in Node.js. **Enjoy coding!**












