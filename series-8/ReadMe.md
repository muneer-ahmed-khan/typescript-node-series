### Usage
- The ```examples``` folder contain multiple example of Creating a server, receiving requests.

- Uncomment the import statement of any imported utils file in ```main.js``` to see the result.

- run the program with command
``` npm start ```

### Main Points
- HTTPS provides a secure and encrypted communication channel, ensuring data integrity, confidentiality, and authentication, while also addressing trust-related concerns.
- It is essential for protecting sensitive information transmitted over the internet and maintaining a secure online environment.
- With **HTTP**, we send the data in plaintext. With **HTTPS**, it is **encrypted**.
- Attacks:
    - **Man in middle**
        - It is a situation where an attacker inserts himself in-between the client and the server.
        - He can see the traffic, alter it, and relay it to the destination while remaining unnoticed.
        - Public WiFi network, for example in a hotel or a restaurant. Places like that are great for an attacker to perform the man in the middle attack.

    - **Phishing**
        - Getting important information such as passwords or credit card details by pretending to be someone trustworthy.
        - Email phishing, spear phishing (targeted attacks on specific individuals or organizations), vishing (voice phishing over phone calls), and smishing (phishing via SMS or text messages). 
        - As technology evolves, attackers continue to develop new and sophisticated phishing techniques.
        - To protect against phishing attacks, individuals and organizations should be cautious about clicking on links or providing sensitive information in response to unexpected or suspicious communications. 
        - Verifying the legitimacy of emails, using multi-factor authentication, and staying informed about common phishing tactics are essential practices to enhance cybersecurity.
- For the site to be valid while using HTTPS, it needs a **certificate**.
- The **certificate** can be issued by a **certificate authority**.
- HTTPS uses the TLS protocol, the successor of SSL.
- During the initial **TLS** Handshake, the server responds with a **certificate**.
- It includes a **public key** that is later used for encrypting communication during the handshake.
- This is an example of assymetric cryptography. It uses a **public key** that is widely distributed and can be used to encrypt data. To decrypt it you need a **private key**, that should be kept secret.
- To implement HTTPS connection you need a valid **certificate** and a **secret key**.
- For local development, we can create our **certificate** without any external **certificate** authorities.
- To do it we use **OpenSSL** that is preinstalled on many Linux distributions. You can also use it on Windows or Mac.
- ```openssl req -x509 -newkey rsa:4096 -keyout key.pem -out certificate.pem -days 365 -nodes```
- This generates two files for us: **key.pem**  and **certificate.pem**.











