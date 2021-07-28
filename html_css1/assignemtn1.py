# Python Assignment:
# See steps (1), (2), and (3) in this file.
# Do not change the house Dictionary. Add your solution
# after every section
house = {
    "rooms": {
        "kitchen": ['stove','mattress','microwave','refrigerator'],
        "bedroom": {
            "furniture": ['bed','bed','broken chair'],
            "airconditioner": False
        },
        "livingRoom": {
            "furniture": ['couch','coffee table'],
        }
    },
}

# (1) Turn on the airconditioner in the bedroom. Change the Boolean
# value False to True.
house['rooms']['bedroom']['airconditioner'] = True


# (2) Use the right List method to remove the "mattress" from
# the kitchen. Add your code below.

house['rooms']['kitchen'].pop(1)

# (3) Add "book shelf" to the furniture in the living room.
# Use the right List method to do this. Add your code below. 

house['rooms']['livingRoom'].append("book shelf")

# (4) Use the right String method to change the "broken chair" to "chair".
# Add your code below.

house['rooms']['bedroom']['furniture'][2] = house['rooms']['bedroom']['furniture'][2].replace("broken chair","chair")

# (5) Count the number of "beds" in the bedroom. Add your code below.

count = 0
for i in house['rooms']['bedroom']['furniture']:
    if('bed' in house['rooms']['bedroom']['furniture'][i]):
        count=count+1

