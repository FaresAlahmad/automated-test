- Task 3 - API Test Report

- Defects / Observations:

1. Missing Product ID Accepted

Scenario:
Sent a POST /carts/add request without providing the required product ID.

Actual Result:
The API returned 201 Created and processed the request successfully.

Expected Result:
The API should validate the required product.id field and reject the request with an appropriate 4xx client error.

Risk:
Invalid cart data may be accepted by the API instead of being rejected during validation.

Severity: Medium

2. Negative Product Quantity Accepted

Scenario:
Sent a PUT /carts/1 request with a negative product quantity:

{
    "merge": true,
    "products": [
        {
            "id": 1,
            "quantity": -5
        }
    ]
}

Actual Result:
The API processed the request successfully.

Expected Result:
The API should reject negative quantities because a product quantity should be a positive value.

Risk:
Invalid quantities could lead to incorrect cart behavior or calculations.

Severity: Medium

3. DummyJSON Write Operation Limitation

Observation:
DummyJSON is a simulated API environment. Successful POST or PUT requests should not automatically be treated as proof that the data has been permanently stored in a database.

Impact:
Tests involving cart creation or updates should focus on validating the API response and behavior rather than assuming permanent data persistence.

Severity: Informational

Summary

Two validation-related observations were identified during testing:

Missing required product IDs were accepted.
Negative product quantities were processed successfully.

Both observations could represent validation weaknesses in a production e-commerce API and should be reviewed by the development team.
- 1. Missing Product ID Accepted

Scenario:
Sent a `POST /carts/add` request without providing the required product ID.

Actual Result:
The API returned `201 Created` and processed the request successfully.

**Expected Result:**  
The API should validate the required `product.id` field and reject the request with an appropriate 4xx client error.

Risk:
Invalid cart data may be accepted by the API instead of being rejected during validation.

**Severity:** Medium

---

- 2. Negative Product Quantity Accepted

Scenario:
Sent a `PUT /carts/1` request with a negative product quantity.

Actual Result: 
The API processed the request successfully.

Expected Result:
The API should reject negative quantities because a product quantity should be a positive value.

Risk:
Invalid quantities could lead to incorrect cart behavior or calculations.

**Severity:** Medium

---

- 3. DummyJSON Write Operation Limitation

Observation:
DummyJSON is a simulated API environment. Successful POST or PUT requests should not automatically be treated as proof that the data has been permanently stored in a database.

Impact:
Tests involving cart creation or updates should focus on validating the API response and behavior rather than assuming permanent data persistence.

Severity: Informational