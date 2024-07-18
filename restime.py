import requests
import time

# Define the URL to send requests to
url = 'http://localhost:8080'

# Define the number of requests to send
num_requests = 500
batch_size = 300

# Initialize variables to store response times and counts
response_times = []
batch_response_times = []

# Send requests and measure response time
for i in range(num_requests):
    try:
        start_time = time.time()
        response = requests.get(url)
        end_time = time.time()
        
        response_time = end_time - start_time
        response_times.append(response_time)
        batch_response_times.append(response_time)
        print(f'Response {i+1}: Status Code - {response.status_code}, Response Time - {response_time:.4f} seconds')
    except Exception as e:
        print(f'Error occurred: {e}')

    # Add a small delay between requests
    time.sleep(0.1)

    # Print the average response time for every batch of requests
    if (i + 1) % batch_size == 0:
        avg_response_time = sum(batch_response_times) / len(batch_response_times)
        print(f'Average response time after {i + 1} requests: {avg_response_time:.4f} seconds')
        batch_response_times = []  # Reset batch response times

# Optionally, print the overall average response time after all requests
if response_times:
    overall_avg_response_time = sum(response_times) / len(response_times)
    print(f'Overall average response time after {num_requests} requests: {overall_avg_response_time:.4f} seconds')