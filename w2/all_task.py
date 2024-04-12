# -*- coding: utf-8 -*-
"""all_task.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1SEp2nWeeUFLSB_c9nQcEf5qan0ACtxPC

task 1
"""

def find_and_print(messages, current_station):

  station_dict = {
     "Songshan":1,
     "Nanjing Sanmin":2,
     "Taipei Arena":3,
     "Nanjing Fuxing":4,
     "Songjiang Nanjing":5,
     "Zhongshan":6,
     "Beimen":7,
     "Ximen":8,
     "Xiaonanmen":9,
     "Chiang Kai-shek Memorial Hal":10,
     "Guting":11,
     "Taipower Building":12,
     "Gongguan":13,
     "Wanlong":14,
     "Jingmei":15,
     "Dapinglin":16,
     "Qizhang":17,
     "Xiaobitan":17.1,
     "Xindian City Hall":18.1,
     "Xindian":19}

  person_position = []

  for person, message in messages.items():
        for station, value in station_dict.items():
            if station in message:
              person_position.append(value)

  current_station_value = station_dict[current_station]

  distance = [current_station_value - n for n in person_position]
  min_value_index = min(distance, key=lambda n: abs(n))
  index_of_min_value = distance.index(min_value_index)
  print(list(messages.keys())[index_of_min_value])

messages={
"Leslie":"I'm at home near Xiaobitan station.",
"Bob":"I'm at Ximen MRT station.",
"Mary":"I have a drink near Jingmei MRT station.",
"Copper":"I just saw a concert at Taipei Arena.",
"Vivian":"I'm at Xindian station waiting for you."
}

find_and_print(messages, "Wanlong")
find_and_print(messages, "Songshan")
find_and_print(messages, "Qizhang") # print Leslie
find_and_print(messages, "Ximen") # print Bob
find_and_print(messages, "Xindian City Hall") # print Vivian

"""task 3"""

def func(*data):
  middle_name_list = []

  for name in data:
      middle_name = name[int(len(name)/2+1)-1]
      middle_name_list.append(middle_name)

  unique_middle_name = []

  for i, middle_name in enumerate(middle_name_list):
    count = middle_name_list.count(middle_name)
    if count == 1:
      unique_middle_name.append(data[i])

  if len(unique_middle_name):
    for result in unique_middle_name:
      print(result)

  else:
    print("沒有")


func("彭大牆", "陳王明雅", "吳明") # print 彭大牆
func("郭靜雅", "王立強", "郭林靜宜", "郭立恆", "林花花") # print 林花花
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花") # print 沒有
func("郭宣雅", "夏曼藍波安", "郭宣恆") # print 夏曼藍波安

"""Task2"""

occupied =  {
    "John": [],
    "Bob": [],
    "Jenny": []
}

def book(consultants, hour, duration, criteria):
    global occupied
    available_consultants = []
    intend_hours = (hour, hour + duration) # (15, 16)
    for consultant, booked_time in occupied.items():
        available = True
        for booked_hours in booked_time:
            if ((booked_hours[0] <= intend_hours[0] <= booked_hours[1]) or (booked_hours[0] <= intend_hours[1] <= booked_hours[1])) or (intend_hours[0] <= booked_hours[0] and intend_hours[1] >= booked_hours[1]):
                available = False
                break
        if available:
            available_consultants.append(consultant)

    if len(available_consultants):
        cc = []
        for c in consultants:
            if c['name'] in available_consultants:
                cc.append(c)
#         cc = filter(lambda person: person["name"] in available_consultants, consultants) cc也可以用這一行就好
        if criteria == "price":
            best_consultant = min(cc, key=lambda x: x["price"])["name"]
        elif criteria == "rate":
            best_consultant = max(cc, key=lambda x: x["rate"])["name"]
        print(best_consultant)
        occupied[best_consultant].append(intend_hours)
    else:
        print("No Service")


consultants=[
    {"name":"John", "rate": 4.5, "price": 1000},
    {"name":"Bob", "rate": 3, "price": 1200},
    {"name":"Jenny", "rate": 3.8, "price": 800}
]

book(consultants, 15, 1, "price") # Jenny
book(consultants, 11, 2, "price") # Jenny
book(consultants, 10, 2, "price") # John
book(consultants, 20, 2, "rate") # John
book(consultants, 11, 1, "rate") # Bob
book(consultants, 11, 2, "rate") # No Service

"""task 4"""

def get_number(index):
    a = index//3
    b = index%3
    c = 7*a + b*4
    return c

print(get_number(1))
print(get_number(5))
print(get_number(10))
print(get_number(30))