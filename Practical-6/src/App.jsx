import "./App.css";

const user = {
  name: "Vatsal Patel",
  age: 22,
  profession: "Computer Engineering Student",
  bio: "I am a passionate developer interested in web development, AI, and software engineering.",
  profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQEevuK8ZxyC5w/profile-displayphoto-shrink_400_400/B4DZY7GVttHIAg-/0/1744748240353?e=1792627200&v=beta&t=H1WAqpo_EnrHC5iOdDuGgMoyjj0YPuNC0hlizsGUOIA"
};

function App() {
  return (
    <div className="app">
      {/* Website Title */}
      <header>
        <h1>My Profile</h1>
      </header>

      {/* Navigation Bar */}
      <nav>
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Profile Section */}
      <main id="profile">
        <div className="profile-card">
          <img
            src={user.profilePic}
            alt="Profile"
            className="profile-picture"
          />

          <h2>{user.name}</h2>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Profession:</strong> {user.profession}</p>

          <p className="bio">
            <strong>Bio:</strong> {user.bio}
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;