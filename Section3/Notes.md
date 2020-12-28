# Pre-Express

### Notes and Things to do in this section:
- Networking Protocols
- Express is just a node module
- Code up a web server in node without express.

1. Internet is just a mesh of computers connected together.

2. Clients/Hosts send packets that request something from the server. The servers job is to select the apt document/file and send it to the client.

3. The packets are handled with networking protocols. 

4. With express (which uses node, which in-turn uses C), we write code that serves as the logic for the server. This is a great example of abstraction.

5. Networking Layers (starting from the most basic to the most abstracted)
    - Physical Layer - Cables
    - Link Layer - WIFI/Ethernet
    - Network Layer - IP
    - Transport Layer - UDP/TCP
    - Application Layer - where developers work using protocols like HTTP, SSH, FTP, SMTP, etc