'''

You can modify the parameters, return values and data structures used in every function if it conflicts with your
coding style or you want to accelerate your code.

You can also import packages you want.

But please do not change the basic structure of this file including the function names. It is not recommended to merge
functions, otherwise it will be hard for TAs to grade your code. However, you can add helper function if necessary.

'''

from flask import Flask, request
from flask import render_template
import time
import json


app = Flask(__name__)

@app.route("/")
def init():
    return render_template('index.html')


@app.route('/home.html', methods=['POST'])
def shark2():
    return render_template('home.html')
    # start_time = time.time()
    # data = json.loads(request.get_data())
    #
    # print(data)
    # end_time = time.time()
    #
    # return '{"elapsed_time":"' + str(round((end_time - start_time) * 1000, 5)) + 'ms"}'


if __name__ == "__main__":
    app.run()
