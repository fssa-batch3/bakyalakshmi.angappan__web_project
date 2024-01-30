# My Fashion Studio


-Flowchart :https://drive.google.com/file/d/1R-ySUlNxjOHtQiGh50aQ3m1uLXlkYWvV/view?usp=share_link

-Project Documentation :https://docs.google.com/document/d/1JJkHvSJVXeHNJWM7bJokUaGCsWcnCpLEVyqFg3vt9Q0/edit?usp=share_link

-Low Fedility :https://drive.google.com/drive/folders/1XjLJWR7bkeLsjL0TFTkvkEeH2oxqBguf?usp=share_link

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa- batch3_bakyalakshmi.angappan__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa- batch3_bakyalakshmi.angappan__web_project)



### buyer (completed)
- login (completed)
- signup (completed)
- create profile (completed)
- read profile (completed)
- update profile (completed)
- delete profile (completed)
   
### category (completed) 
- create category (completed)
- read category (completed) 
- update category (completed)
- delete category (completed)
 
 ### product (completed)
- create product (completed)
- read product (completed)
- update product (completed)
- delete product (completed)
- size (completed)
- product details (completed)

### shopping bag (completed)
- add bag products (completed)
- read bag products (completed)
- update bag product (completed)
- movr to wishlist (completed)
- delete bag product (completed)
- change address(completed)
   
### wishlist (completed)
- create wishlist products (completed)
- read wishlist products (completed)
- update wishlist product (completed)
- move to bag (completed)
- delete wishlist product (completed)
 
### order (completed)
- create order (completed)
- read order (completed)

### search (yet to start)


## buyer

### Create an account (completed)

- scenario 1: Successfully create an account.
   - steps:
      1. Navigate to the signup page. 
      2. redirected to the login page.
      3. Click the "Create New Account" link.
      3. Enter the required information such as full name,mobile number,email address,password.
      4. Click the "Create Your MFS Account" button.
   - Expected Result:
      - The user account is created.
      - The user is redirected to the login page.

### Create an account (completed)

- scenario 1: Successfully login to the account.
   - steps:
      1. signup as a buyer.
      2. Navigate to the login page.
      3. Enter the required information such as Email address,password.
      4. Click the "login" button.
   - Expected Result:
      - The user is login to the account.
      - The user is redirected to the profile page.

### View profile details (completed)
- Scenario 1: Successfully view profile details.
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the profile page.
      3. View the profile details such as full name, Mobile Number,Email Address
   - Expected Result:
      - The user can view their profile details.

### Edit profile details (completed)
- Scenario 1: Successfully edit profile details.
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the profile page.
      3. Click the "Edit profile" button.
      4. Enter the additional information such as gender,Date of Birth,Address,Hint name
      5. The user is redirected to edit profile page.
      6. Click the "Save Changes" button.
   - Expected Result:
      - The user's profile details are updated.

### Logout (completed)
- Scenario 1: Successfully logout profile
   - Steps: 
      1. Log in as buyer.
      1. Navigate to the Profile page.
      2. click "Logout" button.
- Expected Result:
      - The user is logged out of their account.
      - The user is redirected to the home page.

### View the categories (completed)
- scenario 1:successfully view the list of categories.
   - steps:
      1. Navigate to the gender (men,women,kids) link.
      2. View the list of available categories in the selected gender.
   - Expected Result:
      - The user can view the available categories in the selected gender.

### View the products (completed)
- scenario 1:successfully view the list of products.
   - steps:
      1. Navigate to the gender (men,women,kids) link.
      2. select a category to view its list of available products.
   - Expected Result:
      - The user can view the list of available products of the selected category.

### View the product details (completed)
- scenario 1:successfully view the product details
   - steps:
      1. Navigate to the gender (men,women,kids) link.
      2. select a category to view its list of available products.
      3. select a product to view its details.
   - Expected Result:
      - The user can view the details of the selected product.

### View the product details (completed)
- scenario 1:successfully view the product details
   - steps:
      1. Navigate to the gender (men,women,kids) link.
      2. select a category to view its list of available products.
      3. select a product to view its details.
   - Expected Result:
      - The user can view the details of the selected product.

### Add product to bag (completed)
- scenario 1:successfully add product to bag
   - steps:
      1. Login as a buyer
      2. Navigate to the product listing page
      3. select the product to view its details
      4. select the product to add to bag
      5. click the "Add to Bag" button
   - Expected Result:
      - The user can view the list of products in bag

### View products in bag (completed)
- Scenario 1: Successfully view products in bag
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the bag page.
      3. View the list of products in the bag.
      4. 
   - Expected Result:
      - The user can view the list of products in the bag.

### update products in bag (completed)
- Scenario 1: Successfully update products in bag
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the bag page.
      3. View the list of products in the bag.
      4. update the quantity of the product.
      5. The user can view the price depending on the quantity.
   - Expected Result:
      - The user can view the list of products in the bag.
      - The user can view the updated total amount in the bag total at the right.

### move products to wishlist (completed)
- Scenario 1: Successfully update products in wishlist
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the bag page.
      3. View the list of products in the bag.
      4. click the "Move to wishlist" button
      5. The selected product is added to wishlist.
   - Expected Result:
      - The product is moved to wishlist.
      - The user can view the list of products in the wishlist.

### Remove product from bag (completed)
- Scenario 1: Successfully remove product from bag
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the bag page.
      3. click the cross button.
   - Expected Result:
      - The product is removed from the user's bag.

### Add product to wishlist (completed)
- scenario 1:successfully add product to wishlist
   - steps:
      1. Login as a buyer
      2. Navigate to the product listing page
      3. select the product to view its details
      4. select the product to add to wishlist
      5. click the "wishlist" button
   - Expected Result:
      - The user can view the list of products in wishlist

- scenario 2:successfully add product to wishlist
   - steps:
      1. Login as a buyer
      2. Navigate to the product listing page
      3. hover the product to add to wishlist
      4. click the "wishlist" button
   - Expected Result:
      - The user can view the list of products in wishlist.

### View products in wishlist (completed)
- Scenario 1: Successfully view products in wishlist
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the wishlist page.
      3. View the list of products in the wishlist.
   - Expected Result:
      - The user can view the list of products in the wishlist.

### move products to bag (completed)
- Scenario 1: Successfully update products in wishlist
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the wishlist page.
      3. View the list of products in the wishlist.
      4. click the "MOve to bag" button
      5. update the size of the product if not selected.
      6. The selected product is added to bag.
   - Expected Result:
      - The product is moved to bag
      - The user can view the list of products in the bag.
      - The user can view the updated total amount in the bag total at the right.


### Remove product from wishlist (completed)
- Scenario 1: Successfully remove product from wishlist
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the wishlist page.
      3. click the cross button.
   - Expected Result:
      - The product is removed from the user's wishlist.


