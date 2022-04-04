from datetime import date
from flask import Flask, request, send_file

app = Flask(__name__)


@app.route('/')
def home():
    return send_file('index.html')


def yearfrac(start_date: date, end_date: date) -> float:
    # TODO: return the fractional number of years between these dates
    pass


@app.route('/api/calculate', methods=['POST'])
def calculate():
    input = request.json

    # TODO: your code goes here; see spreadsheet

    total_cost = 0
    return {'totalCost': total_cost}


if __name__ == '__main__':
    app.run(debug=True)
