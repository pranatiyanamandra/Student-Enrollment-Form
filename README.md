# Student-Enrollment-Form
 
## Description

Student Enrollment Form will store data in STUDENT-TABLE relation of SCHOOL-DB database in JsonPowerDB(JPDB).There will be three control buttons **Save**, **Update** and **Reset** at the bottom of the form. On page load or any control button click, an empty form will be displayed and the cursor will remain at the Student Roll-No field in the form which is the primary key in the relation. All other fields and buttons are at this time.

User can first enter data in the Roll-No field (primary key) and If the primary key value does NOT exist in the database, then the **Save** and **Reset** buttons are enabled and cursor is moved to the next field i.e Student Full-Name and allow the user to enter data in the form.

After completing the data entry form, clicking the **Save** button will store the data in the database.

If the primary key value is present in the database,the data relating to that primary key is displayed in the form. Then the **Update**  and **Reset** buttons are enabled and the cursor is moved to the next' field in the form. In this case the primary key field remains disabled and allow users to change other form fields only.

Checking that the data is valid i.e. no empty fields is also being performed.

Clicking the **Update**  button updates the data in the database.Clicking the **Reset** resets the form.

**Input Fields**: {Roll-No, Full-Name, Class, Birth-Date, Address, Enrollment-Date}
**Primary key**: Roll No.

## Benefits of using JsonPowerDB

* Nimble, simple to use, in memory, real time
* Schema free - easy to maintain
* Serverless support - fast development - cuts time to market
* Built around the world's fastest indexing engine PowerIndex
* Webservices API - Low Dev Cost
* Multiple Security Layers
* A single instance - Million Indexes
* Inbuilt support for querying multiple databases
* Serverside Native NoSQL - best performance
* Multi-mode database - One solution to a variety of data

## Release History (release of your JsonPowerDB related code on Github)

https://login2explore.com/jpdb/resources/js/0.0.4/jpdb-commons.js
