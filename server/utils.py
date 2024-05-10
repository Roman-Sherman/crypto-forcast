import requests
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import MinMaxScaler
from datetime import datetime, timedelta

def get_market_chart(coin, period):
    # Fetch and process the OHLC data
    # (implementation from the original code)
    return predictions