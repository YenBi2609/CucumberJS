Feature: Login Symper
   Scenario Outline: A user logging in with an invalid email should get an error message
      Given A user visits login page
      When the user enters "<email>" into the "email input" field
      Then the user should see "Email không hợp lệ"
        Examples:
         |email       |  
         |1234555     |
         |@#$%        |
         |a=a         |
         |html<body>  |
   Scenario Outline: A user logging in with a blank password should be get an error message
      Given A user visits login page
      When the user enters "<email>" into the "email input" field
      And the user enters "password" into the "password input" field
      When the user clicks on "Đăng nhập"
      Then the user should see "Không thể đăng nhập" error message title
      And the user should see "Tài khoản hoặc mật khẩu không chính xác!" error message content
        Examples:
          |email          |
          |yenqt@symper.vn|
