# Compensation Overview Tool

This compensation tool aims to allow companies the ability to view their employees by total compensation bucket.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use

This tool does not currently support parsing compensation data from a CSV file and requires some manual setup.

1. Convert your compensation CSV into a list of employee's data objects. `src/fixtures/resaurant-pay/gamine.js` is provided as an example. Export this list. NOTE: your employee data object should have the fields `firstName`, `lastName`, `salary`, and `bonus` for this tool to work.
2. Import your compensation list in `src/components/compensation.page.js`. Replace `GAMINE_DATA` on line 37 with your imported list.

In the project directory, you can run `yarn start` and view the application on `localhost:3000`.

## Features

This tool's primary function is to visualize the distribution of your employees' compensation by displaying the number of employees whose total compensation (salary + bonus) that fall into a bucket. The tool allows you to set your bucket size, which is $50k by default. When the bucket is set to $50k, all employees whose TC's fall from $0 - $50k are bucketed together, all employees whose TC's fall from $50 - $100k are bucketed together, etc. The chart shows the number of employees that are in this specific bucket.

To view a list of employees that fall under a specific bucket, click the bar that corresponds to that bucket in the chart.
