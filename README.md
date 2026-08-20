# 🏋️ GymBuddy

<p align="center">
  <img src="https://res.cloudinary.com/detwvcqim/image/upload/v1681588856/GymBuddy_Logo_r0kbdw.png" width="260" height="180" alt="GymBuddy Logo">
</p>

<h3 align="center">Find a Gym Buddy near you and get fitter together 💪</h3>

<p align="center">
  A fitness partner matching application built with Ruby on Rails.
</p>

---

## 📌 About the Project

**GymBuddy** is a web application designed to help people find a fitness partner based on their training preferences and location.

One of the biggest challenges in maintaining a consistent fitness routine is motivation. Having a workout partner can help people stay accountable and make exercising more enjoyable.

With GymBuddy, users can:

* Create their own profile
* Define their training preferences
* Discover other gym-goers nearby
* Send connection requests
* Accept connection requests
* Message their fitness partners
* Arrange workout sessions

---

## ⚙️ How It Works

### 1. Create Your Profile

Create a profile and provide your fitness and training preferences.

### 2. Find Gym Buddies

Browse gym-goers near your location and find people with similar interests.

### 3. Connect

Send a request to another user and wait for them to accept.

### 4. Start Training Together

Once connected, users can communicate and arrange their next workout session.

---

## 🛠️ Technologies Used

| Technology    | Purpose                               |
| ------------- | ------------------------------------- |
| Ruby on Rails | Backend and web application framework |
| JavaScript    | Frontend functionality                |
| Stimulus      | Frontend interactions                 |
| Sass / SCSS   | Styling                               |
| Bootstrap     | Responsive UI components              |
| Webpack       | JavaScript and asset bundling         |
| Cloudinary    | Image/media management                |
| Map API       | Location and map functionality        |
| PostgreSQL    | Database                              |

The project's package configuration includes Bootstrap, Stimulus, Hotwire/Turbo, Webpack, Sass, Font Awesome and related frontend dependencies.

---

## 📂 Project Structure

```text
Gym-Buddy-Master/
│
├── app/
│   ├── controllers/
│   ├── models/
│   ├── views/
│   ├── javascript/
│   └── assets/
│
├── config/
├── db/
├── public/
├── test/
├── storage/
│
├── Gemfile
├── package.json
├── package-lock.json
├── webpack.config.js
├── Rakefile
├── Procfile.dev
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Ruby
* Ruby on Rails
* Yarn
* Node.js
* PostgreSQL

Check your installations:

```bash
ruby -v
rails -v
yarn -v
node -v
```

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/zeeshan335530/Gym-Buddy-Master.git
```

Move into the project directory:

```bash
cd Gym-Buddy-Master
```

### 2. Install Ruby Dependencies

```bash
bundle install
```

### 3. Install JavaScript Dependencies

```bash
yarn install
```

The original project setup also uses `bundle install` for Ruby gems and `yarn install` for the JavaScript dependencies.

---

## 🗄️ Database Setup

Create the database, run migrations and load the seed data:

```bash
rails db:create
rails db:migrate
rails db:seed
```

Or run them together:

```bash
rails db:create db:migrate db:seed
```

---

## 🔐 Environment Variables

API credentials should **never be committed to GitHub**.

Create a `.env` file in the root directory:

```env
CLOUDINARY_URL=your_cloudinary_url
MAPTILER_API_KEY=your_map_api_key
```

The project README specifically requires API keys to be stored in `.env` and the `.env` file to be included in `.gitignore`.

**Important:** Never upload your real `.env` file or expose API secrets publicly.

---

## ▶️ Run the Application

Start the Rails server:

```bash
rails s
```

In another terminal, run:

```bash
yarn build --watch
```

Alternatively, you can use:

```bash
bin/dev
```

The application is available at:

```text
http://localhost:3000
```

These commands are also part of the project's original launch instructions.

---

## 🎥 Project Demo

The original project includes a demonstration of GymBuddy in action.

<p align="center">
  <img src="https://res.cloudinary.com/detwvcqim/image/upload/v1681667634/gymBuddy_ick8ih.gif" width="600" alt="GymBuddy Demo">
</p>

---

## 🌟 Key Features

* 👤 User profiles
* 🏋️ Training preferences
* 📍 Location-based gym buddy discovery
* 🤝 Connection requests
* 💬 User messaging
* 🔔 Notifications
* 🗺️ Map integration
* 📱 Responsive interface
* 🖼️ Cloud-based image management

---

## 🔒 Security

For security:

* Keep API keys inside `.env`
* Never commit `.env` to GitHub
* Do not expose Cloudinary credentials
* Do not expose database credentials
* Use environment variables for sensitive configuration

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

5. Push your branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

## 📜 License

This project was originally created as part of the **Le Wagon Coding Bootcamp**.

---

## 👨‍💻 Project

**GymBuddy**

GitHub Repository:

https://github.com/zeeshan335530/Gym-Buddy-Master

---

<p align="center">
  ⭐ If you find this project useful, consider giving the repository a star!
</p>
