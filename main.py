print("-------Enter Your Account Number-----")
accNum=input()
if(len(accNum)==10):
    print("Thank you For entering Account Number")
    print("Enter The Amount you want to withdraw")
    amount=input()
    if(int(amount)<3000):
        print("Your Account Number has Succesfully Withdrawed From Given Account Number","XXXXXX"+accNum[6:10])
    else:
        print("Only 3,000 can be withdrawed At a Time")
else:
    print("Not a Valid Account Number")