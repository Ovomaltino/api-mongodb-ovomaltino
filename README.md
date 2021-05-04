[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">

  <h3 align="center">Ovomaltino - API-MongoDB template</h3>

  <p align="center">
    Store your Ovomaltino data using an API with MongoDB
    <br />
    <a href="https://github.com/Ovomaltino/api-mongodb-ovomaltino"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Ovomaltino/api-mongodb-ovomaltino/issues">Report Bug</a>
    ·
    <a href="https://github.com/Ovomaltino/api-mongodb-ovomaltino/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This is a microservice to provide a RESTFul API to save and get ovomaltino package data.

### Built With

* [Typescript](https://www.typescriptlang.org/)
* [NodeJS](https://nodejs.org)
* [Express](https://expressjs.com/)
* [Tsyringe](https://www.npmjs.com/package/tsyringe)
* [Mongoose](https://mongoosejs.com/)
* [Jest](https://jestjs.io)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Mongo
* Yarn
* NodeJS

## Usage

### Local (Yarn)
1. install project dependencies
```bash
yarn
```
2. Change environment variables (.env file)
3. run server
```bash
yarn serve
```

### Docker
```bash
docker run -e PORT=3005 \ 
-e DATABASE_CONNECTION_STRING=mongodb://localhost:27017/ovomaltino \
-p 3005:3005 -d ovomaltino/api-mongo
``` 

## Roadmap

See the [open issues](https://github.com/Ovomaltino/api-mongodb-ovomaltino/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Matheus Nobre Gomes - [LinkedIn](https://linkedin.com/in/mattnobre) - matt-gomes@live.com

Project Link: [https://github.com/Ovomaltino/api-mongodb-ovomaltino](https://github.com/Ovomaltino/api-mongodb-ovomaltino)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Ovomaltino/api-mongodb-ovomaltino.svg?style=for-the-badge
[contributors-url]: https://github.com/Ovomaltino/api-mongodb-ovomaltino/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Ovomaltino/api-mongodb-ovomaltino.svg?style=for-the-badge
[forks-url]: https://github.com/Ovomaltino/api-mongodb-ovomaltino/network/members
[stars-shield]: https://img.shields.io/github/stars/Ovomaltino/api-mongodb-ovomaltino.svg?style=for-the-badge
[stars-url]: https://github.com/Ovomaltino/api-mongodb-ovomaltino/stargazers
[issues-shield]: https://img.shields.io/github/issues/Ovomaltino/api-mongodb-ovomaltino.svg?style=for-the-badge
[issues-url]: https://github.com/Ovomaltino/api-mongodb-ovomaltino/issues
[license-shield]: https://img.shields.io/github/license/Ovomaltino/api-mongodb-ovomaltino.svg?style=for-the-badge
[license-url]: https://github.com/Ovomaltino/api-mongodb-ovomaltino/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mattnobre
