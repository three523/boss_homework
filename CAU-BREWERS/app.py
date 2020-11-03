from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/index.html', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/dessert.html', methods=['GET'])
def dessert():
    return render_template('dessert.html')

@app.route('/coffee.html', methods=['GET'])
def coffee():
    return render_template('coffee.html')

@app.route('/tea.html', methods=['GET'])
def tea():
    return render_template('tea.html')


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
