from flask import jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import User
from services import get_market_chart
from coinbase import get_coins_search, get_coins_summary, get_coins_histories
from auth import register_user, login_user

def register_routes(app):
    @app.route('/register', methods=['POST'])
    def register():
        return register_user(request.get_json())

    @app.route('/login', methods=['POST'])
    def login():
        return login_user(request.get_json())

    @app.route('/api/prediction', methods=['POST'])
    def get_coins_prediction():
        data = request.get_json()
        coin = data.get('coin')
        period = data.get('period')
        predictions = get_market_chart(coin, period)
        return jsonify(predictions)

    @app.route('/api/get_coins_summary', methods=['GET'])
    def coins_summary():
        result = get_coins_summary()
        return jsonify(result)

    @app.route('/api/get_coins_search', methods=['GET'])
    def coins_search():
        result = get_coins_search()
        return jsonify(result)

    @app.route('/api/get_coins_histories', methods=['POST'])
    def coins_histories():
        data = request.get_json()
        coin = data.get('coin')
        period = data.get('period')
        result = get_coins_histories(coin, period)
        return jsonify(result)