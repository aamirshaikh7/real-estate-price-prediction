from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/hello')
def hello() :
    return "Hi"

if __name__ == "__main__" :
    print("Starting Flask Server for Home Price Prediction")
    app.run()