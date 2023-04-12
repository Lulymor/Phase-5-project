from flask import (
    Flask,
    render_template
)

app = Flask(__name__)


@app.route('/login')
def login():
    return render_template('src/Login.js')


@app.route('profile')
def profile():
    return render_template('src/Headers.js')
