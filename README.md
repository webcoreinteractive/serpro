# Serpro NFE Integration

## Install

### Using yarn
`yarn add @webcoreinteractive/serpro-nfe`

### Using npm
`npm i -S @webcoreinteractive/serpro-nfe`

## Usage

```import Serpro from '@webcoreinteractive/serpro-nfe'
const serpro = new Serpro(yourKey, yourSecret)

const token = await serpro.getNewToken()

const data = await serpro.searchNFE('00000000000000000000000000000000000000000000') // NFe model 55
```

## Doc

### getNewToken

This function returns a Promise that resolves to a new token, valid for 1 hour.
It also keeps an internal variable to use in other functions like ‎`Serpro.searchNFE`.

`serpro.getNewToken()`

### searchNFE

Allows you to search for a NFe model 55.

This function returns a Promise that resolves to the data related to the provided NFe's access key.

You can either use it with a space every 4 chars:

`serpro.searchNFE('0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000')`

Or not:

`serpro.searchNFE('00000000000000000000000000000000000000000000')`
