# Crypto Forecast Backend

Crypto Forecast Backend is a Flask-based API service designed to provide cryptocurrency price predictions based on historical data. It leverages machine learning models to analyze past price trends and generate forecasts for various cryptocurrencies.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dtoyoda7/Crypto_Forecast_BE.git
```

2. Install dependencies:
```bash
cd Crypto_Forecast_BE
pip install -r requirements.txt
```

3. Start the Flask server:
```bash
python app.py
```

The Flask server will start running at http://localhost:5000.



## API Endpoints

```bash
{
  "coin": "BTC",
  "period": "1h"
}
```
Response:
```bash
{
  "predictions": [
    {"date": "2024-05-10 08:00:00", "prediction": 50000.0},
    {"date": "2024-05-10 09:00:00", "prediction": 51000.0},
    ...
  ]
}
```

### Get Price Prediction



## Usage
1. Send a POST request to the /api/prediction endpoint with the desired cryptocurrency and time period to get price predictions.
2. Use the /api/historical endpoint to retrieve historical price data for analysis.
3. Integrate the backend API into your application to access cryptocurrency price forecasts programmatically.



## Contributing
Contributions are welcome! If you have any ideas for new features, improvements, or bug fixes, please submit a pull request.
