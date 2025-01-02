# 🐱‍💻 AI Chatbot Application 🐱‍🏍
A sleek, feature-rich AI chatbot application that allows users to interact with an AI model, manage multiple chat sessions, and enjoy an intuitive interface with emoji support and local data persistence.

## 🚀 Features 
- **Multiple Chat Management:**  Start, switch, and delete chat sessions effortlessly.
- **AI-Powered Responses:** Integrated with OpenAI's GPT model for intelligent and context-aware conversations.
- **Emoji Support:** Enrich conversations with a built-in emoji picker.
- **Responsive Design:** Fully optimized for desktop and mobile screens.
- **Persistent Storage:** Chats are saved locally using localStorage for continuity.

## 🛠️ Technologies Used

- **Frontend:**
  - HTML5
  - CSS3 (with animations and transitions)
  - JavaScript (Vanilla JS)

- **Styling Frameworks:**
  - Gradient backgrounds for a modern look.
  - Custom responsive design using media queries.


## 📸 ScreenShot  


## 🎉 Getting Started
### **Prerequisites**
#### **Ensure you have the following installed:**

- Node.js (v16 or above recommended)
- npm or yarn

### 📲 **Installation**
**Clone the repository:**
- git clone https://github.com/your-username/ai-chatbot.git
- cd ai-chatbot
<br>

**Install dependencies:**
- npm install

### ⚙ **Configuration**
- Obtain an API key from OpenAI by creating an account at OpenAI's API platform.

- Replace the placeholder in fetch headers with your API key:
 Authorization: `Bearer YOUR_API_KEY_HERE`

 - (Optional) Customize the OpenAI model or parameters in the fetch call.

 ### 📳 **Running the App**
- To start the development server, run:

   **npm run dev**

  *****The application will be available at http://localhost:3000.*****


##  Project Structure
```plain text 
src/
├── Components/
│   ├── ChatBotApp.js        # Main chat interface
│   ├── ChatBotStartPage.js  # Start page for the chatbot
├── App.js                   # Application entry point
├── index.js                 # ReactDOM entry point
├── ChatBotApp.css           # Styling for the chat app
```

## 🔑 Key Libraries and Tools

- #### **React:** Frontend framework for building the application.
- #### **@emoji-mart/react:** Emoji picker for enriched communication.
- #### **React Icons:** Icon set for better UI design.
- #### **localStorage:** Persistent storage for chats.

## 🚩🚩 Known Issues
- **Performance:** Large chats may slow down due to extensive use of localStorage. Consider backend storage for scalability.

- **API Key:** (So this dont work and to make it work you have to purchase a different api key which you can integrate into it.)

## 🔧 Future Enhancements
- **Backend integration for chat storage and user authentication.**

- **Add chat export and import functionality.
Support for rich media like images and file attachments.**


## 👨‍🔧 Contributing
 ### **Contributions are welcome! Please follow these steps:**

- **Fork the repository.**
- **Create a new branch for your feature/fix: git checkout -b feature-name.**
- **Commit your changes: git commit -m 'Add feature'.**
- **Push to the branch: git push origin feature-name.
Open a pull request.**

## ✨ Acknowledgements
**OpenAI for providing the GPT model.**

**Emoji Mart for the emoji picker.**


## 🧑‍💻 Author
 ### **Minal Pudaseinee**
- **GitHub: iTs-Minal**
- **LinkedIn: https://www.linkedin.com/in/minal-pudasainee-57037321b/**
