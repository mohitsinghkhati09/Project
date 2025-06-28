In a digital age where election integrity and voter verification are more critical than ever, this project presents a secure and efficient web-based e-voting application. It leverages blockchain technology for transparent vote recording and facial recognition for real-time voter authentication—ensuring that each vote is legitimate, tamper-proof, and verifiable.

The backend is powered by MongoDB, structured into three primary collections:

users: stores voter data and facial encodings
candidates: stores information about registered candidates
elections: tracks active and historical election details
This system is ideal for organizations or institutions looking to implement reliable, technology-driven election processes.

📁 Project Structure
The repository is organized into modular components to separate concerns across client, server, and smart contract logic:


client/:
Houses the frontend code for the voting interface, user registration, login, and candidate selection.

server/:
Backend server logic, including user authentication, facial recognition, database interactions, and communication with the blockchain.

smart_contract/:
Contains the smart contract(s) written in Solidity, deployed to a local or public Ethereum-compatible blockchain for secure and verifiable voting.

Defines Node.js project metadata, dependencies, and scripts (if Node.js is used).

▶️ How to Run
Follow the steps below to install, configure, and run the Blockchain-Based E-Voting System using Facial Recognition.

🧩 Installation and Setup
📦 MongoDB Configuration
Open /server/.env and add your MongoDB connection URL on line 2.
Database collections (users, candidates, elections) will be automatically managed via the schema files in /server/Models.

🔗 Blockchain & Smart Contract Setup
🪙 Ganache (Local Blockchain)
Install Ganache.
Open it to access 10 free Ethereum accounts, each funded with 100 ETH.
Link Ganache to /smart_contract/truffle-config.js to sync accounts.
🦊 MetaMask (Browser Extension)
Install MetaMask for Chrome.
Import an account using the private keys provided by Ganache.
Use this for managing transactions during contract interaction.
⚒️ Compile & Deploy Smart Contract
cd smart_contract
npm install -g truffle      # Skip if already installed
truffle compile
truffle migrate
After deployment:
Copy the deployed contract address to client/utils/Constant.js.
Copy the Transaction.json ABI file from smart_contract/build/contracts/ to client/utils/Transaction.json.

🚀 Running the Web Application
Step 1: Start the Client
cd client
npm install
npm run start
Step 2: Start the Server
cd server
npm install
nodemon main
Wait a few moments, then open your browser and access the application to begin the voting process.

✨ Features
This project integrates secure voting, identity verification, and blockchain technology into a seamless web experience.

🔐 Blockchain Integration
Ensures vote immutability and prevents tampering with election data.

🗳️ Real-Time Voting Interface
Interactive UI for casting votes, viewing candidates, and election status.

📬 Email Verification
Automatically sends confirmation emails after successful registration or vote casting.

🧾 Smart Contract-Driven Voting
Every vote is recorded on a decentralized ledger using Ethereum smart contracts.

📊 Admin Panel & Results Display
View aggregated results and manage election data via the backend.

⚙️ Technology Stack
🧠 Backend
Node.js – Server-side logic and API handling
Express.js – Web server framework
MongoDB – NoSQL database for storing users, elections, and votes

🖼️ Frontend
React.js – User interface for voters and admins
MetaMask – Handles Ethereum transactions through the browser
⛓️ Blockchain
Solidity – Smart contracts for decentralized voting
Truffle – Ethereum development framework
Ganache – Local blockchain environment for testing
🔧 Dev Tools
Nodemon – Auto-reloading Node.js server

📝 License
This project is licensed under the MIT License.

You are free to use, distribute, and modify this project with proper attribution.
Commercial and non-commercial usage is permitted.
