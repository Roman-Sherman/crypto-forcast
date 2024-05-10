from flask import jsonify
from flask_jwt_extended import create_access_token
from models import User

def register_user(data):
    email = data.get('email')
    password = data.get('password')
    user = User.find_by_email(email)

    if user:
        return jsonify({'message': 'User already exists'}), 400

    user = User(email, password)
    user.save()
    
    return jsonify({'message': 'User created successfully'}), 201

def login_user(data):
    email = data.get('email')
    password = data.get('password')
    user = User.find_by_email(email)

    if not user or user.password != password:
        return jsonify({'message': 'Invalid email or password'}), 401

    access_token = create_access_token(identity=str(user.email))

    return jsonify({'access_token': access_token}), 200