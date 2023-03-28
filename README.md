# My Fashion Studio


Flowchart:https://drive.google.com/file/d/1R- ySUlNxjOHtQiGh50aQ3m1uLXlkYWvV/view?usp=share_link

Project Documentation:https://docs.google.com/document/d/1JJkHvSJVXeHNJWM7bJokUaGCsWcnCpLEVyqFg3vt9Q0/edit?usp=share_link

Low Fedility:https://drive.google.com/drive/folders/1XjLJWR7bkeLsjL0TFTkvkEeH2oxqBguf?usp=share_link

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa- batch3_bakyalakshmi.angappan__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa- batch3_bakyalakshmi.angappan__web_project)



### buyer (completed)
    - login (completed)
    - register (completed)
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
    - product details (completed)
    
   ### shopping bag
    - add bag products 
    - read bag products 
    - update bag product 
    - delete bag product 
    
   ### order
    - create order
    - read order
    - delete order

    
   ### wishlist
    - create wishlist products
    - read wishlist products
    - update wishlist product
    - delete wishlist product

   ### search
  
## buyer

### create an account (completed)
- scenario 1: Successfully create an account
   - steps:
      1. Navigate to the registration page. 
      2. Enter the required information such as full name,mobile number,email address,password
      3. Click the "Create Your MFS Account" button.
   - Expected Result:
      - The user is redirected to the login page.

* scenario 2: Successfully  login to account
   - steps:
      1. Navigate to the login page.
      2. Enter the required information such as Email address,password
      3. Click the "login" button.
   - Expected Result:
      - The user is redirected to the user profile page.

### View profile details (completed)
- Scenario 1: Successfully view profile details
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the profile page.
      3. View the profile details such as full name, Mobile Number,Email Address
   - Expected Result:
      - The user can view their profile details.

### Edit profile details (completed)
- Scenario 1: Successfully edit profile details
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the profile page.
      3. Click the "Edit profile" button.
      4. Enter the additional information such as gender,Date of Birth,Address,Hint name
      5. The user is redirected to edit profile page.
      5. Click the "Save Changes" button.
   - Expected Result:
      - The user's profile details are updated.

### Edit profile details (completed)
- Scenario 1: Successfully edit profile details
   - Steps:
      1. Log in as a buyer.
      2. Navigate to the profile page.
      3. Click the "Edit profile" button.
      4. Enter the additional information such as Gender,Date of Birth,Address,Hint name
      5. The user is redirected to edit profile page.
      6. Click the "Save Changes" button.
   - Expected Result:
      - The user's profile details are updated.

### view the products (completed)
- scenario 1:successfully view the list of products
      - steps:
         1. Login as a buyer
         2. Navigate to the product listing page
         3. View the list of available products
      - Expected Result:
         - The user can view the available products

- scenario 2:successfully view the product details
      - steps:
         1. Login as a buyer
         2. Navigate to the product listing page
         3. select the product to view its details
         4. view the details of the selected product
      - Expected Result:
         - The user can view the details of the selected product.
   
### add product to bag
- scenario 1:successfully add product to bag
      - steps:
         1. Login as a buyer
         2. Navigate to the product listing page
         3. select the product to view its details
         4. select the product to add to bag
         5. click the "Add to Bag" button
      - Expected Result:
         - The user can view the list of products in bag

### View products in bag
- Scenario 1: Successfully view products in bag
      - Steps:
         1. Log in as a buyer.
         2. Navigate to the bag page.
         3. View the list of products in the bag.
      - Expected Result:
         - The user can view the list of products in the bag.


### Remove product from bag
- Scenario 1: Successfully remove product from bag
      - Steps:
         1. Log in as a buyer.
         2. Navigate to the bag page.
         3. click the cancel button.
      - Expected Result:
         - The product is removed from the user's bag.

### Buy a product
- Scenario 1: Successfully purchase a product
      - Steps:
         1. Log in as a buyer.
         2. Navigate to the bag page.
         4. Click the "Place Order" button.
      - Expected Result:
         - The user is redirected to the order page.
   
### View the ordered products
- Scenario 1: Successfully view the list of ordered products
      - Steps:
         1. Log in as a buyer.
         2. Navigate to the orders page.
         4. view the list of ordered products
      - Expected Result:
         - The user can view the list of ordered products.


## seller 
### create an account (completed)
- scenario 1: Successfully create an account
   - steps:
      1. Navigate to the registration page. 
      2. Enter the required information such as full name,mobile number,email address,password
      3. Click the "Create Your MFS Account" button.
   - Expected Result:
      - The user is redirected to the login page.

- scenario 2: Successfully login to account
   - steps:
      1. Navigate to the login page.
      2. Enter the required information such as Email address,password
      3. Click the "login" button.
   - Expected Result:
      - The user is redirected to the user profile page. 

### Create a new product category
- Scenario 1: Successfully create a new product category
   - Steps:
      1. Log in as a seller.
      2. Navigate to the add category page.
      3. select the gender of the product.
      4. Enter the product category name.
      5. Click the "add category" button.
   - Expected Result:
      - The new category is created and added to the buyer's webpage

### Create a new product to sell
- Scenario 1: Successfully create a new product to sell
   - Steps:
      1. Log in as a seller.
      2. Navigate to the add product page.
      3. select the gender,category of the product.
      4. Enter the product details such as image,brand,name,color,size,mrp,offer,quantity and description.
      5. Click the "Upload Product" button.
   - Expected Result:
      - The new product is created and added to the buyer's webpage.
      - The seller is redirected to the inventory page

### view list of products
- scenario 1: successfully view the list of products
   - steps:
      1. Log in as a seller.
      2. Navigate to the inventory page.
      3. view the list of products
   - Expected Result:
      - The seller can view their list of products in the inventory page

### edit product details
- Scenario 1: Successfully edit product details
   - Steps:
      1. Log in as a seller.
      2. Navigate to the inventory page.
      3. Select a product to edit.
      4. Click the "Edit" button.
      5. The user is redirected to edit profile page.
      6. Update the product details.
      7. Click the "Save Changes" button.
- Expected Result:
      - The product details are updated.

### delete product 
- Scenario 1: Successfully delete product.
   - Steps:
      1. Log in as a seller.
      2. Navigate to the inventory page.
      3. Select a product to delete.
      4. Click the "delete" button.
- Expected Result:
      - The product is deleted.


    
  
    
    
 
 
