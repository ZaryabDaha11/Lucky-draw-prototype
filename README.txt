# Lucky Draw System Prototype

## Requirements:
- Node.js
- MySQL

## Setup Instructions:
1. Run `npm install` to install dependencies
2. Start server: `node server.js`
3. Open browser at: http://localhost:3000/index.html

## MySQL Table:
Create the `Lucky_Draw_Members` table using the provided `olds_schema.sql` or this SQL:
CREATE DATABASE IF NOT EXISTS OLDS;

USE OLDS;

CREATE TABLE IF NOT EXISTS Lucky_Draw_Members (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    payment_method ENUM('Easypaisa', 'JazzCash', 'Bank Transfer') NOT NULL,
    amount_to_pay DECIMAL(10, 2) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## Developed by:
Splendidmark
