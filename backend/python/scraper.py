import csv
from jobspy import scrape_jobs
import json
import re
import sys



args = sys.argv[1:]  # Excludes the script name


search_term = args[0]
location = args[1]



jobs = scrape_jobs(
    site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor"],
    search_term = search_term,
    location= location ,
    results_wanted=1,
    hours_old=72, # (only Linkedin/Indeed is hour specific, others round up to days old)
    country_indeed='USA',  # only needed for indeed / glassdoor
)

def remove_non_alphanumeric(input_string):
    if isinstance(input_string, str):
        return re.sub(r'[^a-zA-Z0-9 ]', '', input_string)
    else:
        return input_string

# Assuming 'jobs' is your DataFrame and 'description' is one of its columns
jobs['description'] = jobs['description'].apply(remove_non_alphanumeric)

# Convert DataFrame to JSON
jobs_json = jobs.to_json(orient='records' )

# Print the JSON output
print(jobs_json)
