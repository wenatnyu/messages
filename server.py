#!/usr/bin/env python3
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# File to store messages
MESSAGES_FILE = 'messages.json'

# Initialize messages file if it doesn't exist
if not os.path.exists(MESSAGES_FILE):
    with open(MESSAGES_FILE, 'w') as f:
        json.dump([], f)

# Helper function to read messages
def read_messages():
    try:
        with open(MESSAGES_FILE, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error reading messages: {e}")
        return []

# Helper function to write messages
def write_messages(messages):
    try:
        with open(MESSAGES_FILE, 'w') as f:
            json.dump(messages, f, indent=2)
    except Exception as e:
        print(f"Error writing messages: {e}")

# Serve static files
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

# API endpoints
@app.route('/api/messages', methods=['GET'])
def get_messages():
    messages = read_messages()
    return jsonify(messages)

@app.route('/api/messages', methods=['POST'])
def add_message():
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data or 'author' not in data or 'content' not in data:
            return jsonify({'error': 'Missing required fields'}), 400
        
        # Create new message
        new_message = {
            'id': len(read_messages()) + 1,
            'author': data['author'],
            'content': data['content'],
            'date': datetime.now().strftime('%Y-%m-%d')
        }
        
        # Add to messages
        messages = read_messages()
        messages.append(new_message)
        write_messages(messages)
        
        return jsonify(new_message), 201
    except Exception as e:
        print(f"Error adding message: {e}")
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    # Use the PORT environment variable if provided (for Railway), otherwise default to 5001
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=False, host='0.0.0.0', port=port)