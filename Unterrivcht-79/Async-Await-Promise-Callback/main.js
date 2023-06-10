// let url = "https://alisawiali.github.io/";
// fetch(url)
//   .then((test1) => {
//     return test1.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((res) => {});
// Function to fetch country data and display it on the page
function displayCountryInfo() {
  // Make an HTTP GET request to the REST Countries API
  fetch("https://restcountries.com/v2/name/united%20states")
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      // Process the retrieved data
      const country = data[0];

      // Create HTML elements to display the country information
      const countryInfoDiv = document.createElement("div");
      const countryName = document.createElement("p");
      countryName.textContent = `Country Name: ${country.name}`;
      const capital = document.createElement("p");
      capital.textContent = `Capital: ${country.capital}`;
      const population = document.createElement("p");
      population.textContent = `Population: ${country.population}`;
      const languages = document.createElement("p");
      languages.textContent = `Languages: ${country.languages
        .map((lang) => lang.name)
        .join(", ")}`;
      const flagImg = document.createElement("img");
      flagImg.src = country.flags.svg;

      // Append the country information to the HTML page
      countryInfoDiv.appendChild(countryName);
      countryInfoDiv.appendChild(capital);
      countryInfoDiv.appendChild(population);
      countryInfoDiv.appendChild(languages);
      countryInfoDiv.appendChild(flagImg);
      document.body.appendChild(countryInfoDiv);
    })

    .finally(() => {
      console.log("The API call has finished.");
    });
}

// Call the displayCountryInfo function when the page finishes loading
displayCountryInfo();
