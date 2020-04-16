<img alt="docker-explorer-logo" src="https://dockerexplorer.now.sh/logo512.png" width="40" /> **Docker Explorer**

![PROD Deployment](https://github.com/mecm1993/docker-explorer/workflows/PROD%20Deployment/badge.svg?branch=master)

## Getting Started

### Prerequisites

 - [Node](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com/)
 - [Docker](https://www.docker.com/)

### Installation

Clone the project

```bash
git clone https://github.com/mecm1993/docker-explorer.git
```

#### Yarn

Install the dependencies

```bash
cd docker-explorer
yarn install
```

Make sure everything is working

```bash
yarn start
```

#### Docker

Create the image

```bash
cd docker-explorer
docker build -t dockerexplorer --rm .
```

Run the image

```bash 
docker run --itd --rm -p 3000:80 --name dockerexplorer-web dockerexplorer
```

#### Docker-Compose

```bash
cd docker-explorer
docker-compose up -d --build
```

Note: If everything works as expected, it should be at `https://localhost:3000`.

### Code Style

The project uses [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). To make sure the code works with the format,

```
yarn lint
```

## Deployment

It deploys automatically to [Zeit Now](https://zeit.co/home) when changes are pushed to the branches `develop` and `master`.

## Built With

* [React](https://reactjs.org/docs/create-a-new-react-app.html) - JavaScript Library
* [TypeScript](https://www.typescriptlang.org/) - JavaScript typed superset
* [Yarn](https://yarnpkg.com/) - Package Manager
* [BaseWeb](https://baseweb.design/) - UI Framework
* [Zeit Now](https://zeit.co/home) - Cloud Platform

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

This project was inspired by [GitExplorer](https://github.com/summitech/gitexplorer) from [Summitech](https://summitech.ng/) which is an awesome way to learn about Git.
