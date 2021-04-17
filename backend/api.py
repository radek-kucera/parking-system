#!/usr/bin/env python3
# -*- coding: utf-8 -*-

##################################################
# REST API for UNIT
# Title: Sorting events, Email sender
# Author: Vojtěch Petrásek 
# Generated: 08/07/2020 09:23:18
##################################################

from flask import Flask, render_template, request, send_file, jsonify
from flask_cors import CORS
import time
import json,pprint
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


api_key='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'
templates = {
    "confirm": "d-c8c7d319675f4ad2818947b81003a35a",
    "change": "d-b238545be6f242f090cee435929d5ffe",
    "canceled": "d-382a754a05094dd0bb73c7776a46f377"
}

app = Flask(__name__)
CORS(app)

@app.route('/api/v420/sort', methods=['GET'])
def sort():
    
    return (200)

@app.route('/api/v420/send_canceled', methods=['POST'])
def canceled():
    message = Mail(
        from_email='krysak@vojtechpetrasek.com',
        to_emails=['vojtechpetrasek@gmail.com','marprivoznik@gmail.com','admin@rethy.cz'])
    message.template_id = "d-382a754a05094dd0bb73c7776a46f377"
    message.dynamic_template_data = {
        'spot': '112',
        'date': '18.04.2021',
        'timefrom': '12:00',
        'timeto': '15:00'
        }
    sg = SendGridAPIClient(api_key)
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return ('done')

@app.route('/api/v420/send_changed', methods=['POST'])
def change():
    message = Mail(
        from_email='krysak@vojtechpetrasek.com',
        to_emails=['vojtechpetrasek@gmail.com','marprivoznik@gmail.com','admin@rethy.cz'])
    message.template_id = "d-b238545be6f242f090cee435929d5ffe"
    message.dynamic_template_data = {
        'spot': '112',
        'date': '18.04.2021',
        'timefrom': '12:00',
        'timeto': '15:00'
        }
    sg = SendGridAPIClient(api_key)
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return ('done')

@app.route('/api/v420/send_confirmed', methods=['POST'])
def confirm():
    message = Mail(
        from_email='krysak@vojtechpetrasek.com',
        to_emails=['vojtechpetrasek@gmail.com','marprivoznik@gmail.com','admin@rethy.cz'])
    message.template_id = "d-c8c7d319675f4ad2818947b81003a35a"
    message.dynamic_template_data = {
        'spot': '112',
        'date': '18.04.2021',
        'timefrom': '12:00',
        'timeto': '15:00'
        }
    sg = SendGridAPIClient(api_key)
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return ('done')

@app.route('/')
def hello():
    return ("Unit challange - Krysáci")

if __name__ == "__main__":
    app.run(host="127.0.0.1",port=6666)