from flask import jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import User
from services import get_market_chart
from auth import register_user, login_user

def register_routes(app):
    @app.route('/register', methods=['POST'])
    def register():
        return register_user(request.get_json())

    @app.route('/login', methods=['POST'])
    def login():
        return login_user(request.get_json())

    @app.route('/api/prediction', methods=['POST'])
    @jwt_required()
    def index():
        data = request.get_json()
        coin = data.get('coin')
        period = data.get('period')
        predictions = get_market_chart(coin, period)
        return jsonify(predictions)