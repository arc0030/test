from flask import Flask, request, jsonify
import random

app = Flask(__name__)

# Simulate a simple model response
def analyze_responses(data):
    mood = data.get('mood')
    energy = data.get('energy')
    stress = data.get('stress')
    
    # Placeholder model logic - replace with AI/ML model for actual use
    if mood == "often" or stress == "frequently":
        feedback = "It seems like you're experiencing frequent stress and mood swings. Consider incorporating mindfulness and relaxation techniques."
    elif energy == "low":
        feedback = "Low energy levels could be due to various reasons. Ensure you’re getting enough rest, nutrition, and exercise."
    else:
        feedback = "Your responses suggest a balanced state of mental and physical health. Keep up the healthy habits!"
    
    return feedback

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    feedback = analyze_responses(data)
    return jsonify({"feedback": feedback})

if __name__ == '__main__':
    app.run(debug=True)
