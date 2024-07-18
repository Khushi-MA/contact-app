import requests
import time

# Define the URL to send requests to
url = 'http://localhost:8080'

# Define the number of requests to send
num_requests = 1000

# Send requests
for i in range(num_requests):
    try:
        response = requests.get(url)
        print(f'Response {i+1}: Status Code - {response.status_code}')
    except Exception as e:
        print(f'Error occurred: {e}')

    # Add a small delay between requests
    time.sleep(0.1)