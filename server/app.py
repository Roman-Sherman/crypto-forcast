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