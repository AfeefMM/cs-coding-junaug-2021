

def cusOrder(coffeeType, milkOption, sizeOption):
    theOrder =[]
    theOrder.append(coffeeType)
    theOrder.append(milkOption)
    theOrder.append(sizeOption)

    print(theOrder)

for index in range(0,3):
    coffeeType = input("Please enter your coffee selection: ")
    milkOption = input("Please enter your milk selection: ")
    sizeOption = input("Please enter size of your drink: ")
    cusOrder(coffeeType,milkOption,sizeOption)


