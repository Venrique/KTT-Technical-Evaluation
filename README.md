
# KTT Technical Evaluation

This is a mini-project for displaying information about the ongoing COVID-19 pandemic. In this website you will find: confirmed cases, number of deaths and vaccines administered per country. All conveniently displayed in an interactive table!

## Installation

---

Download the source code and make sure you have node js installed on your computer.

Install all dependencies using the following command inside the project folder:

```
> npm install
```

Then run the local server:

```
> npm start
```

That's it! now you can test the website just typing **localhost:3000** on your browser.

## What you will find

---

This site contains three main pages:

- **Confirmed Cases:** Here you will see confirmed cases per country, alongside that country's population and the percentage that has been infected with covid-19.

- **Deaths:** Number of deaths per country caused by covid-19.
  
- **Vaccines Administered:** This table shows total of vaccines administered, people vaccinated and people partially vaccinated per country.

At the end of each page you will find a pie chart with the top 10 countries of each topic.

## How it was made

---

All the data is fetch in real time from [M-Media-Group Covid-19 API](https://github.com/M-Media-Group/Covid-19-API)

Node.js (*v16.14.2*) with Express was used for the backend 
