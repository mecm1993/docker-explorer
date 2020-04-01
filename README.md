# DockerExplorer

![Deploy Development Website](https://github.com/mecm1993/docker-explorer/workflows/Deploy%20development%20website/badge.svg)

## Getting Started

### Prerequisites

 - [Node](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com/)

### Installation

Clone the project

```
git clone https://github.com/mecm1993/docker-explorer.git
```

Install the dependencies

```
cd docker-explorer
yarn install
```

Make sure everything is working

```
yarn start
```

If everything works as expected, it should open a new tab on `https://localhost:3000`.

### Code Style

The project uses [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). To make sure the code works with the format,

```
yarn lint
```

## Deployment

It deploys automatically to [Zeit Now](https://zeit.co/home) when changes are pushed to the brances `develop` and `master`.

## Built With

* [React](https://reactjs.org/docs/create-a-new-react-app.html) - JavaScript Library
* [TypeScript](https://www.typescriptlang.org/) - JavaScript typed superset
* [Yarn](https://yarnpkg.com/) - Package Manager
* [BaseWeb](https://baseweb.design/) - UI Framework
* [Zeit Now](https://zeit.co/home) - Cloud Platform

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

This project was inspired by [GitExplorer](https://github.com/summitech/gitexplorer) which is an awesome way to learn about Git.
