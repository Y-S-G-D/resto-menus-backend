# Restaurant Menu Backend

This repository contains the backend for managing restaurant menus, user roles, and essential services for a restaurant application. Designed with scalability and efficiency in mind, this backend handles core functionalities such as role-based authentication, menu management, order processing, and analytics.

## Features

- **Role-Based Authentication**:  
  Provides different access levels based on user roles (e.g., Admin, Waiter).
  
- **User Roles**:
  - **Admin**: Full access to create, update, and delete menu items, manage users, and view reports.
  - **Waiter**: Access to view menus, place orders, and view order history.

- **Menu Management**:  
  Admin can add, update, and delete menu items, ensuring the system reflects the latest offerings.

- **Order History**:  
  Stores order history, enabling detailed tracking and reporting.

- **Analytics Reporting**:  
  Generates reports based on sales, popular items, and other key metrics.

- **Notification Workers**:  
  Background workers are set up to handle email and SMS notifications for user engagement and order updates.

## Project Structure

