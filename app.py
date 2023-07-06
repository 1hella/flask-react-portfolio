from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)


@app.route('/data', methods=['GET'])
def get_data():
    try:
        df = pd.read_csv('data/data.csv', sep=';')
        return jsonify(df.to_dict(orient='records'))
    except Exception as e:
        return jsonify(error=str(e)), 500


if __name__ == '__main__':
    app.run()
