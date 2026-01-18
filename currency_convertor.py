# currency convertor tool.
print("currncy convertor")

#user choose any one.
print("1.  INR convert into USD")
print("2.  USD convert into INR")
print("3.  INR convert into RUB")
print("4   RUB convert into INR")

 #users enter their choice.
choice=int(input("enter your choice ::"))

match choice:
    case 1:
        #users enter their amount.
        amount=float(input("enter your amount ::"))
        USD=amount/90.64
        print("your INR convert into USD::",USD)
    case 2:
         #users enter their amount.
        amount=float(input("enter your amount ::"))
        INR=amount*90.64
        print("your USD convert into INR::",INR)
    case 3:
         #users enter their amount.
        amount=float(input("enter your amount ::"))
        RUB=amount*0.86
        print("your INR convert into RUB ::",RUB)
    case 4:
         #users enter their amount.
        amount=float(input("enter your amount ::"))
        INR=amount/0.86
        print("your RUB convert into INR ::",INR)
    case _:
        print("now you are convert only three currency each other")