import csv
from datetime import datetime

KEY_COLUMN_INDEX = 0
NAME_INDEX = 1
PRICE_INDEX = 2

products_list = {}
amount_list = []
subtotal_list = []
tax_rate = 0.06

def main():
    try:
        print()
        read_products("products.csv", KEY_COLUMN_INDEX)
        print()
        print('Welcome to Inkom Emporium')
        process_request()
        totals()
        date()
        
    except FileNotFoundError as file_not_found_err:
        print('Sorry, the file specified was not found.')
        print(file_not_found_err)
        
    except PermissionError as perm_err:
        print(f"Error: You don't seem to have permission on the products.csv/request.csv"" file.")
        print(perm_err)
        
    except KeyError as key_err:
        print('Sorry, KeyError')
        print(type(key_err).__name__, key_err)
     
def read_products(filename, key_column_index):
    with open(filename, "rt") as csv_file:
        reader = csv.reader(csv_file)
        next(reader)
        for row in reader:
            key = row[key_column_index]
            products_list[key] = row
            products_list[key].pop(0)
        return products_list
    
def process_request():
    with open("request.csv", "rt") as csv_file:
        reader = csv.reader(csv_file)
        next(reader)
        print()
        for line in reader:
            key = line[0]
            amount = line[1]
            names = list(products_list[key])
            print(f'{names[0]}: {amount} @ {names[1]}')
    return

def totals():
    with open("request.csv", "rt") as csv_file:
        reader = csv.reader(csv_file)
        next(reader)
        print()
        for line in reader:
            amount = int(line[1])
            amount_list.append(amount)
        total_items = (sum(amount_list))
        print(f'Requested Items: {total_items}')
        
        with open("request.csv", "rt") as csv_file:
            reader = csv.reader(csv_file)
            next(reader)
            for line in reader:
                key = line[0]
                amount = float(line[1])
                names = list(products_list[key])
                subtotal = amount * float(names[1])
                subtotal_list.append(subtotal)
                final_subtotal = sum(subtotal_list)
                tax = final_subtotal*tax_rate
                total = tax + final_subtotal
                print(f'Subtotal: {final_subtotal:.2f}')
                print(f'Sales tax: {tax:.2f}')
                print(f'Total: {total:.2f}')
                print()
                print('Thank you for shopping with Inkom Emporium.')
                
def date():
    current_date_and_time = datetime.now()
    print(f"{current_date_and_time:%A %I:%M %p}")
    
def ask_for_survey():
    print(f"\nFollow the link below to complete an online survey to give your feedback:")
    print(f"www.survey@inkomemporium.com:")
    print('=======================================================')


if __name__ == "__main__":
 main()