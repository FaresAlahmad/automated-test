- Test Coverage

- Authentication
- Successful login
- Invalid credentials
- Authenticated user request using the access token
- Invalid token handling

- Products
- Retrieve products
- Retrieve a product by ID
- Search products
- Invalid product ID
- Pagination
- Pagination boundary testing

- Carts
- Retrieve carts for a user
- Add a product to a cart
- Update cart with an invalid quantity

- Data Validation
- Missing required fields
- Null values
- Empty values
- Incorrect data types
- Invalid IDs
- HTTP status codes
- Response body validation
- Required properties
- Data types and schema
- Basic business rules
- Negative values

- Automated Assertions

Postman tests were added to validate:

- HTTP status codes
- Response body structure
- Required properties
- Data types
- Product and cart IDs
- Error messages
- Pagination values
- Returned item counts
- Basic business rules

- Chained Workflow

The chained workflow demonstrates how data can be passed between API requests.

Login
  ↓
Get User
  ↓
Get Products
  ↓
Add Product to Cart

The login request stores the access token in the environment.

The products request stores a product ID.

The add-to-cart request uses the stored product ID and validates the returned cart response.

- How to Run

1. Open the Postman collection.
2. Select the `First Environment` environment.
3. Make sure `base_url` is set to `https://dummyjson.com`.
4. Run the individual requests to execute their tests.
5. To test the chained workflow, run the requests in this order:

Login → Get User → Get Products → Add Product to Cart

6. Postman assertions will appear in the **Test Results** section.
7. The collection can also be executed using the Postman Collection Runner.

- Defects and Observations

Testing identified cases where invalid input was accepted by the API, including:

- A missing product ID during cart creation was processed successfully.
- A negative product quantity during cart update was processed successfully.

These observations are documented in the API Test Report.

- Environment Limitation

DummyJSON is a simulated API environment. Write operations such as creating or updating carts should be evaluated based on the returned API response rather than assuming that the data is permanently stored.

- Conclusion

The collection covers the main API testing requirements, including authentication, product and cart functionality, validation, negative testing, pagination, automated assertions, and a chained workflow.

The tests focus on meaningful QA scenarios and API behavior rather than simply testing every available endpoint.