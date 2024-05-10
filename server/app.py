from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from routes import register_routes

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'crypto_forcast'
jwt = JWTManager(app)

CORS(app)

register_routes(app)

if __name__ == '__main__':
    app.run(debug=True)









# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import requests
# import numpy as np
# from sklearn.linear_model import LinearRegression
# import time
# from sklearn.preprocessing import MinMaxScaler
# from datetime import datetime, timedelta

# app = Flask(__name__)
# CORS(app)

# @app.route('/api/prediction', methods=['POST'])
# def index():
#     data = request.get_json()

#     coin = data.get('coin')
#     period = data.get('period')

#     predictions = get_market_chart(coin, period)
#     return jsonify(predictions)

# def get_market_chart(coin, period):
#     # Get OHLC data
#     response = requests.get(f'https://api.coinbase.com/v2/prices/{coin}-USD/historic?sort=rank&period={period}')
#     ohlc_data = response.json()

#     # Assuming 'ohlc_data' is a list of [time, open, high, low, close] lists
#     prices = ohlc_data['data']['prices']
#     histories = [[datetime.utcfromtimestamp(int(price['time'])).strftime('%Y-%m-%d %H:%M:%S'), float(price['price'])] for price in prices]
#     ohlc = np.array([[price['time'], price['price']] for price in prices])

#     # Use only the 'time' and 'close' columns
#     X = ohlc[:, [0, 1]]  # Time
#     y = ohlc[:, 1]    # Close price

#     # Reshape y to have the same shape as X
#     y = y.reshape(-1, 1)

#     # Scale the data
#     scaler = MinMaxScaler()
#     X = scaler.fit_transform(X)

#     # Train the model
#     model = LinearRegression()  
#     model.fit(X, y)

#     # Make a prediction
#     y_pred = model.predict(X)

#     # Create a list of dates for the predictions
#     start_date = datetime.now()

#     if period == 'day':
#         dates = [(start_date + timedelta(minutes=i*5)).strftime('%Y-%m-%d %H:%M:%S') for i in range(len(y_pred))]
#     else:
#         dates = [(start_date + timedelta(minutes=i*30)).strftime('%Y-%m-%d %H:%M:%S') for i in range(len(y_pred))]

#     # Combine the dates and predictions into a dictionary
#     predictions = [[date, pred[0]] for date, pred in zip(dates, y_pred)]

#     return predictions

# if __name__ == '__main__':
#     app.run(debug=True)
