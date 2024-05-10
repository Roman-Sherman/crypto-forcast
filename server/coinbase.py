import requests

def get_coins_summary():
    response = requests.get(f'https://coinbase.com/api/v2/assets/summary?include_prices=true&resolution=week&filter=listed&base=USD')
    return response.json()

def get_coins_search():
    response = requests.get(f'https://coinbase.com/api/v2/assets/search?base=USD&filter=listed&include_prices=true&resolution=week')
    return response.json()

def get_coins_histories(coin, period):
    response = requests.get(f'https://api.coinbase.com/v2/prices/{coin}-USD/historic?sort=rank&period={period}')
    return response.json()
