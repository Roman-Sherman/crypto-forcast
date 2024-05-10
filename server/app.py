from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    }) 

@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"

if __name__ == "__main__":
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
