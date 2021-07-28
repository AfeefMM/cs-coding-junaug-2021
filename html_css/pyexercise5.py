# Exercise 5
# Complete the Building
building = {
    'Parking': ['P1','P2'],
    'Residential': ['Floor 1', 'Floor 2', 'Floor 3'],
    'Gym': {
        'Equipment': ['Treadmill','Bicycle'],
        'Personel': ['Trainer', 'Crocodile']
    }
}


# Add your code below
# Step 1
# Add 'P3' to the Parking

building['Parking'].append('P3')

# Step 2
# Add 7 more floors to 'Residential'

building['Residential'].append('Floor 4')
building['Residential'].append('Floor 5')
building['Residential'].append('Floor 6')
building['Residential'].append('Floor 7')
building['Residential'].append('Floor 8')
building['Residential'].append('Floor 9')
building['Residential'].append('Floor 10')
#or
for floor in range(10,20):
    building['Residential'].append('Floor {}'.format(floor))

print(building['Residential'])

# Step 3
# Add 'Dumbells' to the 'Equipment' in the 'Gym'
building['Gym']['Equipment'].append('Dumbells')

# Step 4 
# Count the number of 'Equipment' in the 'Gym'

print("Number of equipments: ")
print(len(building['Gym']['Equipment']))


# Step 5 (Bonus)
# Use the appropriate string method to replace the 'Crocodile' with 'Security Guard'
# https://www.w3schools.com/python/python_ref_string.asp

building['Gym']['Personel'][1] = building['Gym']['Personel'][1].replace('Crocodile', 'Security Guard')
print(building['Gym']['Personel'])