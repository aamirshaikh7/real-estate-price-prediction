import json
import pickle

__locations = None
__data_columns = None
__model = None

def get_location_names() :
    return __locations

def load_saved_artifacts() :
    print("loading saved artifacts..")
    global __data_columns
    global __locations

    with open("./artifacts/columns2.json", 'r') as f :
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[8:]

    with open("./artifacts/mumbai_home_prices_model.pickle", 'rb') as f :
        __model = pickle.load(f)
    print("Done loading artifacts..")

if __name__ == '__main__' :
    load_saved_artifacts()
    print(get_location_names())