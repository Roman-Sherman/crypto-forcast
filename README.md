# Cryptocurrency Forecast Project

Welcome to the Cryptocurrency Forecast Project! This project aims to provide forecasts for various cryptocurrencies using machine learning models.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Data](#data)
- [Contributing](#contributing)

## Overview

The Cryptocurrency Forecast Project utilizes historical cryptocurrency price data and machine learning techniques to generate forecasts for future price movements. It includes the following components:

- Data collection scripts
- Machine learning model implementation
- Forecasting pipeline

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/dtoyoda7/Crypto_Forcast.git
    cd Crypto_Forcast
    ```

2. Install dependencies:

    ```bash
    pip install -r server\requirements.txt
    ```

## Usage

To use the project:

1. Ensure you have installed all dependencies.
2. Obtain historical cryptocurrency price data (see [Data](#data) section for details).
3. Train the machine learning model (see [Model Training](#model-training) section for details).
4. Use the trained model for forecasting future prices.

Example usage:

```bash
python forecast.py --coin BTC --start_date 2022-01-01 --end_date 2022-12-31
```

## Data

The project requires historical cryptocurrency price data for training the models and generating forecasts. You can obtain this data from various sources such as:

- [Coinbase API](https://help.coinbase.com/en/developer-platform)
- [CoinGecko API](https://www.coingecko.com/en/api) 
- [CryptoCompare API](https://min-api.cryptocompare.com/)
- [Yahoo Finance API](https://pypi.org/project/yfinance/)

Ensure that the data includes relevant features such as opening price, closing price, volume, etc.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your branch (`git push origin feature-branch`).
5. Create a new Pull Request.

