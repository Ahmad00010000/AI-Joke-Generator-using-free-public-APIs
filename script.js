async function getJoke() {
  const jokeDiv = document.getElementById('joke');
  jokeDiv.innerText = "Loading a hilarious joke... 🤣";

  try {
    // Using a FREE public joke API (no API key needed)
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();

    if (data.joke) {
      jokeDiv.innerText = data.joke;
    } else {
      jokeDiv.innerText = "Why did the joke fail? Because it couldn't API-logize! 😆 (Try again!)";
    }
  } catch (error) {
    jokeDiv.innerText = "Error fetching joke. Maybe the internet is joking around too much! 😅";
  }
}
